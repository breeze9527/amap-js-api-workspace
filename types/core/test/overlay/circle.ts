interface CircleExtraData {
    test: number;
}

// $ExpectType Circle<any>
new AMap.Circle();
new AMap.Circle({});
// $ExpectType Circle<CircleExtraData>
const testCircle = new AMap.Circle<CircleExtraData>({
    map,
    zIndex: 10,
    center: lnglat,
    bubble: true,
    cursor: 'pointer',
    radius: 1000,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#00FF00',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [2, 4]
});

// $ExpectType void
testCircle.setCenter(lnglat);
// $ExpectType void
testCircle.setCenter(lnglatTuple);

// $ExpectType LngLat | undefined
testCircle.getCenter();

// $ExpectType Bounds | null
testCircle.getBounds();

// $ExpectType void
testCircle.setRadius(100);

// $ExpectType number
testCircle.getRadius();

// $ExpectType void
testCircle.setOptions({});
testCircle.setOptions({
    map,
    zIndex: 10,
    center: lnglat,
    bubble: true,
    cursor: 'pointer',
    radius: 1000,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#00FF00',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [2, 4]
});

{
    const options = testCircle.getOptions();
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType LngLat | undefined
    options.center;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | CircleExtraData | undefined
    options.extData;
    // $ExpectType string | undefined
    options.fillColor;
    // $ExpectType number | undefined
    options.fillOpacity;
    // $ExpectType "miter" | "round" | "bevel" | undefined
    options.lineJoin;
    // $ExpectType Map | undefined
    options.map;
    // $ExpectType LngLat[] | undefined
    options.path;
    // $ExpectType number | undefined
    options.radius;
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
testCircle.getBounds();

// $ExpectType void
testCircle.hide();

// $ExpectType void
testCircle.show();

// $ExpectType void
testCircle.setMap(null);
// $ExpectType void
testCircle.setMap(map);

// $ExpectType void
testCircle.setExtData({ test: 2 });
// $ExpectError
testCircle.setExtData({ test: '1' });

// $ExpectType {} | CircleExtraData
testCircle.getExtData();

// $ExpectType boolean
testCircle.contains(lnglat);
// $ExpectType boolean
testCircle.contains(lnglatTuple);

testCircle.on('click', (event: AMap.Circle.EventMap<typeof testCircle>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Circle<CircleExtraData>
    event.target;
});

testCircle.on('setCenter', (event: AMap.Circle.EventMap<typeof testCircle>['setCenter']) => {
    // $ExpectType "setCenter"
    event.type;
    // $ExpectError
    event.target;
});

testCircle.on('change', (event: AMap.Circle.EventMap<typeof testCircle>['change']) => {
    // $ExpectType "change"
    event.type;
    // $ExpectType Circle<CircleExtraData>
    event.target;
});
