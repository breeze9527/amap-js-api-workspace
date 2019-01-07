testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map');
    const lnglat1 = map.getCenter();
    const lnglat2 = lnglat1.offset(50e5, 10e5);

    const polyline = new AMap.Polyline<ExtraData>({
        map,
        zIndex: 10,
        bubble: true,
        cursor: 'default',
        geodesic: true,
        isOutline: true,
        borderWeight: 1,
        outlineColor: '#AA0000',
        path: [lnglat1, lnglat2],
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
    test('new Polyline', new AMap.Polyline());
    test('new Polyline({})', new AMap.Polyline({}));
    test('new Polyline(options)', polyline);


    test('Polyline@click', polyline.on('click', event => {
        test('Polyline@click$event', event);
    }));

    test('Polyline@change', polyline.on('change', event => {
        test('Polyline@change$event', event);
    }));

    test('Polyline@options', polyline.on('options', event => {
        test('Polyline@options$event', event);
    }));

    test('Polyline#setPath', polyline.setPath([lnglat1, lnglat2]));

    test('Polyline#getPath', polyline.getPath());

    test('Polyline#getOptions', polyline.getOptions());

    test('Polyline#setOptions', polyline.setOptions({
        map,
        zIndex: 10,
        bubble: true,
        cursor: 'default',
        geodesic: true,
        isOutline: true,
        borderWeight: 1,
        outlineColor: '#AA0000',
        path: [lnglat1, lnglat2],
        strokeColor: '#0000AA',
        strokeOpacity: 0.5,
        strokeWeight: 10,
        strokeStyle: 'dashed',
        strokeDasharray: [2, 4, 6],
        lineJoin: 'bevel',
        lineCap: 'butt',
        draggable: true,
        extData: { test: 1 },
        showDir: true
    }));

    test('Polyline#getLength', polyline.getLength());

    test('Polyline#getBounds', polyline.getBounds());

    test('Polyline#hide', polyline.hide());

    test('Polyline#show', polyline.show());

    test('Polyline#setMap(null)', polyline.setMap(null));
    test('Polyline#setMap(map)', polyline.setMap(map));

    test('Polyline#setExtData', polyline.setExtData({ test: 3 }));

    test('Polyline#getExtData', polyline.getExtData());
});
