#!/usr/bin/env python3
"""Build the simplified offline maps.

Output, one directory (default ./offline_maps_build):

- ``world.json``: borders of every country (Natural Earth 1:50m, simplified)
  and the capitals; always downloaded, so no part of the map is empty.
- ``<CC>.json`` per country: its border and first-level regions
  (geoBoundaries), places with at least 1000 inhabitants in the country's
  own language and named peaks (GeoNames).
- ``index.json``: the countries with name, size and neighbours.

The files are published on the ``offline-maps`` branch of the Chattx
repository, from where Home Assistant downloads the chosen countries.

Usage: python3 tools/build_offline_maps.py [--out DIR] [CC ...]   (no codes: every country)

Coordinates are integers in 1e-4 degrees (about 11 m), each ring a flat
list [lon0, lat0, dlon1, dlat1, ...] of deltas from the previous point.
Data licences: Natural Earth public domain, geoBoundaries gbOpen CC BY 4.0,
GeoNames CC BY 4.0.
"""
from __future__ import annotations

import argparse
import io
import json
import math
import sys
import time
import urllib.error
import urllib.request
import zipfile
from datetime import date
from pathlib import Path

SCALE = 10_000
MIN_POPULATION = 1000
# Caps per country; large countries keep their largest places and highest
# peaks spread over the country, so a file stays around 2 MB at most.
MAX_PLACES = 12_000
MAX_PEAKS = 2_500
MAX_REGION_POINTS = 60_000
UA = {"User-Agent": "MeshCore-Chattx offline map builder (github.com/michalsiman/meshcore-ha-chattx)"}
NE = "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson"
GEONAMES = "https://download.geonames.org/export/dump"


def fetch(url: str, tries: int = 4) -> bytes:
    for attempt in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=300) as r:
                return r.read()
        except urllib.error.HTTPError as err:
            if err.code == 404 or attempt == tries - 1:
                raise
        except (urllib.error.URLError, TimeoutError):
            if attempt == tries - 1:
                raise
        time.sleep(5 * (attempt + 1))
    raise RuntimeError(url)


# ── Geometry ─────────────────────────────────────────────────────────────

def simplify(points: list[list[float]], tol: float) -> list[list[float]]:
    """Douglas-Peucker, iterative."""
    if len(points) < 4:
        return points
    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]
    while stack:
        a, b = stack.pop()
        ax, ay = points[a][0], points[a][1]
        bx, by = points[b][0], points[b][1]
        dx, dy = bx - ax, by - ay
        norm = math.hypot(dx, dy)
        best, index = -1.0, -1
        for i in range(a + 1, b):
            px, py = points[i][0], points[i][1]
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
    for point in ring:
        x, y = round(point[0] * SCALE), round(point[1] * SCALE)
        if out and x == px and y == py:
            continue
        out += [x - px, y - py] if out else [x, y]
        px, py = x, y
    return out


def rings(geometry: dict | None) -> list[list[list[float]]]:
    if not geometry:
        return []
    if geometry["type"] == "Polygon":
        return geometry["coordinates"]
    if geometry["type"] == "MultiPolygon":
        return [r for poly in geometry["coordinates"] for r in poly]
    return []


def simplified_rings(all_rings: list, tol: float, max_points: int | None = None) -> list[list[int]]:
    while True:
        out = [simplify(r, tol) for r in all_rings]
        out = [r for r in out if len(r) >= 4]
        if max_points is None or sum(len(r) for r in out) <= max_points or tol > 0.05:
            return [encode(r) for r in out]
        tol *= 1.6


# ── Sources ──────────────────────────────────────────────────────────────

def country_info() -> dict[str, dict]:
    info = {}
    for line in fetch(f"{GEONAMES}/countryInfo.txt").decode("utf-8").splitlines():
        if line.startswith("#") or not line.strip():
            continue
        r = line.split("\t")
        langs = [l.split("-")[0] for l in r[15].split(",") if l]
        info[r[0]] = {
            "iso3": r[1],
            "name": r[4],
            "language": langs[0] if langs else "",
            "neighbours": [n for n in r[17].split(",") if n] if len(r) > 17 else [],
        }
    return info


