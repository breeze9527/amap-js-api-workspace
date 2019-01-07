testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map');
    const div = document.createElement('div');
    const marker1 = new AMap.Marker();
    const marker2 = new AMap.Marker();
    const position = map.getCenter();
    const offset = new AMap.Pixel(10, 20);
    const markerShape = new AMap.MarkerShape({
        type: 'circle',
        coords: [0, 0, 100]
    });
    const icon = new AMap.Icon();

    const overlayGroup = new AMap.OverlayGroup<AMap.Marker>([marker1, marker2]);

    test('new OverlayGroup()', new AMap.OverlayGroup());
    test('new OverlayGroup(overlays)', overlayGroup);

    test('OverlayGroup@show', overlayGroup.on('click', event => {
        test('OverlayGroup@show$event', event);
    }))

    test('OverlayGroup#removeOverlay(Overlay)', overlayGroup.removeOverlay(marker2));
    test('OverlayGroup#removeOverlay(Overlay[])', overlayGroup.removeOverlay([marker1, marker2]));

    test('OverlayGroup#clearOverlays(Overlay)', overlayGroup.clearOverlays());

    test('OverlayGroup#removeOverlay === OverlayGroup#removeOverlay', overlayGroup.removeOverlay === overlayGroup.removeOverlays);

    test('OverlayGroup#getOverlays', overlayGroup.getOverlays());

    test('OverlayGroup#hasOverlay(Overlay)', overlayGroup.hasOverlay(marker1));
    test('OverlayGroup#hasOverlay(Function)', overlayGroup.hasOverlay(o => o === marker1));

    test('OverlayGroup#addOverlay(Overlay)', overlayGroup.addOverlay(marker2));
    test('OverlayGroup#addOverlay(Overlay[])', overlayGroup.addOverlay([marker1, marker2]));

    test('OverlayGroup#addOverlays === OverlayGroup#addOverlay', overlayGroup.addOverlay === overlayGroup.addOverlays);

    test('OverlayGroup#eachOverlay', overlayGroup.eachOverlay(function (overlay, index, collections) {
        test('OverlayGroup#eachOverlay$this', this);
        test('OverlayGroup#eachOverlay$overlay', overlay);
        test('OverlayGroup#eachOverlay$index', index);
        test('OverlayGroup#eachOverlay$collections', collections);
    }))

    test('OverlayGroup#setMap(null)', overlayGroup.setMap(null));
    test('OverlayGroup#setMap(Map)', overlayGroup.setMap(map));

    test('OverlayGroup#setOptions({})', overlayGroup.setOptions({}));
    test('OverlayGroup#setOptions(options)', overlayGroup.setOptions({
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
    }));

    test('OverlayGroup#hide', overlayGroup.hide());

    test('OverlayGroup#show', overlayGroup.show());

    return {
        overlayGroup,
        marker1,
        marker2
    }
});
