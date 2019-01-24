testPluginWrapper('AMap.MapType', () => {
    const map = new AMap.Map('map');
    const mapType = new AMap.MapType({
        defaultType: 1,
        showTraffic: true,
        showRoad: true
    });

    map.addControl(mapType);

    mapType.on('show', (event: AMap.MapType.EventMap['show']) => {
        test('MapType@show', event);
    });
    mapType.on('hide', (event: AMap.MapType.EventMap['show']) => {
        test('MapType@hide', event);
    });

    test('MapType#hide', mapType.hide());

    test('MapType#show', mapType.show());

    return {
        map,
        mapType
    }
});
