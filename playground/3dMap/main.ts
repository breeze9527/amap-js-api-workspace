testPluginWrapper('Map3D', () => {
    const map = new AMap.Map('map', {
        viewMode: '3D',
        rotation: 20,
        maxPitch: 10,
        pitch: 50,
        zoom: 15
    });
    const lnglat = map.getCenter();
    const path = [
        lnglat.offset(1e3, 1e3),
        lnglat.offset(-1e3, 1e3),
        lnglat.offset(-1e3, -1e3),
        lnglat.offset(1e3, -1e3),
    ];
    const ambientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.5);
    const directionLight = new AMap.Lights.DirectionLight([0, 0, 1], [1, 1, 1], 1);
    map.AmbientLight = ambientLight;
    map.DirectionLight = directionLight;
    const prism = new AMap.Object3D.Prism({
        path,
        height: 1e4,
        color: '#0088ffcc',
    });
    prism.transparent = true;
    const object3dLayer = new AMap.Object3DLayer({ map });
    // object3dLayer.add(prism);

    return {
        map,
        ambientLight,
        directionLight,
        object3dLayer,
        prism
    }
});
