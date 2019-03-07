// $ExpectType VideoLayer
new AMap.VideoLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType VideoLayer
new AMap.VideoLayer();
// $ExpectType VideoLayer
new AMap.VideoLayer({});
// $ExpectType VideoLayer
const testVideoLayer = new AMap.VideoLayer({
    bounds
});

// $ExpectType void
testVideoLayer.setMap(null);
// $ExpectType void
testVideoLayer.setMap(map);

// $ExpectType Map | null | undefined
testVideoLayer.getMap();

// $ExpectType void
testVideoLayer.show();

// $ExpectType void
testVideoLayer.hide();

// $ExpectType number
testVideoLayer.getzIndex();

// $ExpectType void
testVideoLayer.setzIndex(10);

// $ExpectType HTMLVideoElement | null
testVideoLayer.getElement();

// $ExpectType void
testVideoLayer.setVideoUrl('url');

// $ExpectType string | string[] | undefined
testVideoLayer.getVideoUrl();
