interface PolylineExtraData {
    test: number;
}

// $ExpectType Polyline<any>
new AMap.Polyline();
// $ExpectType Polyline<any>
new AMap.Polyline({});
// $ExpectType Polyline<PolylineExtraData>
const testPolyline = new AMap.Polyline<PolylineExtraData>({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
});
// Polyline<PolylineExtraData>

// $ExpectType void
testPolyline.setPath([lnglat]);
// $ExpectType void
testPolyline.setPath([lnglatTuple]);

// $ExpectType void
testPolyline.setOptions({});
// $ExpectType void
testPolyline.setOptions({
    map,
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat, lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
});

{
    const options = testPolyline.getOptions();
    // $ExpectType number | undefined
    options.borderWeight;
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType string | undefined
    options.dirColor;
    // $ExpectType string | undefined
    options.dirImg;
    // $ExpectType {} | PolylineExtraData | undefined
    options.extData;
    // $ExpectType boolean | undefined
    options.geodesic;
    // $ExpectType boolean | undefined
    options.isOutline;
    // $ExpectType "round" | "butt" | "square" | undefined
    options.lineCap;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType string | undefined
    options.outlineColor;
    // $ExpectType LngLat[] | undefined
    options.path;
    // $ExpectType boolean | undefined
    options.showDir;
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
    // $ExpectType number | undefined
    options.zIndex;
}

// $ExpectType number
testPolyline.getLength();

// $ExpectType Bounds | null
testPolyline.getBounds();

// $ExpectType void
testPolyline.hide();

// $ExpectType void
testPolyline.show();

// $ExpectType void
testPolyline.setMap(null);
// $ExpectType void
testPolyline.setMap(map);

// $ExpectType void
testPolyline.setExtData({ test: 1 });

// $ExpectType {} | PolylineExtraData
testPolyline.getExtData();

testPolyline.on('click', (event: AMap.Polyline.EventMap<typeof testPolyline>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Polyline<PolylineExtraData>
    event.target;
});
