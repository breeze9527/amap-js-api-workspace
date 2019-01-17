testPluginWrapper('AMap.Driving', () => {
    const map = new AMap.Map('map');
    const start = map.getCenter();
    const end = start.offset(1e5, 1e5);
    const waypoint = start.offset(-1e3, 5e4);
    const driving1 = new AMap.Driving();
    const driving2 = new AMap.Driving({
        policy: AMap.DrivingPolicy.LEAST_DISTANCE,
        extensions: 'all',
        ferry: true,
        map,
        panel: 'result',
        hideMarkers: false,
        showTraffic: true,
        province: '粤',
        number: 'NH1N11',
        isOutline: true,
        outlineColor: 'blue',
        autoFitView: true
    });
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

    test('new Driving()', driving1);
    test('new Driving({})', new AMap.Driving());
    test('new Driving(options)', driving2);

    driving2.on('complete', (event) => {
        test('Driving@complete$event', event);
    })

    // test('Driving#search(LngLat, LngLat)', driving2.search(start, end));
    // driving2.search(toTuple(start), toTuple(end));
    // driving2.search(start, end, { waypoints: [waypoint] });
    // driving2.search(start, end, { waypoints: [waypoint] }, (status, result) => {
    //     test('Driving#search(LngLat, LngLat, opt, callback)$callback$status', status);
    //     test('Driving#search(LngLat, LngLat, opt, callback)$callback$result', result);
    // });
    // driving2.search(start, end, (status, result) => {
    //     test('Driving#search(LngLat, LngLat, callback)$callback$status', status);
    //     test('Driving#search(LngLat, LngLat, callback)$callback$result', result);
    // });
    driving2.search(points1, (status, result) => {
        test('Driving#search({keyword}[], callback)$callback$status', status);
        test('Driving#search({keyword}[], callback)$callback$result', result);
    });
    // driving2.search(points1, (status, result) => {
    //     test('Driving#search({keyword, city}[], callback)$callback$status', status);
    //     test('Driving#search({keyword, city}[], callback)$callback$result', result);
    // });

    test('Driving#setPolicy()', driving2.setPolicy());
    test('Driving#setPolicy(Policy)', driving2.setPolicy(AMap.DrivingPolicy.LEAST_FEE));

    test('Driving#setAvoidPolygons', driving2.setAvoidPolygons([avoidPolygon1]));

    test('Driving#getAvoidPolygons', driving2.getAvoidPolygons());

    test('Driving#clearAvoidPolygons', driving2.clearAvoidPolygons());

    test('Driving#setAvoidRoad', driving2.setAvoidRoad('福龙路'));

    test('Driving#getAvoidPolygons', driving2.getAvoidPolygons());

    test('Driving#clearAvoidRoad', driving2.clearAvoidRoad());

    test('Driving#clear', driving2.clear());

    // test('Driving#searchOnAMAP({origin, destination})', driving2.searchOnAMAP({
    //     origin: start,
    //     destination: end
    // }));
    // test('Driving#searchOnAMAP({origin, originName?, destination, destinationName?})', driving2.searchOnAMAP({
    //     origin: start,
    //     originName: 'originName',
    //     destination: end,
    //     destinationName: 'destinationName'
    // }));

    test('Driving#setProvinceAndNumber', driving2.setProvinceAndNumber('粤', 'NH1N11'));

    return {
        map,
        driving1,
        driving2,
        start,
        end,
        waypoint,
        points1,
        points2,
        avoidPolygon1,
        avoidPolygon2,
        avoidPolygon3
    }
});
