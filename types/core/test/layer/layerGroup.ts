// $ExpectError
new AMap.LayerGroup();

// $ExpectType LayerGroup<TileLayer>
new AMap.LayerGroup(tileLayer);
// $ExpectType LayerGroup<TileLayer>
const testTileLayerGroup = new AMap.LayerGroup([tileLayer]);
// $ExpectType LayerGroup<any>
const testAnyLauerGroup = new AMap.LayerGroup<any>([]);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.addLayer(tileLayer);
// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.addLayer([tileLayer]);
// $ExpectError
testTileLayerGroup.addLayer(massMarksLayer);

// $ExpectType TileLayer[]
testTileLayerGroup.getLayers();

// $ExpectType TileLayer | null
testTileLayerGroup.getLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType null
    this;

    return true;
});

testTileLayerGroup.hasLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType null
    this;

    return true;
});
testTileLayerGroup.hasLayer(tileLayer);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.removeLayer(tileLayer);
// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.removeLayer([tileLayer]);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.clearLayers();

testTileLayerGroup.eachLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType TileLayer
    this;
});
testTileLayerGroup.eachLayer(function(item, index, list) {
    // $ExpectType TileLayer
    item;
    // $ExpectType number
    index;
    // $ExpectType TileLayer[]
    list;
    // $ExpectType number
    this.test;
}, { test: 1 });

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.setMap(map);

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.hide();

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.show();

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.reload();

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.setOptions({});

// $ExpectType LayerGroup<TileLayer>
testTileLayerGroup.setOptions({
    tileSize: 256
});
// layerGruop.setOptions({
//     // $ExpectError
//     interval: 1
// });

testAnyLauerGroup.addLayer(tileLayer);

testAnyLauerGroup.addLayer(massMarksLayer);

testAnyLauerGroup.setOptions({
    test: 1
});
