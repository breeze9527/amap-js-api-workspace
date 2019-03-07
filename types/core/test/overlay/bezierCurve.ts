interface BezierCurveExtraData {
    test: number;
}

const bezierCurvePath = [
    [1, 2, 3, 4],
    [1, 2, 3],
    [
        [1, 2, 3],
        [1, 2]
    ],
    [1, 2]
];

// $ExpectError
new AMap.BezierCurve();
// $ExpectError
new AMap.BezierCurve({});
// $ExpectType BezierCurve<BezierCurveExtraData>
const testBezierCurve = new AMap.BezierCurve<BezierCurveExtraData>({
    map,
    path: bezierCurvePath,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [1, 5],
    zIndex: 10,
    bubble: false,
    showDir: true,
    cursor: 'pointer',
    isOutline: true,
    outlineColor: '#00FF00',
    borderWeight: 2
});

// $ExpectType void
testBezierCurve.setPath(bezierCurvePath);

// $ExpectType void
testBezierCurve.setPath(bezierCurvePath);

// $ExpectType void
testBezierCurve.setOptions({});
testBezierCurve.setOptions({
    map,
    path: bezierCurvePath,
    strokeColor: '#FF0000',
    strokeOpacity: 0.6,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [1, 5],
    zIndex: 10,
    bubble: false,
    showDir: true,
    cursor: 'pointer',
    isOutline: true,
    outlineColor: '#00FF00',
    borderWeight: 2
});

{
    const options = testBezierCurve.getOptions();

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
    // $ExpectType {} | BezierCurveExtraData | undefined
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
    // $ExpectType (LngLat & { controlPoints: LngLat[]; })[] | undefined
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
testBezierCurve.getLength();

// $ExpectType Bounds | null
testBezierCurve.getBounds();

// $ExpectType void
testBezierCurve.show();

// $ExpectType void
testBezierCurve.hide();

// $ExpectType void
testBezierCurve.setMap(null);
testBezierCurve.setMap(map);

// $ExpectType void
testBezierCurve.setExtData({ test: 1 });
// $ExpectError
testBezierCurve.setExtData({ test: '123' });

// $ExpectType {} | BezierCurveExtraData
testBezierCurve.getExtData();

testBezierCurve.on('click', (event: AMap.BezierCurve.EventMap<typeof testBezierCurve>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType BezierCurve<BezierCurveExtraData>
    event.target;
});

testBezierCurve.on('show', (event: AMap.BezierCurve.EventMap<typeof testBezierCurve>['show']) => {
    // $ExpectType "show"
    event.type;
    // $ExpectType BezierCurve<BezierCurveExtraData>
    event.target;
});

testBezierCurve.on('options', (event: AMap.BezierCurve.EventMap<typeof testBezierCurve>['options']) => {
    // $ExpectType "options"
    event.type;
    // $ExpectError
    event.target;
});
