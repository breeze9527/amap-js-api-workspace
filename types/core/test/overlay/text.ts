interface TextExtraData {
    test: number;
}

// $ExpectType Text<any>
new AMap.Text();
// $ExpectType Text<any>
new AMap.Text({});
// $ExpectType Text<TextExtraData>
const testText = new AMap.Text<TextExtraData>({
    textAlign: 'center',
    verticalAlign: 'top',
    map,
    position: lnglat,
    anchor: 'bottom-center',
    offset: pixel,
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
    extData: { test: 1 },
});

const testTextAnchor = testText.getAnchor();
if (testTextAnchor) {
    // $ExpectType Anchor
    testTextAnchor;
} else {
    // $ExpectType undefined
    testTextAnchor;
}

// $ExpectType void
testText.setAnchor(testTextAnchor);
// $ExpectType void
testText.setAnchor();

// $ExpectType string
testText.getText();

// $ExpectType void
testText.setText('123');

// $ExpectType void
testText.setStyle({
    background: 'red',
    width: '200px'
});

// $ExpectType void
testText.markOnAMAP({
    name: '123',
    position: lnglatTuple
});

// $ExpectType Pixel
testText.getOffset();

// $ExpectType void
testText.setOffset(pixel);

// $ExpectType void
testText.setAnimation('AMAP_ANIMATION_BOUNCE');

// $ExpectType AnimationName
testText.getAnimation();

// $ExpectType void
testText.setClickable(true);

// $ExpectType boolean
testText.getClickable();

// $ExpectType LngLat | undefined
testText.getPosition();

// $ExpectType void
testText.setAngle(10);

// $ExpectType number
testText.getAngle();

// $ExpectType void
testText.setzIndex(1);

// $ExpectType number
testText.getzIndex();

// $ExpectType void
testText.setDraggable(true);

// $ExpectType boolean
testText.getDraggable();

// $ExpectType void
testText.hide();

// $ExpectType void
testText.show();

// $ExpectType void
testText.setCursor('default');

// $ExpectType void
testText.moveAlong([lnglat], 100);

// $ExpectType void
testText.moveAlong([lnglat], 100);
// $ExpectError
testText.moveAlong([[1, 2]], 100);
// $ExpectType void
testText.moveAlong([lnglat], 100, t => t, false);

// $ExpectType void
testText.moveTo(lnglat, 100);
// $ExpectType void
testText.moveTo([1, 2], 100);
// $ExpectType void
testText.moveTo([1, 2], 100, t => t);

// $ExpectType void
testText.stopMove();

// $ExpectType boolean
testText.pauseMove();

// $ExpectType boolean
testText.resumeMove();

// $ExpectType void
testText.setMap(map);

// $ExpectType void
testText.setTitle('title');
// $ExpectError
testText.setTitle();

// $ExpectType string | undefined
testText.getTitle();

// $ExpectType void
testText.setTop(true);

// $ExpectType boolean
testText.getTop();

// $ExpectType void
testText.setShadow();
// $ExpectType void
testText.setShadow(icon);
// $ExpectType void
testText.setShadow('shadow url');

// $ExpectType void
testText.setExtData({ test: 1 });

// $ExpectType {} | TextExtraData
testText.getExtData();

testText.on('click', (event: AMap.Text.EventMap<typeof testText>['click']) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Text<TextExtraData>
    event.target;
});
