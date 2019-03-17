// $ExpectType Mesh
const testMesh = new AMap.Object3D.Mesh();

// $ExpectError
testMesh.geometry = geometry;

// $ExpectType number[]
testMesh.geometry.vertices;
// $ExpectError
testMesh.geometry.vertices = [];
testMesh.geometry.vertices.shift();

// $ExpectType number[]
testMesh.geometry.vertexColors;
// $ExpectError
testMesh.geometry.vertexColors = [];
testMesh.geometry.vertexColors.shift();

// $ExpectType number[]
testMesh.geometry.vertexUVs;
// $ExpectError
testMesh.geometry.vertexUVs = [];
testMesh.geometry.vertexUVs.shift();

// $ExpectType number[]
testMesh.geometry.faces;
// $ExpectError
testMesh.geometry.faces = [];
testMesh.geometry.faces.shift();

// $ExpectType number[]
testMesh.geometry.textureIndices;
// $ExpectError
testMesh.geometry.textureIndices = [];
testMesh.geometry.textureIndices.shift();

// $ExpectType (string | HTMLCanvasElement)[]
testMesh.textures;

// $ExpectType boolean
testMesh.needUpdate;

// $ExpectType boolean
testMesh.transparent;

// $ExpectType boolean
testMesh.DEPTH_TEST;

// $ExpectType void
testMesh.reDraw();
