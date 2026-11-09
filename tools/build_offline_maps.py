#!/usr/bin/env python3
"""Build the simplified offline maps in offline_maps/.

One small JSON file per country with what the panel's offline map draws:
the country border and its first-level regions (geoBoundaries, simplified),
places with at least 1000 inhabitants and named peaks (GeoNames). Home
Assistant downloads the files of the chosen countries from GitHub, so no
map service is needed at run time.

Usage: python3 tools/build_offline_maps.py CZ SK PL ...   (no arguments: all in COUNTRIES)

Coordinates are stored as integers in 1e-4 degrees (about 11 m), each ring
as a flat list [lon0, lat0, dlon1, dlat1, ...] of deltas from the previous
point. Data licences: geoBoundaries gbOpen CC BY 4.0, GeoNames CC BY 4.0.
"""
from __future__ import annotations

import io
import json
import math
import sys
import urllib.request
import zipfile
from datetime import date
from pathlib import Path

# Language of the place names shown on the map (GeoNames' main name is often English).
LOCAL_LANGUAGE = {"AT": "de", "CZ": "cs", "DE": "de", "HR": "hr", "HU": "hu", "PL": "pl", "SI": "sl", "SK": "sk"}

# ISO 3166-1 alpha-2 → alpha-3 and English name.
COUNTRIES = {
    "AT": ("AUT", "Austria"),
    "CH": ("CHE", "Switzerland"),
    "CZ": ("CZE", "Czechia"),
    "DE": ("DEU", "Germany"),
    "HR": ("HRV", "Croatia"),
    "HU": ("HUN", "Hungary"),
    "PL": ("POL", "Poland"),
    "SI": ("SVN", "Slovenia"),
    "SK": ("SVK", "Slovakia"),
}

SCALE = 10_000
# Douglas-Peucker tolerance in degrees (about 150 m).
TOLERANCE = 0.0015
MIN_POPULATION = 1000
# Keep the highest named peak per grid cell of this size in degrees.
PEAK_CELL = 0.08
UA = {"User-Agent": "MeshCore-Chattx offline map builder"}

OUT = Path(__file__).resolve().parent.parent / "offline_maps"


def fetch(url: str) -> bytes:
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=300) as r:
        return r.read()


def simplify(points: list[list[float]], tol: float) -> list[list[float]]:
    """Douglas-Peucker, iterative."""
    if len(points) < 4:
        return points
    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        a, b = stack.pop()
        ax, ay = points[a]
        bx, by = points[b]
        dx, dy = bx - ax, by - ay
        norm = math.hypot(dx, dy)
        best, index = -1.0, -1
        for i in range(a + 1, b):
            px, py = points[i]
            d = abs(dy * px - dx * py + bx * ay - by * ax) / norm if norm else math.hypot(px - ax, py - ay)
            if d > best:
                best, index = d, i
        if best > tol:
            keep[index] = True
            stack.append((a, index))
            stack.append((index, b))
    return [p for p, k in zip(points, keep) if k]


def encode(ring: list[list[float]]) -> list[int]:
    out: list[int] = []
    px = py = 0
    for lon, lat in ring:
        x, y = round(lon * SCALE), round(lat * SCALE)
        if out and x == px and y == py:
            continue
        out += [x - px, y - py] if out else [x, y]
        px, py = x, y
    return out


def rings(geometry: dict) -> list[list[list[float]]]:
    if geometry["type"] == "Polygon":
        return geometry["coordinates"]
    if geometry["type"] == "MultiPolygon":
        return [r for poly in geometry["coordinates"] for r in poly]
    return []


def boundary_rings(iso3: str, level: str) -> list[list[int]]:
    meta = json.loads(fetch(f"https://www.geoboundaries.org/api/current/gbOpen/{iso3}/{level}/"))
    data = json.loads(fetch(meta["simplifiedGeometryGeoJSON"]))
    result = []
    for feature in data["features"]:
        for ring in rings(feature["geometry"]):
            simple = simplify(ring, TOLERANCE)
            if len(simple) >= 4:
                result.append(encode(simple))
    return result


