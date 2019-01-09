testWrapper(() => {
    const map = new AMap.Map('map');

    let flexible = new AMap.TileLayer.Flexible({
        createTile(x, y, z, success, fail) {
            test('FlexibleOptions#createTitle$x', x);
            test('FlexibleOptions#createTitle$y', y);
            test('FlexibleOptions#createTitle$z', z);
            if (x % 2) {
                let img = document.createElement('img');
                img.src = 'http://thumb.coinsky.com/tt/d/7/2/d/bb6d3ec662235369491d4d56bae7.jpg/s';
                success(img);
            } else {
                fail();
            }
        },
        cacheSize: 100,
        opacity: 0.8,
        visible: true,
        map,
        zIndex: 10
    });
    test('new Flexible()', new AMap.TileLayer.Flexible());
    test('new Flexible({})', new AMap.TileLayer.Flexible({}));
    test('new Flexible(options)', flexible);

    test('Flexible#setMap(null)', flexible.setMap(null));
    test('Flexible#setMap(map)', flexible.setMap(map));

    test('Flexible#getMap', flexible.getMap());

    test('Flexible#hide', flexible.hide());

    test('Flexible#show', flexible.show());

    test('Flexible#setzIndex', flexible.setzIndex(10));

    test('Flexible#getzIndex', flexible.getzIndex());

    return {
        map,
        flexible
    }
});