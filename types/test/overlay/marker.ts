declare var map: AMap.Map;
declare var lnglat: AMap.LngLat;
declare var pixel: AMap.Pixel;
declare var domEle: HTMLElement;
declare var markerShape: AMap.MarkerShape;

interface ExtraData {
    test: number;
}

// $ExpectType Marker<ExtraData>
new AMap.Marker<ExtraData>();
// $ExpectType Marker<any>
new AMap.Marker();
// $ExpectType Marker<any>
new AMap.Marker({});
// $ExpectType Marker<ExtraData>
var marker = new AMap.Marker<ExtraData>({
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
    // shadow
    title: '123',
    clickable: true,
    // shape
    extData: {
        test: 123
    }
});

// $ExpectType void
marker.markOnAMAP({
    name: '123',
    position: [1, 2]
});
// $ExpectType void
marker.markOnAMAP();
// $ExpectType void
marker.markOnAMAP({});
// $ExpectType void
marker.markOnAMAP({
    position: [1, 2],
    name: '123'
});

// $ExpectType Pixel
marker.getOffset();

// $ExpectType void
marker.setOffset(pixel);

// $ExpectType void
marker.setAnimation('AMAP_ANIMATION_BOUNCE');

// $ExpectType MarkerAnimationName
marker.getAnimation();

// $ExpectType void
marker.setClickable(true);

// $ExpectType boolean
marker.getClickable();

// $ExpectType LngLat
marker.getPosition();

// $ExpectType void
marker.setPosition(lnglat);

// $ExpectType void
marker.setAngle(0);

// $ExpectType void
marker.setLabel();
// $ExpectType void
marker.setLabel({});
// $ExpectType void
marker.setLabel({
    content: 'label content',
    offset: pixel
});

// $ExpectType MarkerLabel | undefined
marker.getLabel();

// $ExpectType number
marker.getAngle();

// $ExpectType void
marker.setzIndex(100);

// $ExpectType void
marker.setIcon('icon uri');

// $ExpectType string
marker.getIcon();

// $ExpectType void
marker.setDraggable(true);

// $ExpectType boolean
marker.getDraggable();

// $ExpectType void
marker.setCursor('default');

// $ExpectType void
marker.setContent('content');
// $ExpectType void
marker.setContent(domEle);

// $ExpectType string | HTMLElement
marker.getContent();

// $ExpectType void
marker.moveAlong([lnglat], 100);
// $ExpectError
marker.moveAlong([[1, 2]], 100);
// $ExpectType void
marker.moveAlong([lnglat], 100, t => t, false);

// $ExpectType void
marker.moveTo(lnglat, 100);
// $ExpectType void
marker.moveTo([1, 2], 100);
// $ExpectType void
marker.moveTo([1, 2], 100, t => t);

// $ExpectType void
marker.stopMove();

// $ExpectType boolean
marker.pauseMove();

// $ExpectType boolean
marker.resumeMove();

// $ExpectType void
marker.setMap(map);

// $ExpectType void
marker.setTitle('title');
// $ExpectError
marker.setTitle();

// $ExpectType string | undefined
marker.getTitle();

// $ExpectType void
marker.setTop(true);

// $ExpectType boolean
marker.getTop();

// $ExpectType void
marker.setShape();
// $ExpectType void
marker.setShape(markerShape);

// $ExpectType MarkerShape | undefined
marker.getShape();

marker.on('click', event => {
    // $ExpectType number
    event.target.getExtData().test;
});
