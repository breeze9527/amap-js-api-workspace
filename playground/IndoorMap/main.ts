testPluginWrapper('AMap.IndoorMap', () => {
    const map = new AMap.Map('map', {
        showIndoorMap: false,
        center: [116.518509, 39.924446]
    });

    const indoorMap1 = new AMap.IndoorMap();
    const indoorMap2 = new AMap.IndoorMap({
        map,
        zIndex: 1,
        opacity: 0.5,
        cursor: 'pointer',
        hideFloorBar: false,
        alaysShow: true
    });

    indoorMap2.setMap(map);

    indoorMap2.on('complete', event => {
        test('IndoorMap@complete$event', event);
    });
    indoorMap2.on('floor_complete', event => {
        test('IndoorMap@floor_complete$event', event);
    });
    indoorMap2.on('click', event => {
        test('IndoorMap@click$event', event);
    });
    indoorMap2.on('mouseover', event => {
        test('IndoorMap@mouseover$event', event);
    });
    indoorMap2.on('mouseout', event => {
        test('IndoorMap@mouseout$event', event);
    });

    indoorMap2.showIndoorMap('B000A856LJ');
    indoorMap2.showIndoorMap('B000A856LJ', (error, result) => {
        test('IndoorMap(indoorId, callback)$callback$error', error);
        test('IndoorMap(indoorId, callback)$callback$result', result);
    });
    indoorMap2.showIndoorMap('B000A856LJ', 1, (error, result) => {
        test('IndoorMap(indoorId, floor, callback)$callback$error', error);
        test('IndoorMap(indoorId, floor, callback)$callback$result', result);
    });

    return {
        map,
        indoorMap1,
        indoorMap2
    }

});
