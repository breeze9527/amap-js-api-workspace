var lnglat = new AMap.LngLat(114, 22);
var lnglat2 = new AMap.LngLat(113, 21);
var lnglat3 = new AMap.LngLat(113, 23);

test('LngLat', lnglat);
test('LngLat#offset', lnglat.offset(1, 2));

test('LngLat#distance', lnglat.distance(lnglat2));
test('LngLat#distance(array)', lnglat.distance([lnglat2, lnglat3]));

test('LngLat#getLng', lnglat.getLng());
test('LngLat#getLat', lnglat.getLat());
test('LngLat#equals', lnglat.equals(lnglat2));
test('LngLat#toString', lnglat.toString());

test('LngLat#add', lnglat.add(lnglat2));
test('LngLat#add', lnglat.add(lnglat2, true));

test('LngLat#substract', lnglat.subtract(lnglat2));
test('LngLat#substract', lnglat.subtract(lnglat2, true));

test('LngLat#divideBy', lnglat.divideBy(1));
test('LngLat#divideBy', lnglat.divideBy(1, true));

test('LngLat#multiplyBy', lnglat.multiplyBy(1));
test('LngLat#multiplyBy', lnglat.multiplyBy(1, true));