var map = new AMap.Map('map');
var layerOption: AMap.LayerOptions = {
    map
}
var tileLayerOption: AMap.TileLayerOptions = {
    ...layerOption,
    zIndex: 10,
    opacity: 0.5,
    zooms: [3, 18],
    detectRetina: true
}
var tileLayer = new AMap.TileLayer(tileLayerOption);
var satelliteLayer = new AMap.TileLayer.Satellite(tileLayerOption);
var roadNetLayer = new AMap.TileLayer.RoadNet(tileLayerOption);
var trafficLayer = new AMap.TileLayer.Traffic({
    ...tileLayerOption,
    autoRefresh: true,
    interval: 100
});

function testTileLayer(layer: AMap.TileLayer) {
    let name = (layer as any).CLASS_NAME.replace(/^[^.]+\./, '');
    test(`${name}#getTiles`, layer.getTiles());
    test(`${name}#setTileUrl(string)`, layer.setTileUrl(''));
    test(`${name}#setTileUrl(function)`, layer.setTileUrl((...args) => {
        test(`${name}#setTileUrl(function)_callback_args`, args);
        return '';
    }));
    test(`${name}#reload`, layer.reload());
}

console.log('-----------------------');
testLayer(tileLayer);
testTileLayer(tileLayer);

console.log('-----------------------');
testLayer(satelliteLayer);
testTileLayer(satelliteLayer);

console.log('-----------------------');
testLayer(roadNetLayer);
testTileLayer(roadNetLayer);

console.log('-----------------------');
testLayer(trafficLayer);
testTileLayer(trafficLayer);