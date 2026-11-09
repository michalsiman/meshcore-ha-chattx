# Offline map data for MeshCore Chattx

Simplified maps that the Chattx panel draws when online map tiles can't be
loaded. Home Assistant downloads `world.json` and the chosen countries from
this branch (Settings → Map in Chattx) and keeps them, so the map then works
without internet.

- `world.json`: borders of all countries and their capitals
- `<CC>.json`: one country: border, first-level regions, places with at
  least 1000 inhabitants (names in the country's language) and named peaks
- `index.json`: the countries with size and neighbours

Built with `tools/build_offline_maps.py` from the `main` branch. This branch
is rebuilt now and then and holds only the latest data.

Sources and licences:

- [Natural Earth](https://www.naturalearthdata.com/) (public domain): world borders and capitals
- [geoBoundaries](https://www.geoboundaries.org/) gbOpen (CC BY 4.0): country and region borders
- [GeoNames](https://www.geonames.org/) (CC BY 4.0): places and peaks
