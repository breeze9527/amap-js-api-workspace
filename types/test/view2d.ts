declare var center: AMap.LngLat;

// $ExpectType View2D
new AMap.View2D();
// $ExpectType View2D
new AMap.View2D({});

// $ExpectType View2D
new AMap.View2D({
    center: [1, 2],
    rotation: 1,
    zoom: 10,
    crs: 'EPGS3395'
});

// $ExpectType View2D
var view2d = new AMap.View2D({
    center
});

// $ExpectType View2D
view2d.on('complete', () => { });
