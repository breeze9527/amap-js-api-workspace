// $ExpectType Object3DResult | null
map.getObject3DByContainerPos(pixel);

// $ExpectType Object3DResult | null
const containserPos = map.getObject3DByContainerPos(pixel, [layer], true);
if (containserPos) {
    // $ExpectType number
    containserPos.index;
    // $ExpectType Vector3
    containserPos.point;
    // $ExpectType number
    containserPos.distance;
    // $ExpectType Object3D
    containserPos.object;
} else {
    // $ExpectType null
    containserPos;
}

map.AmbientLight = ambientLight;
map.AmbientLight = undefined;

map.DirectionLight = directionLight;
map.DirectionLight = undefined;
