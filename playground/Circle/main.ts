testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const centerTuple: [number, number] = [center.getLng(), center.getLat()];

    const circle = new AMap.Circle<ExtraData>({
        map,
        zIndex: 10,
        center,
        bubble: true,
        cursor: 'pointer',
        radius: 1000,
        strokeColor: '#FF0000',
        strokeOpcity: 0.8,
        strokeWeight: 3,
        fillColor: '#00FF00',
        fillOpacity: 0.5,
        strokeStyle: 'dashed',
        extData: { test: 1 },
        strokeDasharray: [2, 4]
    });

    test('new Circle()', new AMap.Circle());
    test('new Circle({})', new AMap.Circle({}));
    test('new Circle(options)', circle);

    test('Circle@click', circle.on('click', event => {
        test('Circle@click$event', event);
    }));

    test('Circle@change', circle.on('change', event => {
        test('Circle@change$event', event);
    }));

    test('Circle@options', circle.on('options', event => {
        test('Circle@options$event', event);
    }));

    test('Circle@setCenter', circle.on('setCenter', event => {
        test('Circle@setCenter$event', event);
    }));

    test('Circle#setCenter(LngLat)', circle.setCenter(center));
    test('Circle#setCenter([number, number])', circle.setCenter(centerTuple));
    test('Circle#setCenter(LocationValue, true)', circle.setCenter(center, true));

    test('Circle#getCenter', circle.getCenter());

    test('Circle#getBounds', circle.getBounds());

    test('Circle#setRadius(number)', circle.setRadius(1000));
    test('Circle#setRadius(number, true)', circle.setRadius(1000, true));

    test('Circle#getRadius', circle.getRadius());

    test('Circle#setOptions', circle.setOptions({
        map,
        zIndex: 10,
        center,
        bubble: true,
        cursor: 'pointer',
        radius: 10000,
        strokeColor: '#FF0000',
        strokeOpcity: 0.8,
        strokeWeight: 3,
        fillColor: '#00FF00',
        fillOpacity: 0.5,
        strokeStyle: 'dashed',
        extData: { test: 1 },
        strokeDasharray: [2, 4]
    }));

    test('Circle#getOptions', circle.getOptions());

    test('Circle#hide', circle.hide());

    test('Circle#show', circle.show());

    test('Circle#setMap(null)', circle.setMap(null));
    test('Circle#setMap(Map)', circle.setMap(map));

    test('Circle#setExtData', circle.setExtData({test: 1}));

    test('Circle#getExtData', circle.getExtData());

    test('Circle#contains(LngLat)', circle.contains(center));
    test('Circle#contains([number, number])', circle.contains(centerTuple));

    return {
        circle
    }
});