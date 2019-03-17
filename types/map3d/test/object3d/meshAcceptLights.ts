// $ExpectType MeshAcceptLights
const testMeshAcceptLights = new AMap.Object3D.MeshAcceptLights();

// $ExpectError
testMeshAcceptLights.geometry = geometry;

// $ExpectType number[]
testMeshAcceptLights.geometry.vertices;
// $ExpectError
testMeshAcceptLights.geometry.vertices = [];
testMeshAcceptLights.geometry.vertices.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.vertexColors;
// $ExpectError
testMeshAcceptLights.geometry.vertexColors = [];
testMeshAcceptLights.geometry.vertexColors.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.vertexUVs;
// $ExpectError
testMeshAcceptLights.geometry.vertexUVs = [];
testMeshAcceptLights.geometry.vertexUVs.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.faces;
// $ExpectError
testMeshAcceptLights.geometry.faces = [];
testMeshAcceptLights.geometry.faces.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.textureIndices;
// $ExpectError
testMeshAcceptLights.geometry.textureIndices = [];
testMeshAcceptLights.geometry.textureIndices.shift();

// $ExpectType number[]
testMeshAcceptLights.geometry.vertexNormals;
// $ExpectError
testMeshAcceptLights.geometry.vertexNormals = [];
testMeshAcceptLights.geometry.vertexNormals.shift();

// $ExpectType (string | HTMLCanvasElement)[]
testMeshAcceptLights.textures;

// $ExpectType boolean
testMeshAcceptLights.needUpdate;

// $ExpectType boolean
testMeshAcceptLights.transparent;

// $ExpectType boolean
testMeshAcceptLights.DEPTH_TEST;

// $ExpectType void
testMeshAcceptLights.reDraw();
