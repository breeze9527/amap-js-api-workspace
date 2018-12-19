declare var overlay: AMap.Overlay<{test: number}>;

// $ExpectType void
overlay.show();

// $ExpectType void
overlay.hide();

// $ExpectType Map | null
overlay.getMap();

// $ExpectError
overlay.setExtData({ any: 123 });

// $ExpectError number
overlay.getExtData().test;
