testWrapper(() => {
    const map = new AMap.Map('map');
    const lnglat = map.getCenter();
    const lnglat2 = lnglat.offset(1000, 1000);
    const lnglatTuple: [number, number] = [lnglat.getLng(), lnglat.getLat()];
    const lnglatTuple2: [number, number] = [lnglat2.getLng(), lnglat2.getLat()];
    const marker = new AMap.Marker({
        map,
        position: lnglat2
    });

    const geoJSONObject: AMap.GeoJSONObject[] = [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Point',
                coordinates: lnglatTuple
            }
        },
        {
            type: 'Feature',
            properties: { test: 1 },
            geometry: {
                type: 'LineString',
                coordinates: [lnglatTuple, lnglatTuple2]
            }
        }
    ];
    const geoJSON = new AMap.GeoJSON({
        geoJSON: geoJSONObject,
        getMarker(obj, lnglat) {
            test('GeoJSONOptions#geoMarker$obj', obj);
            test('GeoJSONOptions#geoMarker$lnglat', lnglat);
            return new AMap.Marker({
                position: lnglat
            });
        },
        getPolyline(obj, lnglats) {
            test('GeoJSONOptions#getPolyline$obj', obj);
            test('GeoJSONOptions#getPolyline$lnglats', lnglats);
            return new AMap.Polyline({
                path: lnglats
            });
        },
        getPolygon(obj, lnglats) {
            test('GeoJSONOptions#getPolygon$obj', obj);
            test('GeoJSONOptions#getPolygon$lnglats', lnglats);
            return new AMap.Polygon({
                path: lnglats
            });
        },
        coordsToLatLng(lnglat) {
            test('GeoJSONOptions#coordsToLatLng$lnglat', lnglat);
            return lnglat;
        },
        coordsToLatLngs(lnglats) {
            test('GeoJSONOptions#coordsToLatLngs$lnglat', lnglats);
            return lnglats;
        }
    });

    test('new GeoJSON()', new AMap.GeoJSON());
    test('new GeoJSON({})', new AMap.GeoJSON({}));
    test('new GeoJSON(options)', geoJSON);

    test('GeoJSON#importData', geoJSON.importData(geoJSONObject));

    test('GeoJSON#removeOverlay', geoJSON.removeOverlay(marker))

    test('GeoJSON#getOverlays', geoJSON.getOverlays())

    test('GeoJSON#hasOverlay(Overlay)', geoJSON.hasOverlay(marker));
    test('GeoJSON#hasOverlay(Function)', geoJSON.hasOverlay(o => o === marker));

    test('GeoJSON#addOverlay(Overlay)', geoJSON.addOverlay(marker));

    test('GeoJSON#toGeoJSON', geoJSON.toGeoJSON());

    test('GeoJSON#setMap(null)', geoJSON.setMap(null));
    test('GeoJSON#setMap(map)', geoJSON.setMap(map));

    test('GeoJSON#hide', geoJSON.hide());

    test('GeoJSON#show', geoJSON.show());
});