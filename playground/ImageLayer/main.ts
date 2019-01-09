testWrapper(() => {
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const northEast = center.offset(5e3, 5e3);
    const southWest = center.offset(-5e3, -5e3);
    const bounds = new AMap.Bounds(southWest, northEast);
    const url = 'http://thumb.coinsky.com/tt/d/7/2/d/bb6d3ec662235369491d4d56bae7.jpg/s';

    const imageLayer = new AMap.ImageLayer({
        map,
        bounds,
        visible: true,
        zooms: [3, 15],
        opacity: 0.7
    });

    test('new ImageLayer(options)', imageLayer);

    test('ImageLayer#setMap(null)', imageLayer.setMap(null));
    test('ImageLayer#setMap(Map)', imageLayer.setMap(map));

    test('ImageLayer#getMap(Map)', imageLayer.getMap());

    test('ImageLayer#getBounds', imageLayer.getBounds());

    test('ImageLayer#setBounds', imageLayer.setBounds(bounds));

    test('ImageLayer#hide', imageLayer.hide());

    test('ImageLayer#show', imageLayer.show());

    test('ImageLayer#setzIndex', imageLayer.setzIndex(10));

    test('ImageLayer#getzIndex', imageLayer.getzIndex());

    test('ImageLayer#getElement', imageLayer.getElement());

    test('ImageLayer#getImageUrl', imageLayer.getImageUrl());

    test('ImageLayer#setImageUrl', imageLayer.setImageUrl(url));

    return {
        map,
        imageLayer
    }
});
