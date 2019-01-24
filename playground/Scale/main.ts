testPluginWrapper('AMap.Scale', () => {
    const map = new AMap.Map('map');
    const scale = new AMap.Scale();

    map.addControl(scale);

    scale.on('show', event => {
        test('Scale@show', event);
    });
    scale.on('hide', event => {
        test('Scale@hide', event);
    });

    test('Scale#hide', scale.hide());

    test('Scale#show', scale.show());
});
