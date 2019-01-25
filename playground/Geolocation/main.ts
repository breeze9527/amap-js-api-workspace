testPluginWrapper('AMap.Geolocation', () => {
    const map = new AMap.Map('map');
    const geolocation2 = new AMap.Geolocation();
    const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 2000,
        noIpLocate: 0,
        noGeoLocation: 0,
        GeoLocationFirst: true,
        maximumAge: 100,
        convert: true,
        showButton: true,
        buttonDom: 'button',
        buttonPosition: 'LT',
        buttonOffset: new AMap.Pixel(10, 10),
        showMarker: true,
        showCircle: true,
        panToLocation: true,
        zoomToAccuracy: true,
        useNative: false,
        extensions: 'all'
    });

    geolocation.on('complete', event => {
        test('Geolocation@complete', event);
    });
    geolocation.on('error', event => {
        test('Geolocation@error', event);
    });

    test('Geolocation#isSupported', geolocation.isSupported());

    geolocation.getCurrentPosition((status, result) => {
        test('Geolocation#getCurrentPosition$callback$status', status);
        test('Geolocation#getCurrentPosition$callback$result', result);
    });

    const watchPositionId = geolocation.watchPosition();
    test('Geolocation#watchPosition', watchPositionId);

    test('Geolocation#clearWatch', watchPositionId && geolocation.clearWatch(watchPositionId));

    test('Geolocation#getCityInfo', geolocation.getCityInfo((status, result) => {
        test('Geolocation#getCityInfo$callback$status', status);
        test('Geolocation#getCityInfo$callback$result', result);
    }));

    return {
        map,
        geolocation,
        geolocation2
    }
});
