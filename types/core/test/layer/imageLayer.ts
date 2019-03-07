// $ExpectType ImageLayer
new AMap.ImageLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType ImageLayer
new AMap.ImageLayer();
// $ExpectType ImageLayer
new AMap.ImageLayer({});
// $ExpectType ImageLayer
const testImageLayer = new AMap.ImageLayer({
    bounds
});

// $ExpectType void
testImageLayer.setMap(null);
// $ExpectType void
testImageLayer.setMap(map);

// $ExpectType Map | null | undefined
testImageLayer.getMap();

// $ExpectType void
testImageLayer.show();

// $ExpectType void
testImageLayer.hide();

// $ExpectType number
testImageLayer.getzIndex();

// $ExpectType void
testImageLayer.setzIndex(10);

// $ExpectType HTMLImageElement | null
testImageLayer.getElement();

// $ExpectType void
testImageLayer.setImageUrl('url');

// $ExpectType string | undefined
testImageLayer.getImageUrl();
