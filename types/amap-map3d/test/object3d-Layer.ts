import {
    map
} from './preset';

declare const object3d: AMap.Object3D;

// $ExpectType Object3DLayer
new AMap.Object3DLayer();
// $ExpectType Object3DLayer
new AMap.Object3DLayer({});
// $ExpectType Object3DLayer
const object3DLayer = new AMap.Object3DLayer({
    map,
    visible: true,
    opacity: 0.1,
    zIndex: 2,
    zooms: [1, 2]
});

// $ExpectType void
object3DLayer.setMap(null);
// $ExpectType void
object3DLayer.setMap(map);

// $ExpectType Map | null | undefined
object3DLayer.getMap();

// $ExpectType void
object3DLayer.hide();

// $ExpectType void
object3DLayer.show();

// $ExpectType void
object3DLayer.setOpacity(1);

// $ExpectType number
object3DLayer.getOpacity();

// $ExpectType void
object3DLayer.setzIndex(1);

// $ExpectType number
object3DLayer.getzIndex();

// $ExpectType [number, number]
object3DLayer.getZooms();

// $ExpectType void
object3DLayer.add(object3d);

// $ExpectType void
object3DLayer.remove(object3d);

// $ExpectType void
object3DLayer.clear();

// $ExpectType void
object3DLayer.reDraw();
