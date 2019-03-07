// $ExpectType ArrayBounds
const testArrayBounds = new AMap.ArrayBounds([lnglat, lnglat, lnglat]);

// $ExpectType LngLat[]
testArrayBounds.bounds;

// $ExpectType boolean
testArrayBounds.contains(lnglat);

// $ExpectType Bounds
testArrayBounds.toBounds();

// $ExpectType LngLat
testArrayBounds.getCenter();