def boundary_rings(iso3: str, level: str, tol: float, max_points: int | None) -> list[list[int]] | None:
    try:
        meta = json.loads(fetch(f"https://www.geoboundaries.org/api/current/gbOpen/{iso3}/{level}/"))
    except Exception:
        return None
    url = meta.get("simplifiedGeometryGeoJSON") if isinstance(meta, dict) else None
    if not url:
        return None
    data = json.loads(fetch(url))
    all_rings = [r for f in data["features"] for r in rings(f.get("geometry"))]
    return simplified_rings(all_rings, tol, max_points)


def local_names(iso2: str, lang: str) -> dict[str, str]:
    """GeoNames id → name in the country's language (preferred name first)."""
    if not lang:
        return {}
    try:
        archive = zipfile.ZipFile(io.BytesIO(fetch(f"{GEONAMES}/alternatenames/{iso2}.zip")))
    except Exception:
        return {}
    names: dict[str, tuple[int, str]] = {}
    with archive.open(f"{iso2}.txt") as f:
        for line in io.TextIOWrapper(f, "utf-8"):
            r = line.rstrip("\n").split("\t")
            if len(r) < 8 or r[2] != lang or r[6] == "1" or r[7] == "1" or (len(r) > 9 and r[9]):
                continue  # other language, colloquial or historic
            score = 2 if r[4] == "1" else 1 if r[5] != "1" else 0  # preferred, then full names
            if r[1] not in names or names[r[1]][0] < score:
                names[r[1]] = (score, r[3])
    return {k: v for k, (_, v) in names.items()}


