interface OverlayExtraData {
    test: number;
}
declare const testOverlay: AMap.Overlay<OverlayExtraData>;

// $ExpectType void
testOverlay.show();

// $ExpectType void
testOverlay.hide();

// $ExpectType Map | null | undefined
testOverlay.getMap();

// $ExpectType void
testOverlay.setMap(map);
// $ExpectType void
testOverlay.setMap(null);

// $ExpectError
testOverlay.setExtData({ any: 123 });

// $ExpectError OverlayExtraData
testOverlay.getExtData();
