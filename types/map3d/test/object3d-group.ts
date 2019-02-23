declare const line: AMap.Object3D.Line;
declare const mesh: AMap.Object3D.Mesh;

// $ExpectType Object3DGroup<Object3D>
const object3dGroup1 = new AMap.Object3DGroup();
// $ExpectType Object3DGroup<Mesh>
const object3dGroup2 = new AMap.Object3DGroup<AMap.Object3D.Mesh>();

// $ExpectType Object3D[]
object3dGroup1.children;
// $ExpectType Mesh[]
object3dGroup2.children;

// $ExoectType void
object3dGroup1.add(line);
// $ExoectType void
object3dGroup1.add(mesh);
// $ExoectType void
object3dGroup2.add(mesh);
// $ExpectError
object3dGroup2.add(line);

// $ExoectType void
object3dGroup1.remove(line);
// $ExoectType void
object3dGroup1.remove(mesh);
// $ExoectType void
object3dGroup2.remove(mesh);
// $ExpectError
object3dGroup2.remove(line);

export default object3dGroup1;
