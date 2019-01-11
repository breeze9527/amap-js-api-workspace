testPluginWrapper('AMap.AdvancedInfoWindow', () => {
    const map = new AMap.Map('map');
    const lnglat = map.getCenter();
    const panel = document.createElement('div');

    const advancedInfoWindow = new AMap.AdvancedInfoWindow({
        autoMove: true,
        closeWhenClickMap: true,
        content: '123',
        offset: new AMap.Pixel(1, 2),
        panel,
        searchRadius: 4000,
        placeSearch: true,
        driving: true,
        walking: true,
        transit: true,
        asOrigin: true,
        asDestination: true
    });
    const advancedInfoWindow2 = new AMap.AdvancedInfoWindow();

    test('new AdvancedInfoWindow()', advancedInfoWindow2);
    test('new AdvancedInfoWindow({})', new AMap.AdvancedInfoWindow({}));
    test('new AdvancedInfoWindow(options)', advancedInfoWindow);

    test('AdvancedInfoWindow@open', advancedInfoWindow.on('open', event => {
        test('AdvancedInfoWindow@open$event', event);
    }));

    test('AdvancedInfoWindow@complete', advancedInfoWindow.on('complete', event => {
        test('AdvancedInfoWindow@complete$event', event);
    }));

    test('AdvancedInfoWindow#close', advancedInfoWindow.close());

    test('AdvancedInfoWindow#open(Map)', advancedInfoWindow.open(map));
    test('AdvancedInfoWindow#open(Map, LngLat)', advancedInfoWindow.open(map, lnglat));

    test('AdvancedInfoWindow#getIsOpen', advancedInfoWindow.getIsOpen());

    test('AdvancedInfoWindow#setContent', advancedInfoWindow.setContent('new content'));

    test('AdvancedInfoWindow#getContent', advancedInfoWindow.getContent());

    test('AdvancedInfoWindow#setPosition', advancedInfoWindow.setPosition(lnglat));

    test('AdvancedInfoWindow#getPosition', advancedInfoWindow.getPosition());

    test('AdvancedInfoWindow#clear', advancedInfoWindow.clear());

    return {
        map,
        lnglat,
        advancedInfoWindow,
        advancedInfoWindow2
    }
});
