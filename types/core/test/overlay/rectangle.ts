interface RectangleExtraData {
    test: number;
}

// $ExpectType Rectangle<any>
new AMap.Rectangle();
// $ExpectType Rectangle<any>
new AMap.Rectangle({});
// $ExpectType Rectangle<RectangleExtraData>
const testRectangle = new AMap.Rectangle<RectangleExtraData>({
    map,
    zIndex: 10,
    bounds,
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'solid',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

// $ExpectType Bounds | undefined
testRectangle.getBounds();

// $ExpectType void
testRectangle.setBounds(bounds);

// $ExpectType void
testRectangle.setOptions({});
// $ExpectType void
testRectangle.setOptions({
    map,
    zIndex: 10,
    bounds,
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#00FF00',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'solid',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

{
    const options = testRectangle.getOptions();
    // $ExpectType Bounds | undefined
    options.bounds;
    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | RectangleExtraData | undefined
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

// $ExpectType void
testRectangle.hide();

// $ExpectType void
testRectangle.show();

// $ExpectType void
testRectangle.setExtData({test: 2});

// $ExpectType {} | RectangleExtraData
testRectangle.getExtData();

// $ExpectType boolean
testRectangle.contains(lnglat);
// $ExpectType boolean
testRectangle.contains(lnglatTuple);

testRectangle.on('click', (event: AMap.Rectangle.EventMap<typeof testRectangle>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Rectangle<RectangleExtraData>
    event.target;
});

testRectangle.on('setBounds', (event: AMap.Rectangle.EventMap<typeof testRectangle>['setBounds']) => {
    // $ExpectType "setBounds"
    event.type;
    // $ExpectError
    event.target;
});
