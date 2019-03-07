// $ExpectType CanvasLayer
new AMap.CanvasLayer({
    map,
    bounds,
    visible: true,
    zooms: [1, 2],
    opacity: 1
});

// $ExpectType CanvasLayer
new AMap.CanvasLayer();
// $ExpectType CanvasLayer
new AMap.CanvasLayer({});
// $ExpectType CanvasLayer
const testCanvasLayer = new AMap.CanvasLayer({
    bounds
});

// $ExpectType void
testCanvasLayer.setMap(null);
// $ExpectType void
testCanvasLayer.setMap(map);

// $ExpectType Map | null | undefined
testCanvasLayer.getMap();

// $ExpectType void
testCanvasLayer.show();

// $ExpectType void
testCanvasLayer.hide();

// $ExpectType number
testCanvasLayer.getzIndex();

// $ExpectType void
testCanvasLayer.setzIndex(10);

// $ExpectType HTMLCanvasElement | null
testCanvasLayer.getElement();

// $ExpectType void
testCanvasLayer.setCanvas(canvasEle);

// $ExpectType HTMLCanvasElement | undefined
testCanvasLayer.getCanvas();
