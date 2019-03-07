// $ExpectType WMTS
new AMap.TileLayer.WMTS({
    url: 'url',
    params: {}
});
// $ExpectType WMTS
const testWmts = new AMap.TileLayer.WMTS({
    url: 'url',
    blend: true,
    tileSize: 256,
    zooms: [1, 2],
    opacity: 1,
    zIndex: 10,
    visible: true,
    params: {
        Version: 'version',
        Layer: 'layers',
        Style: 'style',
        Format: 'format'
    }
});

// $ExpectType void
testWmts.setMap(map);
// $ExpectType void
testWmts.setMap(null);

// $ExpectType Map | null | undefined
testWmts.getMap();

// $ExpectType void
testWmts.show();

// $ExpectType void
testWmts.hide();

// $ExpectType void
testWmts.setzIndex(10);

// $ExpectType number
testWmts.getzIndex();

// $ExpectType void
testWmts.setUrl('url');

// $ExpectType string
testWmts.getUrl();

// $ExpectType void
testWmts.setParams({
    Version: 'version',
    Layer: 'layers',
    Style: 'style',
    Format: 'format'
});

{
    const params = testWmts.getParams();
    // $ExpectType string | undefined
    params.Version;
    // $ExpectType string | undefined
    params.Layer;
    // $ExpectType string | undefined
    params.Style;
    // $ExpectType string | undefined
    params.Format;
}
