testWrapper(() => {
    const map = new AMap.Map('map');
    const position = map.getCenter();
    const offset = new AMap.Pixel(10, 20);
    const markerShape = new AMap.MarkerShape({
        type: 'circle',
        coords: [0, 0, 100]
    });
    const icon = new AMap.Icon();

    const div = document.createElement('div');
    div.style.cssText = 'height: 200px; width: 200px; background: red;'
    div.innerText = 'test';

    test('new Marker', new AMap.Marker());
    test('new Marker({})', new AMap.Marker({}));
    const marker = new AMap.Marker({
        map,
        position,
        offset,
        icon: '123',
        content: div,
        topWhenClick: true,
        bubble: true,
        draggable: true,
        raiseOnDrag: true,
        cursor: 'default',
        visible: true,
        zIndex: 10,
        angle: 45,
        autoRotation: true,
        animation: 'AMAP_ANIMATION_NONE',
        title: 'title',
        shape: markerShape,
        label: {
            content: 'asdfb',
            offset
        }
    });

    test('new Marker(options)', marker);

    testOverlay(marker, { map });

    test('Marker#getOffset', marker.getOffset());

    test('Marker#setOffset', marker.setOffset(offset));

    test('Marker#setAnimation', marker.setAnimation('AMAP_ANIMATION_NONE'));

    test('Marker#getAnimation', marker.getAnimation());

    test('Marker#setClickable', marker.setClickable(true));

    test('Marker#getClickable', marker.getClickable());

    test('Marker#getPosition', marker.getPosition());

    test('Marker#setPosition', marker.setPosition(position));

    test('Marker#setAngle', marker.setAngle(90));

    test('Marker#setLabel', marker.setLabel({
        content: 'abc'
    }));
    test('Marker#setLabel', marker.setLabel({
        content: 'abc',
        offset
    }));

    test('Marker#getLabel', marker.getLabel());

    test('Marker#setzIndex', marker.setzIndex(10));

    test('Marker#getzIndex', marker.getzIndex());

    test('Marker#setIcon(string)', marker.setIcon('//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png'));
    test('Marker#setIcon(Icon)', marker.setIcon(icon));

    test('Marker#getIcon', marker.getIcon());

    test('Marker#setDraggable', marker.setDraggable(true));

    test('Marker#getDraggable', marker.getDraggable());

    test('Marker#setCursor', marker.setCursor('default'));

    test('Marker#setContent(string)', marker.setContent('test content'));
    test('Marker#setContent(dom)', marker.setContent(div));

    test('Marker#moveAlong(path, speed)', marker.moveAlong([position], 100));
    test('Marker#moveAlong(..., timing)', marker.moveAlong(
        [position],
        100,
        a => a
    ));
    test('Marker#moveAlong(..., circleable)', marker.moveAlong(
        [position],
        100,
        a => a,
        true
    ));

    test('Marker#moveTo(lnglat, speed)', marker.moveTo(position, 100));
    test('Marker#moveTo(tuple, speed)', marker.moveTo([position.getLng(), position.getLat()], 100));
    test('Marker#moveTo(lnglat, timing)', marker.moveTo(position, 100, a => a));

    test('Marker#stopMove', marker.stopMove());

    test('Marker#pauseMove', marker.pauseMove());

    test('Marker#resumeMove', marker.resumeMove());

    test('Marker#setMap', marker.setMap(map));

    test('Marker#setTitle', marker.setTitle('abc'));

    test('Marker#getTitle', marker.getTitle());

    test('Marker#setTop', marker.setTop(true));

    test('Marker#getTop', marker.getTop());

    test('Marker#setShadow', marker.setShadow());
    test('Marker#setShadow', marker.setShadow('shadow url'));
    test('Marker#setShadow', marker.setShadow(icon));

    test('Marker#getShadow', marker.getShadow());

    test('Marker#getShape', marker.getShape());

    test('Marker#setShape', marker.setShape(markerShape));

    test('Marker@click', marker.on('click', event => {
        test('Marker@click$event', event);
    }));

    return {
        map,
        marker,
        markerShape
    };
});
