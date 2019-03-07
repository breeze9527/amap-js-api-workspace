// $ExpectType LngLat
new AMap.LngLat(114, 22);
// $ExpectType LngLat
const testLnglat = new AMap.LngLat(113, 21);

// $ExpectType LngLat
testLnglat.offset(1, 2);

// $ExpectType number
testLnglat.distance(testLnglat);
// $ExpectType number
testLnglat.distance([testLnglat]);

// $ExpectType number
testLnglat.getLng();

// $ExpectType number
testLnglat.getLat();

// $ExpectType boolean
testLnglat.equals(testLnglat);

// $ExpectType string
testLnglat.toString();

// $ExpectType LngLat
testLnglat.add(testLnglat);
// $ExpectType LngLat
testLnglat.add(testLnglat, true);

// $ExpectType LngLat
testLnglat.subtract(testLnglat);
// $ExpectType LngLat
testLnglat.subtract(testLnglat, true);

// $ExpectType LngLat
testLnglat.divideBy(1);
// $ExpectType LngLat
testLnglat.divideBy(1, true);

// $ExpectType LngLat
testLnglat.multiplyBy(1);
// $ExpectType LngLat
testLnglat.multiplyBy(1, true);
