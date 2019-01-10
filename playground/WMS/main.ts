testWrapper(() => {
    const map = new AMap.Map('map', {
        zoom: 3,
        //viewMode:'3D',
        center: [-99.241291, 39.51401]
    });
    const url = 'https://sampleserver1.arcgisonline.com/ArcGIS/services/Specialty/ESRI_StatesCitiesRivers_USA/MapServer/WMSServer';

    const wms = new AMap.TileLayer.WMS({
        url,
        tileSize: 256,
        blend: false,
        params: {
            LAYERS: '1,2',
            VERSION: '1.3.0',
            FORMAT: 'image/png',
            STYLES: ''
        }
    });

    test('new WMTS(options)', wms);

    test('WMTS#setMap(null)', wms.setMap(null));
    test('WMTS#setMap(map)', wms.setMap(map));

    test('WMTS#hide', wms.hide());

    test('WMTS#show', wms.show());

    test('WMTS#setzIndex', wms.setzIndex(10));

    test('WMTS#setzIndex', wms.getzIndex());

    test('WMTS#setUrl', wms.setUrl(url));

    test('WMTS#getUrl', wms.getUrl());

    test('WMTS#setParams', wms.setParams({
        LAYERS: '1,2',
        VERSION: '1.3.0',
        FORMAT: 'image/png',
        STYLES: ''
    }));

    test('WMTS#getParams', wms.getParams());

    return {
        url,
        wms
    }
});
