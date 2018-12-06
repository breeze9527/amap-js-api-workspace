const lnglat = new AMap.LngLat(114, 22);
const lnglat2 = new AMap.LngLat(113, 21);

// $ExpectType LngLat
lnglat.offset(1, 2);

// $ExpectType number
lnglat.distance(lnglat2);
// $ExpectType number
lnglat.distance([lnglat2]);

// $ExpectType number
lnglat.getLng();

// $ExpectType number
lnglat.getLat();

// $ExpectType boolean
lnglat.equals(lnglat2);

// $ExpectType string
lnglat.toString();

// $ExpectType LngLat
lnglat.add(lnglat2);
// $ExpectType LngLat
lnglat.add(lnglat2, true);

// $ExpectType LngLat
lnglat.subtract(lnglat2);
// $ExpectType LngLat
lnglat.subtract(lnglat2, true);

// $ExpectType LngLat
lnglat.divideBy(1);
// $ExpectType LngLat
lnglat.divideBy(1, true);

// $ExpectType LngLat
lnglat.multiplyBy(1);
// $ExpectType LngLat
lnglat.multiplyBy(1, true);
