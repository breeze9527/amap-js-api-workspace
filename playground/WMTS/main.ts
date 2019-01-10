testWrapper(() => {
    const map = new AMap.Map('map', {
        zoom: 3,
        //viewMode:'3D',
        center: [-99.241291, 39.51401]
    });
    const url = 'https://services.arcgisonline.com/arcgis/rest/services/Demographics/USA_Population_Density/MapServer/WMTS/';

    const wmts = new AMap.TileLayer.WMTS({
        url,
        tileSize: 256,
        blend: false,
        params: {
            Layer: '0',
            Version: '1.0.0',
            Format: 'image/png'
        }
    });

    test('new WMTS(options)', wmts);

    test('WMTS#setMap(null)', wmts.setMap(null));
    test('WMTS#setMap(map)', wmts.setMap(map));

    test('WMTS#hide', wmts.hide());

    test('WMTS#show', wmts.show());

    test('WMTS#setzIndex', wmts.setzIndex(10));

    test('WMTS#setzIndex', wmts.getzIndex());

    test('WMTS#setUrl', wmts.setUrl(url));

    test('WMTS#getUrl', wmts.getUrl());

    test('WMTS#setParams', wmts.setParams({
        Layer: '0',
        Version: '1.0.0',
        Format: 'image/png'
    }));

    test('WMTS#getParams', wmts.getParams());
});
