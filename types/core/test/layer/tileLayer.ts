// $ExpectType TileLayer
new AMap.TileLayer();

// $ExpectType TileLayer
new AMap.TileLayer({});

// $ExpectType TileLayer
const testTileLayer = new AMap.TileLayer({
    map,
    tileSize: 256,
    tileUrl: '',
    errorUrl: '',
    getTileUrl: (x, y, z) => '',
    zIndex: 1,
    opacity: 0.1,
    zooms: [3, 18],
    detectRetina: true
});

// $ExpectType string[]
testTileLayer.getTiles();

// $ExpectType void
testTileLayer.reload();

// $ExpectType void
testTileLayer.setTileUrl('');
// $ExpectType void
testTileLayer.setTileUrl((x, y, level) => {
    // $ExpectType number
    x;
    // $ExpectType number
    y;
    // $ExpectType number
    level;
    return '';
});

// $ExpectType TileLayer
testTileLayer.on('complete', () => { });

testTileLayer.off('complete', () => { });

testTileLayer.emit('complete');

// $ExpectType Traffic
const testTrafficLayer = new AMap.TileLayer.Traffic({});
// $ExpectType Traffic
new AMap.TileLayer.Traffic({
    autoRefresh: true,
    interval: 180
});

testTrafficLayer.on('complete', () => { });
