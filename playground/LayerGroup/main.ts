testWrapper(() => {
    const map = new AMap.Map('map');
    const tileLayer1 = new AMap.TileLayer();
    const tileLayer2 = new AMap.TileLayer();
    const tileLayer3 = new AMap.TileLayer();

    test('LayerGroup(layer)', new AMap.LayerGroup(tileLayer1));
    test('LayerGroup(layer[])', new AMap.LayerGroup([tileLayer2]));

    const layerGroup = new AMap.LayerGroup<AMap.TileLayer>(tileLayer1);

    testLayer(layerGroup);

    test('LayerGroup#addLayer(tileLayer)', layerGroup.addLayer(tileLayer1));
    test('LayerGroup#addLayer([tileLayer])', layerGroup.addLayers([tileLayer2]));
    test('LayerGroup#addLayer === LayerGroup#addLayers', layerGroup.addLayer === layerGroup.addLayers);

    test('LayerGroup#getLayers', layerGroup.getLayers());

    test('LayerGroup#getLayer', layerGroup.getLayer(function (item, index, list) {
        test('LayerGroup#getLayer$item', item);
        test('LayerGroup#getLayer$index', index);
        test('LayerGroup#getLayer$list', list);
        test('LayerGroup#getLayer$this', this);
        return item === tileLayer1;
    }) === tileLayer1);

    test('LayerGroup#hasLayer', layerGroup.hasLayer(tileLayer1));
    test('LayerGroup#hasLayer', layerGroup.hasLayer(tileLayer3));

    test('LayerGroup#removeLayer(tileLayer)', layerGroup.removeLayer(tileLayer1));
    test('LayerGroup#removeLayer([tileLayer])', layerGroup.removeLayer([tileLayer2]));
    test('LayerGroup#removeLayer === LayerGroup#removeLayers', layerGroup.removeLayer === layerGroup.removeLayers);

    test('LayerGroup#clearLayers', layerGroup.clearLayers());

    layerGroup.addLayers([tileLayer1, tileLayer2]);

    test('LayerGroup#eachLayer', layerGroup.eachLayer(function (layer, index, list) {
        test('LayerGroup#eachLayer$layer', layer);
        test('LayerGroup#eachLayer$index', index);
        test('LayerGroup#eachLayer$list', list);
        test('LayerGroup#eachLayer$this', this);
    }));

    test('LayerGroup(context)#eachLayer', layerGroup.eachLayer(function (layer, index, list) {
        test('LayerGroup(context)#eachLayer$this', this);
    }, { test: 1 }));

    test('LayerGroup#setMap', layerGroup.setMap(map));

    test('LayerGroup#hide', layerGroup.hide());

    test('LayerGroup#show', layerGroup.show());

    test('LayerGroup#reload', layerGroup.reload());

    test('LayerGroup#setOptions', layerGroup.setOptions({}));
});