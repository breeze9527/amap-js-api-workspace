declare const geometry: AMap.Geometry3D.Mesh;

// $ExpectType Mesh
const mesh = new AMap.Object3D.Mesh();

// $ExpectError
mesh.geometry = geometry;

// $ExpectType number[]
mesh.geometry.vertices;
// $ExpectError
mesh.geometry.vertices = [];
mesh.geometry.vertices.shift();

// $ExpectType number[]
mesh.geometry.vertexColors;
// $ExpectError
mesh.geometry.vertexColors = [];
mesh.geometry.vertexColors.shift();

// $ExpectType number[]
mesh.geometry.vertexUVs;
// $ExpectError
mesh.geometry.vertexUVs = [];
mesh.geometry.vertexUVs.shift();

// $ExpectType number[]
mesh.geometry.faces;
// $ExpectError
mesh.geometry.faces = [];
mesh.geometry.faces.shift();

// $ExpectType number[]
mesh.geometry.textureIndices;
// $ExpectError
mesh.geometry.textureIndices = [];
mesh.geometry.textureIndices.shift();

// $ExpectType (string | HTMLCanvasElement)[]
mesh.textures;

// $ExpectType boolean
mesh.needUpdate;

// $ExpectType boolean
mesh.transparent;

// $ExpectType boolean
mesh.DEPTH_TEST;

// $ExpectType void
mesh.reDraw();

export default mesh;
