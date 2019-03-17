// $ExpectError
new AMap.Object3D.Prism();
// $ExpectError
new AMap.Object3D.Prism({});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: 'red',
    height: 1,
    color2: 'blue'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [pixel],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [[lnglat]],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [[pixel]],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [[lnglatTuple]],
    color: 'red'
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: ['red']
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: [1, 1, 1, 1]
});
// $ExpectType Prism
new AMap.Object3D.Prism({
    path: [lnglat],
    color: [[1, 1, 1, 1]]
});
