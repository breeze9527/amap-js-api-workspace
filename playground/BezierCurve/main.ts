testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map', {
        center: [116.40, 39.90],
        zoom: 13
    });
    const path = [
        [116.39, 39.91, 116.37, 39.91],
        [116.380298, 39.907771, 116.38, 39.90],
        [116.385298, 39.907771, 116.40, 39.90],
        [
            [116.392872, 39.887391],
            [116.40772, 39.909252],
            [116.41, 39.89]
        ],
        [116.423857, 39.889498, 116.422312, 39.899639, 116.425273, 39.902273]
    ]
    const bezierCurve = new AMap.BezierCurve<ExtraData>({
        map,
        path,
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

    test('new BezierCurve(options)', bezierCurve);

    test('BezierCurve@click', bezierCurve.on('click', event => {
        test('BezierCurve@click$event', event);
    }));

    test('BezierCurve@change', bezierCurve.on('change', event => {
        test('BezierCurve@change$event', event);
    }));

    test('BezierCurve@options', bezierCurve.on('options', event => {
        test('BezierCurve@options$event', event);
    }));

    test('BezierCurve#setPath', bezierCurve.setPath(path));

    test('BezierCurve#getPath', bezierCurve.getPath());

    test('BezierCurve#setOptions', bezierCurve.setOptions({
        map,
        path,
        strokeColor: '#FF0000',
        strokeOpacity: 0.6,
        strokeWeight: 2,
        strokeStyle: 'dashed',
        strokeDasharray: [1, 2],
        zIndex: 10,
        bubble: false,
        showDir: true,
        cursor: 'pointer',
        isOutline: true,
        outlineColor: '#00FF00',
        borderWeight: 2
    }));

    test('BezierCurve#getOptions', bezierCurve.getOptions());

    test('BezierCurve#getLength', bezierCurve.getLength());

    test('BezierCurve#getBounds', bezierCurve.getBounds());

    test('BezierCurve#hide', bezierCurve.hide());

    test('BezierCurve#show', bezierCurve.show());

    test('BezierCurve#show', bezierCurve.show());

    test('BezierCurve#setMap(null)', bezierCurve.setMap(null));
    test('BezierCurve#setMap(Map)', bezierCurve.setMap(map));

    test('BezierCurve#setExtData', bezierCurve.setExtData({ test: 2 }));

    test('BezierCurve#getExtData(Map)', bezierCurve.getExtData());

    return {
        bezierCurve,
        map
    }
});