interface InfoWindowExtraData {
    test: number;
}

// $ExpectType InfoWindow<any>
new AMap.InfoWindow();
// $ExpectType InfoWindow<any>
new AMap.InfoWindow({});
// $ExpectType InfoWindow<InfoWindowExtraData>
const testInfoWindow = new AMap.InfoWindow<InfoWindowExtraData>({
    isCustom: false,
    autoMove: false,
    closeWhenClickMap: false,
    content: 'content',
    size: [100, 100],
    offset: new AMap.Pixel(10, 10),
    position: lnglat,
    showShadow: true
});

// $ExpectType void
testInfoWindow.open(map);
// $ExpectType void
testInfoWindow.open(map, lnglat);
// $ExpectType void
testInfoWindow.open(map, lnglatTuple);

// $ExpectType void
testInfoWindow.close();

// $ExpectType boolean
testInfoWindow.getIsOpen();

// $ExpectType void
testInfoWindow.setContent('content');
// $ExpectType void
testInfoWindow.setContent(div);

// $ExpectType string | HTMLElement | undefined
testInfoWindow.getContent();

// $ExpectType void
testInfoWindow.setPosition(lnglat);
// $ExpectType void
testInfoWindow.setPosition(lnglatTuple);

// $ExpectType LngLat | undefined
testInfoWindow.getPosition();

// $ExpectType Size | undefined
testInfoWindow.getSize();

testInfoWindow.on('change', (event: AMap.InfoWindow.EventMap<typeof testInfoWindow>['change']) => {
    // $ExpectType "change"
    event.type;
    // $ExpectType InfoWindow<InfoWindowExtraData>
    event.target;
});

testInfoWindow.on('close', (event: AMap.InfoWindow.EventMap<typeof testInfoWindow>['close']) => {
    // $ExpectType "close"
    event.type;
    // $ExpectType InfoWindow<InfoWindowExtraData>
    event.target;
});

testInfoWindow.on('open', (event: AMap.InfoWindow.EventMap<typeof testInfoWindow>['open']) => {
    // $ExpectType "open"
    event.type;
    // $ExpectType InfoWindow<InfoWindowExtraData>
    event.target;
});
