testPluginWrapper('AMap.Walking', () => {
    const map = new AMap.Map('map');
    const walking1 = new AMap.Walking();
    const start = map.getCenter().offset(1e4, 1e4);
    const end = map.getCenter().offset(-1e4, -1e4);
    const walking2 = new AMap.Walking({
        map,
        panel: 'result',
        hideMarkers: true,
        isOutline: true,
        outlineColor: 'blue',
        autoFitView: true
    });
    const toTuple = (lnglat: AMap.LngLat): [number, number] => [lnglat.getLng(), lnglat.getLat()];
    const startTuple = toTuple(start);
    const endTuple = toTuple(end);

    walking2.on('complete', event => {
        test('Walking@complete$event', event);
    });
    walking2.on('error', event => {
        test('Walking@error$event', event);
    });

    walking2.search(start, end);
    walking2.search(startTuple, endTuple);
    walking2.search(start, end, (status, result) => {
        test('Walking#search(origin, desitnation, callback)$callback$status', status);
        test('Walking#search(origin, desitnation, callback)$callback$result', result);
    });
    walking2.search([{ keyword: '深大' }, { keyword: '华强北' }]);
    walking2.search([{ keyword: '深大' }, { keyword: '华强北' }], (status, result) => {
        test('Walking#search(SearchPoint[], callback)$callback$status', status);
        test('Walking#search(SearchPoint[], callback)$callback$result', result);
    });

    walking2.clear();
});
