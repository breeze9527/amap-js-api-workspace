testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map');
    const lnglat = map.getCenter();

    const div = document.createElement('div');
    div.style.height = '100px';
    div.style.width = '100px';
    div.style.border = '1px solid red';

    const infoWindow = new AMap.InfoWindow({
        isCustom: false,
        autoMove: false,
        closeWhenClickMap: false,
        content: 'info window content',
        size: [100, 100],
        offset: new AMap.Pixel(10, 10),
        position: lnglat,
        showShadow: true
    });
    const customWindow = new AMap.InfoWindow({
        isCustom: true,
        autoMove: true,
        closeWhenClickMap: true,
        content: div,
        offset: new AMap.Pixel(10, 10),
        position: lnglat,
        showShadow: true
    });
    test('new InfoWindow()', new AMap.InfoWindow());
    test('new InfoWindow({})', new AMap.InfoWindow({}));
    test('new InfoWindow(optoins)', infoWindow);

    test('InfoWindow@change', infoWindow.on('change', event => {
        test('InfoWindow@change$event', event);
    }));

    test('InfoWindow@open', infoWindow.on('open', event => {
        test('InfoWindow@open$event', event);
    }));

    test('InfoWindow@close', infoWindow.on('close', event => {
        test('InfoWindow@close$event', event);
    }));

    test('InfoWindow#close', infoWindow.close());

    test('InfoWindow#open(Map)', infoWindow.open(map));
    test('InfoWindow#open(Map, LngLat)', infoWindow.open(map, lnglat));

    test('InfoWindow#getIsOpen', infoWindow.getIsOpen());

    test('InfoWindow#setContent', infoWindow.setContent('new content'));

    test('InfoWindow#getContent', infoWindow.getContent());

    test('InfoWindow#setPosition', infoWindow.setPosition(lnglat));

    test('InfoWindow#setAnchor()', infoWindow.setAnchor());
    test('InfoWindow#setAnchor(Anchor)', infoWindow.setAnchor('bottom-center'));

    test('InfoWindow#getAnchor()', infoWindow.getAnchor());

    test('InfoWindow#setSize(Size)', infoWindow.setSize(new AMap.Size(100, 100)));
    test('InfoWindow#setSize([number, number])', infoWindow.setSize([100, 100]));

    return {
        map,
        lnglat,
        infoWindow,
        customWindow
    }
});
