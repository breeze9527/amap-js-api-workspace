testPluginWrapper('AMap.ToolBar', () => {
    const map = new AMap.Map('map');
    const pixel = new AMap.Pixel(10, 20);
    const marker = new AMap.Marker({
        icon: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
        animation: 'AMAP_ANIMATION_BOUNCE'
    })
    const toolBar2 = new AMap.ToolBar();
    const toolBar = new AMap.ToolBar({
        offset: pixel,
        position: 'LT',
        ruler: true,
        noIpLocate: true,
        locate: true,
        liteStyle: false,
        direction: true,
        autoPosition: true,
        locationMarker: marker,
        useNative: false
    });

    map.addControl(toolBar);

    toolBar.on('hide', event => {
        test('ToolBar@hide', event);
    });
    toolBar.on('location', event => {
        test('ToolBar@location', event);
    });
    toolBar.on('zoomchanged', event => {
        test('ToolBar@zoomchanged', event);
    });

    test('ToolBar#getOffset', toolBar.getOffset());

    test('ToolBar#setOffset', toolBar.setOffset(pixel));

    test('ToolBar#hideRuler', toolBar.hideRuler());

    test('ToolBar#showRuler', toolBar.showRuler());

    test('ToolBar#hideDirection', toolBar.hideDirection());

    test('ToolBar#showDirection', toolBar.showDirection());

    test('ToolBar#hideLocation', toolBar.hideLocation());

    test('ToolBar#doLocation', toolBar.doLocation());

    test('ToolBar#getLocation', toolBar.getLocation());

    test('ToolBar#hide', toolBar.hide());

    test('ToolBar#show', toolBar.show());

    return {
        map,
        pixel,
        toolBar,
        toolBar2
    }
});
