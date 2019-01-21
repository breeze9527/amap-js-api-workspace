testPluginWrapper('AMap.Riding', () => {
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const start = center.offset(1e5, 1e5);
    const end = center.offset(-1e5, -1e5);
    const toTuple = (lnglat: AMap.LngLat): [number, number] => [lnglat.getLng(), lnglat.getLat()];
    const startTuple = toTuple(start);
    const endTuple = toTuple(end);

    const riding1 = new AMap.Riding();
    const riding2 = new AMap.Riding({
        map,
        policy: AMap.RidingPolicy.FASTEST,
        panel: 'result',
        hideMarkers: false,
        isOutline: true,
        outlineColor: 'blue',
        autoFitView: true
    });

    riding2.on('error', event => {
        test('Riding@error$event', event);
    });

    riding2.on('complete', event => {
        test('Riding@error$complete', event);
    });

    riding2.search(start, end);
    riding2.search(start, end, (status, result) => {
        test('Riding#search(LocationValue, LocationValue, callback)$callback$status', status);
        test('Riding#search(LocationValue, LocationValue, callback)$callback$result', result);
    });
    riding2.search([{ keyword: '华强北' }, { keyword: '深大' }]);
    riding2.search([{ keyword: '华强北' }, { keyword: '深大' }], (status, result) => {
        test('Riding#search(SearchPoint[], callback)$callback$status', status);
        test('Riding#search(SearchPoint[], callback)$callback$result', result);
    });

    riding2.clear();
});
