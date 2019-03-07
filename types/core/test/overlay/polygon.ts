interface PolygonExtraData {
    test: number;
}

const polygonPath1 = [lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple, lnglatTuple];
const polygonPath2 = [lnglat, lnglat, lnglat, lnglat, lnglat];

// $ExpectType Polygon<any>
new AMap.Polygon();
// $ExpectType Polygon<any>
new AMap.Polygon({});
// $ExpectType Polygon<PolygonExtraData>
const testPolygon = new AMap.Polygon<PolygonExtraData>({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.3,
    strokeWeight: 5,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    draggable: true,
    extData: { test: 1 },
    strokeStyle: 'dashed',
    strokeDasharray: [2, 4],
    path: polygonPath1
});

// $ExpectType void
testPolygon.setPath(polygonPath1);
// $ExpectType void
testPolygon.setPath(polygonPath2);
// $ExpectType void
testPolygon.setPath([polygonPath1, polygonPath2]);

// $ExpectType LngLat[] | LngLat[][]
testPolygon.getPath();

// $ExpectType void
testPolygon.setOptions({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 5,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    draggable: true,
    extData: { test: 1 },
    strokeStyle: 'dashed',
    strokeDasharray: [4, 2],
    path: [polygonPath2, polygonPath1]
});

{
    const options = testPolygon.getOptions();
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | PolygonExtraData | undefined
    options.extData;
    // $ExpectType string | undefined
    options.fillColor;
    // $ExpectType number | undefined
    options.fillOpacity;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType LngLat[] | LngLat[][] | undefined
    options.path;
    // $ExpectType string | undefined
    options.strokeColor;
    // $ExpectType number[] | undefined
    options.strokeDasharray;
    // $ExpectType number | undefined
    options.strokeOpacity;
    // $ExpectType "dashed" | "solid" | undefined
    options.strokeStyle;
    // $ExpectType number | undefined
    options.strokeWeight;
    // $ExpectType string | undefined
    options.texture;
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType Bounds | null
testPolygon.getBounds();

// $ExpectType number
testPolygon.getArea();

// $ExpectType void
testPolygon.setMap(null);
// $ExpectType void
testPolygon.setMap(map);

// $ExpectType void
testPolygon.setExtData({ test: 1 });

// $ExpectType {} | PolygonExtraData
testPolygon.getExtData();

// $ExpectType boolean
testPolygon.contains(lnglat);
// $ExpectType boolean
testPolygon.contains(lnglatTuple);

testPolygon.on('click', (event: AMap.Polygon.EventMap<typeof testPolygon>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Polygon<PolygonExtraData>
    event.target;
});