def local_names(iso2: str) -> dict[str, str]:
    """GeoNames id → name in the country's language (preferred name first)."""
    lang = LOCAL_LANGUAGE.get(iso2)
    if not lang:
        return {}
    archive = zipfile.ZipFile(io.BytesIO(fetch(f"https://download.geonames.org/export/dump/alternatenames/{iso2}.zip")))
    names: dict[str, tuple[int, str]] = {}
    with archive.open(f"{iso2}.txt") as f:
        for line in io.TextIOWrapper(f, "utf-8"):
            r = line.rstrip("\n").split("\t")
            if len(r) < 8 or r[2] != lang or r[6] == "1" or r[7] == "1" or (len(r) > 9 and r[9] == "1"):
                continue  # other language, or historic name
            score = 2 if r[4] == "1" else 1 if r[5] != "1" else 0  # preferred, then full names over short ones
            if r[1] not in names or names[r[1]][0] < score:
                names[r[1]] = (score, r[3])
    return {k: v for k, (_, v) in names.items()}


def places_and_peaks(iso2: str) -> tuple[list, list]:
    local = local_names(iso2)
    archive = zipfile.ZipFile(io.BytesIO(fetch(f"https://download.geonames.org/export/dump/{iso2}.zip")))
    places, peaks = [], {}
    with archive.open(f"{iso2}.txt") as f:
        for line in io.TextIOWrapper(f, "utf-8"):
            r = line.rstrip("\n").split("\t")
            name, lat, lon, fclass, code = local.get(r[0], r[1]), float(r[4]), float(r[5]), r[6], r[7]
            if fclass == "P" and code.startswith("PPL") and code not in ("PPLX", "PPLH", "PPLQ", "PPLW"):
                pop = int(r[14] or 0)
                # PPLC capital, PPLA region seat; everything else by population.
                if code == "PPLC" or code == "PPLA" or pop >= MIN_POPULATION:
                    rank = 0 if code == "PPLC" else 1 if code == "PPLA" else 2
                    places.append([round(lon * SCALE), round(lat * SCALE), name, pop, rank])
            elif fclass == "T" and code in ("PK", "MT") and (r[15] or r[16]):
                ele = int(float(r[15] or r[16]))
                if ele <= 0:
                    continue
                cell = (math.floor(lon / PEAK_CELL), math.floor(lat / PEAK_CELL))
                if cell not in peaks or peaks[cell][3] < ele:
                    peaks[cell] = [round(lon * SCALE), round(lat * SCALE), name, ele]
    places.sort(key=lambda p: (p[4], -p[3]))
    return drop_city_districts(places), sorted(peaks.values(), key=lambda p: -p[3])


def drop_city_districts(places: list) -> list:
    """Leave out places close to a much larger one: districts of a city."""
    big = [p for p in places if p[3] >= 50_000]
    kept = []
    for p in places:
        district = False
        for b in big:
            if b is p or b[3] < 10 * max(p[3], 1) or p[4] < 2:
                continue
            # Within about 1.5 km per 100 000 inhabitants (at least 4 km).
            reach = max(4.0, 1.5 * b[3] / 100_000)
            dx = (p[0] - b[0]) / SCALE * 111.3 * math.cos(math.radians(b[1] / SCALE))
            dy = (p[1] - b[1]) / SCALE * 111.3
            if math.hypot(dx, dy) < reach:
                district = True
                break
        if not district:
            kept.append(p)
    return kept


def build(iso2: str) -> dict:
    iso3, name = COUNTRIES[iso2]
    places, peaks = places_and_peaks(iso2)
    return {
        "v": 1,
        "country": iso2,
        "name": name,
        "built": date.today().isoformat(),
        "attribution": "geoBoundaries (CC BY 4.0), GeoNames (CC BY 4.0)",
        "border": boundary_rings(iso3, "ADM0"),
        "regions": boundary_rings(iso3, "ADM1"),
        "places": places,
        "peaks": peaks,
    }


def main(codes: list[str]) -> None:
    OUT.mkdir(exist_ok=True)
    for iso2 in codes:
        data = build(iso2)
        text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
        (OUT / f"{iso2}.json").write_text(text, encoding="utf-8")
        print(f"{iso2}: {len(text) // 1024} kB, {len(data['places'])} places, {len(data['peaks'])} peaks")
    index = {}
    for iso2, (_, name) in COUNTRIES.items():
        path = OUT / f"{iso2}.json"
        if path.exists():
            built = json.loads(path.read_text(encoding="utf-8"))["built"]
            index[iso2] = {"name": name, "size": path.stat().st_size, "built": built}
    (OUT / "index.json").write_text(json.dumps({"v": 1, "countries": index}, indent=1) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main([c.upper() for c in sys.argv[1:]] or list(COUNTRIES))
