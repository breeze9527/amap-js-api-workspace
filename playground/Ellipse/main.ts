testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const centerTuple: [number, number] = [center.getLat(), center.getLng()];

    const ellipse = new AMap.Ellipse<ExtraData>({
        map,
        zIndex: 10,
        center,
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

    test('new Ellipse()', new AMap.Ellipse());
    test('new Ellipse({})', new AMap.Ellipse({}));
    test('new Ellipse(options)', ellipse);

    test('Ellipse@click', ellipse.on('click', event => {
        test('Ellipse@click$event', event);
    }));

    test('Ellipse@change', ellipse.on('change', event => {
        test('Ellipse@change$event', event);
    }));

    test('Ellipse@options', ellipse.on('options', event => {
        test('Ellipse@options$event', event);
    }));

    test('Ellipse@setCenter', ellipse.on('setCenter', event => {
        test('Ellipse@setCenter$event', event);
    }));

    test('Ellipse#getCenter', ellipse.getCenter());

    test('Ellipse#setCenter([number, number])', ellipse.setCenter(centerTuple));
    test('Ellipse#setCenter(LngLat)', ellipse.setCenter(center));

    test('Ellipse#getBounds()', ellipse.getBounds());

    test('Ellipse#setOptions({})', ellipse.setOptions({}));
    test('Ellipse#setOptions(options)', ellipse.setOptions({
        map,
        zIndex: 10,
        center,
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
    }));

    test('Ellipse#getOptions', ellipse.getOptions());

    test('Ellipse#hide', ellipse.hide());

    test('Ellipse#show', ellipse.show());
    
    test('Ellipse#setMap(null)', ellipse.setMap(null));
    test('Ellipse#setMap(map)', ellipse.setMap(map));

    test('Ellipse#setExtData', ellipse.setExtData({test: 2}));

    test('Ellipse#getExtData', ellipse.getExtData());

    test('Ellipse#contains([number, number])', ellipse.contains(centerTuple));
    test('Ellipse#contains(LngLat)', ellipse.contains(center));

    return {
        ellipse,
        map
    }
});