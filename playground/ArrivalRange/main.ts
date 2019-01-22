testPluginWrapper('AMap.ArrivalRange', () => {
    const map = new AMap.Map('map', {
        // center: [116.417634, 39.977035]
    });
    const origin = map.getCenter();
    const destination1 = origin.offset(1e3, 1e3);
    const arrivalRange = new AMap.ArrivalRange();

    arrivalRange.on('error', event => {
        test('ArrivalRange@error$event', event);
    });

    arrivalRange.search(origin, 30, (status, result) => {
        test('ArrivalRange#search(LocationValue, number, callback)$callback$status', status);
        test('ArrivalRange#search(LocationValue, number, callback)$callback$result', result);
    });
    arrivalRange.search(origin, 30, (status, result) => {
        test('ArrivalRange#search(LocationValue, number, callback, Options)$callback$status', status);
        test('ArrivalRange#search(LocationValue, number, callback, Options)$callback$result', result);
    },
        {
            policy: 'bus',
            destination: destination1
        }
    );

    return {
        map,
        origin,
        destination1,
        arrivalRange
    }
});

