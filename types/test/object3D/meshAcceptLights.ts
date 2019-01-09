import * as preset from '../preset';

// $ExpectType MeshAcceptLights
const meshAcceptLights = new AMap.Object3D.MeshAcceptLights();

// $ExpectError
meshAcceptLights.geometry = geometry;

// $ExpectType number[]
meshAcceptLights.geometry.vertices;
// $ExpectError
meshAcceptLights.geometry.vertices = [];
meshAcceptLights.geometry.vertices.shift();

// $ExpectType number[]
meshAcceptLights.geometry.vertexColors;
// $ExpectError
meshAcceptLights.geometry.vertexColors = [];
meshAcceptLights.geometry.vertexColors.shift();

// $ExpectType number[]
meshAcceptLights.geometry.vertexUVs;
// $ExpectError
meshAcceptLights.geometry.vertexUVs = [];
meshAcceptLights.geometry.vertexUVs.shift();

// $ExpectType number[]
meshAcceptLights.geometry.faces;
// $ExpectError
meshAcceptLights.geometry.faces = [];
meshAcceptLights.geometry.faces.shift();

// $ExpectType number[]
meshAcceptLights.geometry.textureIndices;
// $ExpectError
meshAcceptLights.geometry.textureIndices = [];
meshAcceptLights.geometry.textureIndices.shift();

// $ExpectType number[]
meshAcceptLights.geometry.vertexNormals;
// $ExpectError
meshAcceptLights.geometry.vertexNormals = [];
meshAcceptLights.geometry.vertexNormals.shift();

// $ExpectType (string | HTMLCanvasElement)[]
meshAcceptLights.textures;

// $ExpectType boolean
meshAcceptLights.needUpdate;

// $ExpectType boolean
meshAcceptLights.transparent;

// $ExpectType boolean
meshAcceptLights.DEPTH_TEST;

// $ExpectType void
meshAcceptLights.reDraw();
