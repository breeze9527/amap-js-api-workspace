testWrapper(() => {
    const map = new AMap.Map('map');
    const position = map.getCenter();
    const offset = new AMap.Pixel(10, 20);
    const markerShape = new AMap.MarkerShape({
        type: 'circle',
        coords: [0, 0, 100]
    });
    const text = new AMap.Text({
        text: 'content',
        textAlign: 'center',
        verticalAlign: 'top',
        map,
        position,
        offset,
        anchor: 'bottom-center',
        topWhenClick: true,
        bubble: true,
        draggable: true,
        raiseOnDrag: true,
        cursor: 'default',
        visible: true,
        zIndex: 100,
        angle: 45,
        autoRotation: true,
        animation: 'AMAP_ANIMATION_BOUNCE',
        shadow: 'https://webapi.amap.com/theme/v1.3/markers/0.png',
        title: 'title',
        clickable: true,
        extData: { test: 1 }
    });

    test('new Text()', new AMap.Text());
    test('new Text({})', new AMap.Text({}));
    test('new Text(options)', text);

    test('Text#getText()', text.getText());

    test('Text#setText()', text.setText('new content'));

    test('Text#setStyle()', text.setStyle({
        background: 'red',
        width: '200px'
    }));

    test('Text#setAnchor()', text.setAnchor());
    test('Text#setAnchor(Anchor)', text.setAnchor('bottom-center'));

    test('Text#getAnchor()', text.getAnchor());

    return {
        map,
        text
    }
});