testWrapper(() => {
    const map = new AMap.Map('map', {
        viewMode: '3D',
        pitch: 50,
        zoom: 15
    });
    const lnglat = map.getCenter();
    const path = [lnglat, lnglat.offset(1e3, 1e3)];

    const meshLine = new AMap.Object3D.MeshLine({
        path,
        width: 50,
        height: 1e3,
        color: '#0000FF33'
    });

    const object3dLayer = new AMap.Object3DLayer({ map });
    meshLine.transparent = true;
    object3dLayer.add(meshLine);

    return {
        map,
        object3dLayer,
        meshLine
    }
});