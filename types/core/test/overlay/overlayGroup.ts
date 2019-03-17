// $ExpectType OverlayGroup<Overlay<any>, any>
const testOverlayGroup2 = new AMap.OverlayGroup();
// $ExpectType OverlayGroup<Marker<any>, any>
new AMap.OverlayGroup<AMap.Marker, any>(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
const testOverlayGroup = new AMap.OverlayGroup<AMap.Marker>([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlay(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlay([marker]);
// $ExpectError
testOverlayGroup.addOverlay([testCircle]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlays(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.addOverlays([marker]);

// $ExpectType Marker<any>[]
testOverlayGroup.getOverlays();

// $ExpectType boolean
testOverlayGroup.hasOverlay(marker);
// $ExpectType boolean
testOverlayGroup.hasOverlay(o => o === marker);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlay(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlay([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlays(marker);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.removeOverlays([marker]);

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.clearOverlays();

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.eachOverlay(function(overlay, index, overlays) {
    // $ExpectType Marker<any>
    overlay;
    // $ExpectType number
    index;
    // $ExpectType Marker<any>[]
    overlays;
    // $ExpectType Marker<any>
    this;
});

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.setMap(null);
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.setMap(map);

// $ExpectType OverlayGroup<Overlay<any>, any>
testOverlayGroup2.setOptions({
    test: 1
});
// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.setOptions({
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

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.show();

// $ExpectType OverlayGroup<Marker<any>, any>
testOverlayGroup.hide();

testOverlayGroup.on('click', (event: AMap.MapsEvent<'click', AMap.Overlay>) => {
    // $ExpectType "click"
    event.type;
    // $ExpectType Overlay<any>
    event.target;
});
