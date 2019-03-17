// $ExpectType Object3DLayer
new AMap.Object3DLayer();
// $ExpectType Object3DLayer
new AMap.Object3DLayer({});
// $ExpectType Object3DLayer
const testObject3DLayer = new AMap.Object3DLayer({
    map,
    visible: true,
    opacity: 0.1,
    zIndex: 2,
    zooms: [1, 2]
});

// $ExpectType void
testObject3DLayer.setMap(null);
// $ExpectType void
testObject3DLayer.setMap(map);

// $ExpectType Map | null | undefined
testObject3DLayer.getMap();

// $ExpectType void
testObject3DLayer.hide();

// $ExpectType void
testObject3DLayer.show();

// $ExpectType void
testObject3DLayer.setOpacity(1);

// $ExpectType number
testObject3DLayer.getOpacity();

// $ExpectType void
testObject3DLayer.setzIndex(1);

// $ExpectType number
testObject3DLayer.getzIndex();

// $ExpectType [number, number]
testObject3DLayer.getZooms();

// $ExpectType void
testObject3DLayer.add(object3d);

// $ExpectType void
testObject3DLayer.remove(object3d);

// $ExpectType void
testObject3DLayer.clear();

// $ExpectType void
testObject3DLayer.reDraw();
