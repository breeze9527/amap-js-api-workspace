testPluginWrapper('AMap.ControlBar', () => {
    const map = new AMap.Map('map');
    const controlBar1 = new AMap.ControlBar();
    const controlBar2 = new AMap.ControlBar({
        position: {
            left: '10px',
            bottom: '20px'
        },
        showZoomBar: true,
        showControlButton: true
    });
    map.addControl(controlBar2);

    controlBar2.on('show', (event: AMap.ControlBar.EventMap['show']) => {
        test('ControlBar@show', event);
    });
    controlBar2.on('hide', (event: AMap.ControlBar.EventMap['show']) => {
        test('ControlBar@hide', event);
    });

    // test('ControlBar#hide', controlBar2.hide());

    // test('ControlBar#show', controlBar2.showr());

    return {
        map,
        controlBar1,
        controlBar2
    }
});