def drop_city_districts(places: list) -> list:
    """Leave out places close to a much larger one: districts of a city."""
    big = [p for p in places if p[3] >= 50_000]
    cell = 0.5
    grid: dict[tuple[int, int], list] = {}
    for b in big:
        grid.setdefault((int(b[0] / SCALE // cell), int(b[1] / SCALE // cell)), []).append(b)
    kept = []
    for p in places:
        district = False
        if p[4] >= 2:
            gx, gy = int(p[0] / SCALE // cell), int(p[1] / SCALE // cell)
            for dx in (-1, 0, 1):
                for dy in (-1, 0, 1):
                    for b in grid.get((gx + dx, gy + dy), ()):
                        if b is p or b[3] < 10 * max(p[3], 1):
                            continue
                        reach = max(4.0, 1.5 * b[3] / 100_000)
                        ddx = (p[0] - b[0]) / SCALE * 111.3 * math.cos(math.radians(b[1] / SCALE))
                        ddy = (p[1] - b[1]) / SCALE * 111.3
                        if math.hypot(ddx, ddy) < reach:
                            district = True
                            break
                    if district:
                        break
                if district:
                    break
        if not district:
            kept.append(p)
    return kept


def thin_peaks(peaks: list, limit: int) -> list:
    """The highest peak per grid cell, the cell growing until at most `limit` remain."""
    cell = 0.08
    while True:
        best: dict[tuple[int, int], list] = {}
        for p in peaks:
            key = (math.floor(p[0] / SCALE / cell), math.floor(p[1] / SCALE / cell))
            if key not in best or best[key][3] < p[3]:
                best[key] = p
        if len(best) <= limit:
            return sorted(best.values(), key=lambda p: -p[3])
        cell *= 1.4


def places_and_peaks(iso2: str, lang: str) -> tuple[list, list]:
    try:
        archive = zipfile.ZipFile(io.BytesIO(fetch(f"{GEONAMES}/{iso2}.zip")))
    except Exception:
        return [], []
    local = local_names(iso2, lang)
    places, peaks = [], []
    with archive.open(f"{iso2}.txt") as f:
        for line in io.TextIOWrapper(f, "utf-8"):
            r = line.rstrip("\n").split("\t")
            if len(r) < 17:
                continue
            fclass, code = r[6], r[7]
            if fclass == "P" and code.startswith("PPL") and code not in ("PPLX", "PPLH", "PPLQ", "PPLW"):
                pop = int(r[14] or 0)
                if code == "PPLC" or code == "PPLA" or pop >= MIN_POPULATION:
                    rank = 0 if code == "PPLC" else 1 if code == "PPLA" else 2
                    name = local.get(r[0], r[1])
                    places.append([round(float(r[5]) * SCALE), round(float(r[4]) * SCALE), name, pop, rank])
            elif fclass == "T" and code in ("PK", "MT") and (r[15] or r[16]):
                try:
                    ele = int(float(r[15] or r[16]))
                except ValueError:
                    continue
                if ele > 0:
                    peaks.append([round(float(r[5]) * SCALE), round(float(r[4]) * SCALE), local.get(r[0], r[1]), ele])
    places.sort(key=lambda p: (p[4], -p[3]))
    places = drop_city_districts(places)
    if len(places) > MAX_PLACES:
        places = [p for p in places if p[4] < 2] + [p for p in places if p[4] >= 2][: MAX_PLACES]
    return places, thin_peaks(peaks, MAX_PEAKS)


# ── Build ────────────────────────────────────────────────────────────────

def world(info: dict[str, dict]) -> dict:
    countries = json.loads(fetch(f"{NE}/ne_50m_admin_0_countries.geojson"))
    borders: dict[str, list] = {}
    for f in countries["features"]:
        props = f["properties"]
        code = props.get("ISO_A2_EH") or props.get("ISO_A2")
        if not code or code == "-99":
            continue
        borders.setdefault(code, []).extend(simplified_rings(rings(f["geometry"]), 0.05))
    places = json.loads(fetch(f"{NE}/ne_10m_populated_places_simple.geojson"))
    capitals = []
    for f in places["features"]:
        p = f["properties"]
        if p.get("adm0cap") in (1, 1.0) and p.get("iso_a2") not in (None, "-99"):
            lon, lat = f["geometry"]["coordinates"]
            capitals.append([round(lon * SCALE), round(lat * SCALE), p.get("name"), p.get("iso_a2")])
    return {
        "v": 1,
        "built": date.today().isoformat(),
        "attribution": "Natural Earth (public domain)",
        "borders": borders,
        "capitals": capitals,
    }


def build_country(iso2: str, c: dict) -> dict | None:
    border = boundary_rings(c["iso3"], "ADM0", 0.0015, MAX_REGION_POINTS // 3)
    regions = boundary_rings(c["iso3"], "ADM1", 0.0015, MAX_REGION_POINTS) or []
    places, peaks = places_and_peaks(iso2, c["language"])
    if not border and not places:
        return None
    return {
        "v": 1,
        "country": iso2,
        "name": c["name"],
        "built": date.today().isoformat(),
        "attribution": "geoBoundaries (CC BY 4.0), GeoNames (CC BY 4.0)",
        "border": border or [],
        "regions": regions,
        "places": places,
        "peaks": peaks,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default="offline_maps_build")
    parser.add_argument("codes", nargs="*")
    args = parser.parse_args()
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    info = country_info()

    text = json.dumps(world(info), ensure_ascii=False, separators=(",", ":"))
    (out / "world.json").write_text(text, encoding="utf-8")
    print(f"world: {len(text) // 1024} kB", flush=True)

    for iso2 in [c.upper() for c in args.codes] or sorted(info):
        if iso2 not in info:
            print(f"{iso2}: unknown", flush=True)
            continue
        try:
            data = build_country(iso2, info[iso2])
        except Exception as err:  # keep going; report at the end
            print(f"{iso2}: FAILED {err}", flush=True)
            continue
        if data is None:
            print(f"{iso2}: no data", flush=True)
            continue
        text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
        (out / f"{iso2}.json").write_text(text, encoding="utf-8")
        print(f"{iso2}: {len(text) // 1024} kB, {len(data['places'])} places, {len(data['peaks'])} peaks, "
              f"{'regions' if data['regions'] else 'no regions'}", flush=True)

    index = {}
    for iso2, c in info.items():
        path = out / f"{iso2}.json"
        if path.exists():
            index[iso2] = {"name": c["name"], "size": path.stat().st_size, "neighbours": c["neighbours"]}
    (out / "index.json").write_text(json.dumps({
        "v": 2,
        "built": date.today().isoformat(),
        "world": {"size": (out / "world.json").stat().st_size},
        "countries": index,
    }, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")


if __name__ == "__main__":
    sys.exit(main())
