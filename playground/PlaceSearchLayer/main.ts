testPluginWrapper('AMap.PlaceSearchLayer', () => {
    const map = new AMap.Map('map');

    const placeSearchLayer1 = new AMap.PlaceSearchLayer();
    const placeSearchLayer2 = new AMap.PlaceSearchLayer({
        map,
        keyword: '华强',
        zIndex: 10
    });

    test('new PlaceSearchLayer()', placeSearchLayer1);
    test('new PlaceSearchLayer({})', new AMap.PlaceSearchLayer({}));
    test('new PlaceSearchLayer(options)', placeSearchLayer2);

    placeSearchLayer2.on('click', event => {
        test('PlaceSearchLayer@click$event', event);
    });

    placeSearchLayer2.on('complete', event => {
        test('PlaceSearchLayer@complete$event', event);
    });

    placeSearchLayer2.on('mousemove', event => {
        test('PlaceSearchLayer@mousemove$event', event);
    });

    test('PlaceSearchLayer#setKeywords', placeSearchLayer2.setKeywords('火锅'));

    test('PlaceSearchLayer#setMap(null)', placeSearchLayer2.setMap(null));
    test('PlaceSearchLayer#setMap(Map)', placeSearchLayer2.setMap(map));

    return {
        map,
        placeSearchLayer1,
        placeSearchLayer2
    }
});
