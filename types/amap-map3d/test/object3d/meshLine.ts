import {
    lnglat,
    lnglatTuple,
    pixel
} from '../preset';

// $ExpectError
new AMap.Object3D.MeshLine();
// $ExpectError
new AMap.Object3D.MeshLine({});
// $ExpectType MeshLine
const meshLine = new AMap.Object3D.MeshLine({
    path: [lnglat],
    width: 1,
    height: 1,
    color: 'red'
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [lnglat],
    color: [0, 0, 1, 1]
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [[1, 2]]
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [lnglat],
    unit: 'meter'
});
// $ExpectType MeshLine
new AMap.Object3D.MeshLine({
    path: [pixel],
    unit: 'px'
});
// $ExpectError
new AMap.Object3D.MeshLine({
    path: [lnglat],
    unit: 'px'
});
// $ExpectError
new AMap.Object3D.MeshLine({
    path: [pixel],
    unit: 'meter'
});

// $ExpectType number[]
meshLine.geometry.vertices;
// $ExpectError
meshLine.geometry.vertices = [];
meshLine.geometry.vertices.shift();

// $ExpectType number[]
meshLine.geometry.vertexUVs;
// $ExpectError
meshLine.geometry.vertexUVs = [];
meshLine.geometry.vertexUVs.shift();

// $ExpectType number[]
meshLine.geometry.vertexColors;
// $ExpectError
meshLine.geometry.vertexColors = [];
meshLine.geometry.vertexColors.shift();

// $ExpectType number[]
meshLine.geometry.vertexColors;
// $ExpectError
meshLine.geometry.vertexColors = [];
meshLine.geometry.vertexColors.shift();

// $ExpectType number[]
meshLine.geometry.vertexIndices;
// $ExpectError
meshLine.geometry.vertexIndices = [];
meshLine.geometry.vertexIndices.shift();

// $ExpectType number[]
meshLine.geometry.directions;
// $ExpectError
meshLine.geometry.directions = [];
meshLine.geometry.directions.shift();

// $ExpectType number[]
meshLine.geometry.textureIndices;
// $ExpectError
meshLine.geometry.textureIndices = [];
meshLine.geometry.textureIndices.shift();

// $ExpectType number
meshLine.width;

// $ExpectType void
meshLine.setPath([lnglat]);
// $ExpectType void
meshLine.setPath([lnglatTuple]);
// $ExpectType void
meshLine.setPath([pixel]);

// $ExpectType void
meshLine.setWidth(10);

// $ExpectType void
meshLine.setHeight(10);

// $ExpectType void
meshLine.setColor('red');
