testPluginWrapper('AMap.TruckDriving', () => {
    const map = new AMap.Map('map');
    const start = map.getCenter();
    const end = start.offset(1e5, 1e5);
    const waypoint = start.offset(-1e3, 5e4);
    const toTuple = (lnglat: AMap.LngLat): [number, number] => [lnglat.getLng(), lnglat.getLat()];
    const points1 = [
        { keyword: '华强北地铁站' },
        { keyword: '深大地铁站' },
        { keyword: '羊台山森林公园' }
    ]
    const truckDriving = new AMap.TruckDriving({
        policy: 1,
        size: 2,
        width: 2.5,
        height: 2,
        load: 2,
        weight: 10,
        axlesNum: 3,
        extensions: 'base',
        map,
        panel: 'result',
        hideMarkers: true,
        showTraffic: true,
        isOutline: true,
        outlineColor: 'blue',
        autoFitView: true,
        province: '粤',
        number: '111111'
    });

    test('new TruckDriving', truckDriving);

    truckDriving.on('complete', event => {
        test('TruckDriving@complete$event', event);
    })

    truckDriving.on('error', event => {
        test('TruckDriving@error$event', event);
    })

    truckDriving.clear();

    truckDriving.setProvinceAndNumber('京', '111111');

    truckDriving.search(
        [{ lnglat: toTuple(start) }, { lnglat: toTuple(end) }],
        (status, result) => {
            test('TruckDriving#search(LngLatPath[], callback)$callback$status', status);
            test('TruckDriving#search(LngLatPath[], callback)$callback$result', result);
        }
    );
    // truckDriving.search(
    //     [{ lnglat: start }, { lnglat: end }],
    //     (status, result) => {
    //         test('TruckDriving#search(LngLatPath[], callback)$callback$status', status);
    //         test('TruckDriving#search(LngLatPath[], callback)$callback$result', result);
    //     }
    // );
    // truckDriving.search(
    //     points1,
    //     (status, result) => {
    //         test('TruckDriving#search(KeywordPath[], callback)$callback$status', status);
    //         test('TruckDriving#search(KeywordPath[], callback)$callback$result', result);
    //     }
    // );
});
