interface EllipseExtraData {
    test: number;
}
// $ExpectType Ellipse<any>
new AMap.Ellipse();
// $ExpectType Ellipse<any>
new AMap.Ellipse({});
// $ExpectType Ellipse<EllipseExtraData>
const testEllipse = new AMap.Ellipse<EllipseExtraData>({
    map,
    zIndex: 10,
    center: lnglat,
    radius: [10000, 15000],
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

// $ExpectType LngLat | undefined
testEllipse.getCenter();

// $ExpectType void
testEllipse.setCenter(lnglat);
// $ExpectType void
testEllipse.setCenter(lnglatTuple);

// $ExpectType Bounds | null
testEllipse.getBounds();

// $ExpectType void
testEllipse.setOptions({
    map,
    zIndex: 10,
    center: lnglat,
    radius: [10000, 15000],
    bubble: false,
    cursor: 'pointer',
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#0000FF',
    fillOpacity: 0.5,
    strokeStyle: 'dashed',
    extData: { test: 1 },
    strokeDasharray: [1, 5]
});

{
    const options = testEllipse.getOptions();

    // $ExpectType boolean | undefined
    options.bubble;
    // $ExpectType LngLat | undefined
    options.center;
    // $ExpectType boolean | undefined
    options.clickable;
    // $ExpectType {} | EllipseExtraData | undefined
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
    // $ExpectType [number, number] | undefined
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

// $ExpectType void
testEllipse.hide();

// $ExpectType void
testEllipse.show();

// $ExpectType void
testEllipse.setMap(null);
// $ExpectType void
testEllipse.setMap(map);

// $ExpectType void
testEllipse.setExtData({ test: 2 });
// $ExpectType {} | EllipseExtraData
testEllipse.getExtData();

// $ExpectType boolean
testEllipse.contains(lnglat);
// $ExpectType boolean
testEllipse.contains(lnglatTuple);
