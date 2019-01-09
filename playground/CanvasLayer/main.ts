testWrapper(() => {
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const northEast = center.offset(5e3, 5e3);
    const southWest = center.offset(-5e3, -5e3);
    const bounds = new AMap.Bounds(southWest, northEast);
    const url = 'http://thumb.coinsky.com/tt/d/7/2/d/bb6d3ec662235369491d4d56bae7.jpg/s';

    const canvasLayer = new AMap.CanvasLayer({
        map,
        bounds,
        visible: true,
        zooms: [3, 15],
        opacity: 0.7
    });
    const canvas = document.createElement('canvas');
    canvas.height = 100;
    canvas.width = 100;
    const context = canvas.getContext('2d');
    if (context) {
        context.fillStyle = 'red';
        context.fillRect(0, 0, 100, 100);
    }

    test('new ImageLayer(options)', canvasLayer);

    test('ImageLayer#setMap(null)', canvasLayer.setMap(null));
    test('ImageLayer#setMap(Map)', canvasLayer.setMap(map));

    test('ImageLayer#getMap(Map)', canvasLayer.getMap());

    test('ImageLayer#getBounds', canvasLayer.getBounds());

    test('ImageLayer#setBounds', canvasLayer.setBounds(bounds));

    test('ImageLayer#hide', canvasLayer.hide());

    test('ImageLayer#show', canvasLayer.show());

    test('ImageLayer#setzIndex', canvasLayer.setzIndex(10));

    test('ImageLayer#getzIndex', canvasLayer.getzIndex());

    test('ImageLayer#getElement', canvasLayer.getElement());

    test('ImageLayer#getImageUrl', canvasLayer.getCanvas());

    test('ImageLayer#setImageUrl', canvasLayer.setCanvas(canvas));

    test('ImageLayer#reFresh', canvasLayer.reFresh());

    return {
        map,
        canvasLayer
    }
});
