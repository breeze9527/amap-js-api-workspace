// $ExpectType Object3DGroup<Object3D>
const testObject3dGroup1 = new AMap.Object3DGroup();
// $ExpectType Object3DGroup<Mesh>
const testObject3dGroup2 = new AMap.Object3DGroup<AMap.Object3D.Mesh>();

// $ExpectType Object3D[]
testObject3dGroup1.children;
// $ExpectType Mesh[]
testObject3dGroup2.children;

// $ExoectType void
testObject3dGroup1.add(line);
// $ExoectType void
testObject3dGroup1.add(mesh);
// $ExoectType void
testObject3dGroup2.add(mesh);
// $ExpectError
testObject3dGroup2.add(line);

// $ExoectType void
testObject3dGroup1.remove(line);
// $ExoectType void
testObject3dGroup1.remove(mesh);
// $ExoectType void
testObject3dGroup2.remove(mesh);
// $ExpectError
testObject3dGroup2.remove(line);
