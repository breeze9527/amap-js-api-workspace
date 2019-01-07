testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map');
    const mapCenter = map.getCenter();
    const bounds = new AMap.Bounds(mapCenter.offset(3e3, 3e3), mapCenter.offset(-3e3, -3e3));
    const rectangle = new AMap.Rectangle<ExtraData>({
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

    test('new Rectangle()', new AMap.Rectangle());
    test('new Rectangle({})', new AMap.Rectangle({}));
    test('new Rectangle(options)', rectangle);

    test('Rectangle@click', rectangle.on('click', event => {
        test('Rectangle@click$event', event);
    }));

    test('Rectangle@change', rectangle.on('change', event => {
        test('Rectangle@change$event', event);
    }));

    test('Rectangle@options', rectangle.on('options', event => {
        test('Rectangle@options$event', event);
    }));

    test('Rectangle@setBounds', rectangle.on('setBounds', event => {
        test('Rectangle@setBounds$event', event);
    }));

    test('Rectangle#getBounds', rectangle.getBounds());

    test('Rectangle#setBounds(Bounds)', rectangle.setBounds(bounds));
    test('Rectangle#setBounds(Bounds, true)', rectangle.setBounds(bounds, true));

    test('Rectangle#setOptions({})', rectangle.setOptions({}));
    test('Rectangle#setOptions(options)', rectangle.setOptions({
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
    }));

    test('Rectangle#getOptions', rectangle.getOptions());

    test('Rectangle#hide', rectangle.hide());

    test('Rectangle#show', rectangle.show());

    test('Rectangle#setMap(null)', rectangle.setMap(null));
    test('Rectangle#setMap(Map)', rectangle.setMap(map));

    test('Rectangle#setExtData', rectangle.setExtData({ test: 2 }));

    test('Rectangle#getExtData', rectangle.getExtData());

    test('Rectangle#contains', rectangle.contains(mapCenter));

    return {
        rectangle
    }
});