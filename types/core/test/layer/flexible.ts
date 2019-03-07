// $ExpectType Flexible
new AMap.TileLayer.Flexible();
// $ExpectType Flexible
new AMap.TileLayer.Flexible({});
// $ExpectType Flexible
const testFlexible = new AMap.TileLayer.Flexible({
    createTile(x, y, z, success, fail) {
        // $ExpectType number
        x;
        // $ExpectType number
        y;
        // $ExpectType number
        z;
        // $ExpectType void
        success(imgEle);
        // $ExpectType void
        success(canvasEle);
        // $ExpectType void
        fail();
    },
    cacheSize: 10,
    opacity: 1,
    visible: true,
    map,
    zIndex: 1,
    zooms: [1, 2]
});

// $ExpectType void
testFlexible.setMap(null);
// $ExpectType void
testFlexible.setMap(map);

// $ExpectType Map | null | undefined
testFlexible.getMap();

// $ExpectType void
testFlexible.show();

// $ExpectType void
testFlexible.hide();

// $ExpectType void
testFlexible.setzIndex(10);

// $ExpectType number
testFlexible.getzIndex();
