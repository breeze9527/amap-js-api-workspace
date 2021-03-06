// $ExpectType Bounds
const testBounds = new AMap.Bounds(lnglat, lnglat);
// $ExpectType Bounds
new AMap.Bounds();
// $ExpectError
new AMap.Bounds([0, 0, 0]);
// $ExpectType Bounds
new AMap.Bounds([0, 0, 0, 0]);
// $ExpectType Bounds
new AMap.Bounds(lnglatTuple, lnglatTuple);
// $ExpectType Bounds
new AMap.Bounds(0, 0, 0, 0);

// $ExpectType boolean
testBounds.contains(lnglat);
// $ExpectType boolean
testBounds.contains(lnglatTuple);

// $ExpectType LngLat
testBounds.getCenter();

// $ExpectType LngLat
testBounds.getSouthWest();

// $ExpectType LngLat
testBounds.getSouthEast();

// $ExpectType LngLat
testBounds.getNorthEast();

// $ExpectType LngLat
testBounds.getNorthWest();

// $ExpectType string
testBounds.toString();
