testPluginWrapper('AMap.Transfer', () => {
    const map = new AMap.Map('map');
    const start = map.getCenter();
    const end = start.offset(1e5, 1e5);
    const waypoint = start.offset(-1e3, 5e4);
    const toTuple = (lnglat: AMap.LngLat): [number, number] => [lnglat.getLng(), lnglat.getLat()];
    const points1: [AMap.Transfer.SearchPoint, AMap.Transfer.SearchPoint] = [
        { keyword: '华强北地铁站' },
        { keyword: '羊台山森林公园' }
    ]

    const transfer1 = new AMap.Transfer({
        city: '深圳'
    })
    const transfer2 = new AMap.Transfer({
        city: '深圳',
        policy: AMap.TransferPolicy.NO_SUBWAY,
        nightflag: true,
        cityd: '广州',
        extensions: 'all',
        map,
        panel: 'result',
        hideMarkers: false,
        isOutline: true,
        outlineColor: 'green',
        autoFitView: true
    });

    transfer2.on('complete', event => {
        test('Transfer@complete$event', event);
    });
    transfer2.on('error', event => {
        test('Transfer@error$event', event);
    });

    // test('Transfer#search(LngLat, LngLat)', transfer2.search(start, end));
    test('Transfer#search(LngLat, LngLat, callback)', transfer2.search(start, end, (status, result) => {
        test('Transfer#search$callback$status', status);
        test('Transfer#search$callback$result', result);
    }));
    // test('Transfer#search(SearchPoint[])', transfer2.search(points1, (status, result) => {
    //     test('Transfer#search(SearchPoint[])$callback$status', status);
    //     test('Transfer#search(SearchPoint[])$callback$result', result);
    // }));

    test('Transfer#setPolicy()', transfer2.setPolicy());
    test('Transfer#setPolicy(TransferPolicy)', transfer2.setPolicy(AMap.TransferPolicy.NO_SUBWAY));

    test('Transfer#setCity()', transfer2.setCity());
    test('Transfer#setCity(city)', transfer2.setCity('广州'));

    test('Transfer#setCityd()', transfer2.setCityd());
    test('Transfer#setCityd(city)', transfer2.setCityd('广州'));

    test('Transfer#leaveAt()', transfer2.leaveAt());
    test('Transfer#leaveAt(time)', transfer2.leaveAt('20:10'));
    test('Transfer#leaveAt(time, date)', transfer2.leaveAt('20:10', '2018-01-01'));

    test('Transfer#searchOnAMAP', transfer2.searchOnAMAP({
        origin: start,
        destination: end
    }));
    test('Transfer#searchOnAMAP', transfer2.searchOnAMAP({
        origin: start,
        originName: 'originName',
        destination: end,
        destinationName: 'destinationName'
    }));

    return {
        transfer1,
        transfer2,
        start,
        end
    }
});
