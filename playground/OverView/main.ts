testPluginWrapper('AMap.OverView', () => {
    const map = new AMap.Map('map');

    const roadNetLayer = new AMap.TileLayer.RoadNet();
    const overview = new AMap.OverView({
        tileLayer: roadNetLayer,
        isOpen: true,
        visible: true
    });

    map.addControl(overview);

    overview.on('show', (event) => {
        test('OverView@show$event', event);
    });
    overview.on('hide', (event) => {
        test('OverView@hide$event', event);
    });
    overview.on('open', (event) => {
        test('OverView@open$event', event);
    });
    overview.on('close', (event) => {
        test('OverView@close$event', event);
    });

    test('OverView#show', overview.show());

    test('OverView#hide', overview.hide());

    test('OverView#open', overview.open());

    test('OverView#close', overview.close());

    test('OverView#setTileLayer', overview.setTileLayer(roadNetLayer));

    test('OverView#getTileLayer', overview.getTileLayer());

    return {
        map,
        overview,
        roadNetLayer
    }
});
