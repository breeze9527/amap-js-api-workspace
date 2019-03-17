// $ExpectError
new AMap.Object3D.MeshLine();
// $ExpectError
new AMap.Object3D.MeshLine({});
// $ExpectType MeshLine
const testMeshLine = new AMap.Object3D.MeshLine({
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
testMeshLine.geometry.vertices;
// $ExpectError
testMeshLine.geometry.vertices = [];
testMeshLine.geometry.vertices.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexUVs;
// $ExpectError
testMeshLine.geometry.vertexUVs = [];
testMeshLine.geometry.vertexUVs.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexColors;
// $ExpectError
testMeshLine.geometry.vertexColors = [];
testMeshLine.geometry.vertexColors.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexColors;
// $ExpectError
testMeshLine.geometry.vertexColors = [];
testMeshLine.geometry.vertexColors.shift();

// $ExpectType number[]
testMeshLine.geometry.vertexIndices;
// $ExpectError
testMeshLine.geometry.vertexIndices = [];
testMeshLine.geometry.vertexIndices.shift();

// $ExpectType number[]
testMeshLine.geometry.directions;
// $ExpectError
testMeshLine.geometry.directions = [];
testMeshLine.geometry.directions.shift();

// $ExpectType number[]
testMeshLine.geometry.textureIndices;
// $ExpectError
testMeshLine.geometry.textureIndices = [];
testMeshLine.geometry.textureIndices.shift();

// $ExpectType number
testMeshLine.width;

// $ExpectType void
testMeshLine.setPath([lnglat]);
// $ExpectType void
testMeshLine.setPath([lnglatTuple]);
// $ExpectType void
testMeshLine.setPath([pixel]);

// $ExpectType void
testMeshLine.setWidth(10);

// $ExpectType void
testMeshLine.setHeight(10);

// $ExpectType void
testMeshLine.setColor('red');
