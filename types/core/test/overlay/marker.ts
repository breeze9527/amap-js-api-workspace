interface MarkerExtraData {
    test: number;
}

// $ExpectType Marker<MarkerExtraData>
new AMap.Marker<MarkerExtraData>();
// $ExpectType Marker<any>
new AMap.Marker();
// $ExpectType Marker<any>
new AMap.Marker({});
// $ExpectType Marker<MarkerExtraData>
export const testMarker = new AMap.Marker<MarkerExtraData>({
    map,
    position: lnglat,
    offset: pixel,
    icon: 'iconUrl',
    content: 'htmlString',
    topWhenClick: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 10,
    angle: 10,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: icon,
    title: '123',
    clickable: true,
    shape: markerShape,
    extData: {
        test: 123
    }
});

// $ExpectType void
testMarker.markOnAMAP({
    name: '123',
    position: [1, 2]
});
// $ExpectType void
testMarker.markOnAMAP();
// $ExpectType void
testMarker.markOnAMAP({});
// $ExpectType void
testMarker.markOnAMAP({
    position: [1, 2],
    name: '123'
});

// $ExpectType Pixel
testMarker.getOffset();

// $ExpectType void
testMarker.setOffset(pixel);

// $ExpectType void
testMarker.setAnimation('AMAP_ANIMATION_BOUNCE');

// $ExpectType AnimationName
testMarker.getAnimation();

// $ExpectType void
testMarker.setClickable(true);

// $ExpectType boolean
testMarker.getClickable();

// $ExpectType LngLat | undefined
testMarker.getPosition();

// $ExpectType void
testMarker.setPosition(lnglat);

// $ExpectType void
testMarker.setAngle(0);

// $ExpectType void
testMarker.setLabel();
// $ExpectType void
testMarker.setLabel({});
// $ExpectType void
testMarker.setLabel({
    content: 'label content',
    offset: pixel
});

// $ExpectType Label | undefined
testMarker.getLabel();

// $ExpectType number
testMarker.getAngle();

// $ExpectType void
testMarker.setzIndex(100);

// $ExpectType number
testMarker.getzIndex();

// $ExpectType void
testMarker.setIcon('icon uri');
// $ExpectType void
testMarker.setIcon(icon);

// $ExpectType string | Icon | undefined
testMarker.getIcon();

// $ExpectType void
testMarker.setDraggable(true);

// $ExpectType boolean
testMarker.getDraggable();

// $ExpectType void
testMarker.setCursor('default');

// $ExpectType void
testMarker.setContent('content');
// $ExpectType void
testMarker.setContent(domEle);

// $ExpectType string | HTMLElement
testMarker.getContent();

// $ExpectType void
testMarker.moveAlong([lnglat], 100);
// $ExpectError
testMarker.moveAlong([[1, 2]], 100);
// $ExpectType void
testMarker.moveAlong([lnglat], 100, t => t, false);

// $ExpectType void
testMarker.moveTo(lnglat, 100);
// $ExpectType void
testMarker.moveTo([1, 2], 100);
// $ExpectType void
testMarker.moveTo([1, 2], 100, t => t);

// $ExpectType void
testMarker.stopMove();

// $ExpectType boolean
testMarker.pauseMove();

// $ExpectType boolean
testMarker.resumeMove();

// $ExpectType void
testMarker.setMap(map);

// $ExpectType void
testMarker.setTitle('title');
// $ExpectError
testMarker.setTitle();

// $ExpectType string | undefined
testMarker.getTitle();

// $ExpectType void
testMarker.setTop(true);

// $ExpectType boolean
testMarker.getTop();

// $ExpectType void
testMarker.setShadow();
// $ExpectType void
testMarker.setShadow(icon);
// $ExpectType void
testMarker.setShadow('shadow url');

// $ExpectType string | Icon | undefined
testMarker.getShadow();

// $ExpectType void
testMarker.setShape();
// $ExpectType void
testMarker.setShape(markerShape);

// $ExpectType MarkerShape | undefined
testMarker.getShape();

testMarker.on('click', (event: AMap.Marker.EventMap<typeof testMarker>['click']) => {
    // $ExpectType {} | MarkerExtraData
    event.target.getExtData();
});
