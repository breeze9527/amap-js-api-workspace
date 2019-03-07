// $ExpectType WMS
new AMap.TileLayer.WMS({
    url: 'url',
    params: {}
});
// $ExpectType WMS
const testWms = new AMap.TileLayer.WMS({
    url: 'url',
    blend: true,
    params: {
        VERSION: 'version',
        LAYERS: 'layers',
        STYLES: 'styles',
        FORMAT: 'format',
        TRANSPARENT: 'TRUE',
        BGCOLOR: '#000',
        EXCEPTIONS: 'exceptions',
        TIME: 'time',
        ELEVATION: 'elevation'
    },
    zooms: [1, 2],
    tileSize: 256,
    opacity: 1,
    zIndex: 10,
    visible: true
});

// $ExpectType void
testWms.setMap(map);
// $ExpectType void
testWms.setMap(null);

// $ExpectType Map | null | undefined
testWms.getMap();

// $ExpectType void
testWms.show();

// $ExpectType void
testWms.hide();

// $ExpectType void
testWms.setzIndex(10);

// $ExpectType number
testWms.getzIndex();

// $ExpectType void
testWms.setUrl('url');

// $ExpectType string
testWms.getUrl();

// $ExpectType void
testWms.setParams({
    VERSION: 'version',
    LAYERS: 'layers',
    STYLES: 'styles',
    FORMAT: 'format',
    TRANSPARENT: 'TRUE',
    BGCOLOR: '#000',
    EXCEPTIONS: 'exceptions',
    TIME: 'time',
    ELEVATION: 'elevation'
});

{
    const params = testWms.getParams();
    // $ExpectType string | undefined
    params.VERSION;
    // $ExpectType string | undefined
    params.LAYERS;
    // $ExpectType string | undefined
    params.STYLES;
    // $ExpectType string | undefined
    params.FORMAT;
    // $ExpectType "TRUE" | "FALSE" | undefined
    params.TRANSPARENT;
    // $ExpectType string | undefined
    params.BGCOLOR;
    // $ExpectType string | undefined
    params.EXCEPTIONS;
    // $ExpectType string | undefined
    params.TIME;
    // $ExpectType string | undefined
    params.ELEVATION;
}
