testPluginWrapper('AMap.DragRoute', () => {
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const start = center.offset(1e5, 1e5);
    const end = center.offset(-1e5, -1e5);
    const dragRoute = new AMap.DragRoute(map, [start, end]);

    dragRoute.on('complete', event => {
        test('DragRoute@complete', event);
    });
    dragRoute.on('addway', event => {
        test('DragRoute@addway', event);
    });
    dragRoute.on('search', event => {
        test('DragRoute@search', event);
    });

    test('DragRoute#search', dragRoute.search());

    test('DragRoute#getWays', dragRoute.getWays());

    test('DragRoute#getRoute', dragRoute.getRoute());

    // test('DragRoute#destory', dragRoute.destory());

    return {
        map,
        dragRoute,
        start,
        end
    }
});
