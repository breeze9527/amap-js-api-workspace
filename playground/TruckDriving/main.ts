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
    const points2 = [
        { keyword: '华强北地铁站', city: '深圳' },
        { keyword: '深大地铁站', city: '深圳' },
        { keyword: '羊台山森林公园', city: '深圳' }
    ]
    const avoidPolygon1: Array<[number, number]> = [
        [114.582615, 23.277503],
        [114.774876, 23.080563],
        [114.483738, 22.926344],
        [114.316196, 23.128562]
    ]
    const avoidPolygon2: Array<[number, number]> = [
        [113.912449, 23.103302],
        [114.1926, 23.093196],
        [114.217319, 22.84031],
        [113.926182, 22.832716]
    ]
    const avoidPolygon3: Array<[number, number]> = [
        [114.016132, 22.770683],
        [114.103336, 22.766251],
        [114.108143, 22.707356],
        [114.004459, 22.694687]
    ]
    new AMap.Polygon({ map, path: avoidPolygon1, fillColor: 'red' });
    new AMap.Polygon({ map, path: avoidPolygon2, fillColor: 'yellow' });
    new AMap.Polygon({ map, path: avoidPolygon3, fillColor: 'purple' });
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
