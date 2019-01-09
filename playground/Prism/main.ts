testWrapper(() => {
    const map = new AMap.Map('map', {
        viewMode: '3D',
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
    // const ambientLight = new AMap.Lights.AmbientLight([1, 1, 1], 0.5);
    // const directionLight = new AMap.Lights.DirectionLight([0, 0, 1], [1, 1, 1], 1);
    // map.AmbientLight = ambientLight;
    // map.DirectionLight = directionLight;
    const pixelPath = path.map(map.lngLatToGeodeticCoord.bind(map));
    const prism = new AMap.Object3D.Prism({
        path,
        // path: [path],
        // path: pixelPath,
        // path: [pixelPath.map(item => ([item.getX(), item.getY()] as [number, number]))],
        height: 0.5e4,
        color: '#0088ffcc',
        color2: [[0, 0, 1, 0.5]]
        // color2: '#8888ffcc'
    });
    // prism.transparent = true;
    const object3dLayer = new AMap.Object3DLayer({ map });
    object3dLayer.add(prism);

    return {
        map,
        object3dLayer,
        prism
    }
});
