declare var lnglat1: AMap.LngLat;
declare var lnglat2: AMap.LngLat;
declare var lnglat3: AMap.LngLat;

// $ExpectType ArrayBounds
var arrayBounds = new AMap.ArrayBounds([lnglat1, lnglat2, lnglat3]);

// $ExpectType LngLat[]
arrayBounds.bounds;

// $ExpectType boolean
arrayBounds.contains(lnglat1);

// $ExpectType Bounds
arrayBounds.toBounds();

// $ExpectType LngLat
arrayBounds.getCenter();
