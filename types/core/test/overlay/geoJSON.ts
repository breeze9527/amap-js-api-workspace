interface GeoJSONExtraData {
    test: number;
}

const geoJSONObject: AMap.GeoJSON.GeoJSONObject[] = [
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
            coordinates: [lnglatTuple, lnglatTuple]
        }
    }
];

// $ExpectType GeoJSON<any>
new AMap.GeoJSON();
// $ExpectType GeoJSON<any>
new AMap.GeoJSON({});
// $ExpectType GeoJSON<GeoJSONExtraData>
const testGeoJSON = new AMap.GeoJSON<GeoJSONExtraData>({
    geoJSON: geoJSONObject,
    getMarker(obj, lnglat) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat
        lnglat;
        return marker;
    },
    getPolyline(obj, lnglats) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat[]
        lnglats;
        return testPolyline;
    },
    getPolygon(obj, lnglats) {
        // $ExpectType GeoJSONObject
        obj;
        // $ExpectType LngLat[]
        lnglats;
        return testPolygon;
    },
    coordsToLatLng(coord) {
        // $ExpectType LngLat
        coord;
        return coord;
    }
});

// $ExpectType void
testGeoJSON.importData(geoJSONObject);

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.removeOverlay(marker);
// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.removeOverlay([marker]);

// $ExpectType boolean
testGeoJSON.hasOverlay(marker);
// $ExpectType boolean
testGeoJSON.hasOverlay(m => m === marker);

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.addOverlay(marker);
// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.addOverlay([marker]);

// $ExpectType GeoJSONObject[]
testGeoJSON.toGeoJSON();

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.setMap(null);
// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.setMap(map);

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.hide();

// $ExpectType GeoJSON<GeoJSONExtraData>
testGeoJSON.show();

testGeoJSON.on('click', (event: AMap.MapsEvent<'click', AMap.Overlay>) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Overlay<any>
    event.target;
});
