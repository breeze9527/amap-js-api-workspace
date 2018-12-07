declare var northEast: AMap.LngLat;
declare var southWest: AMap.LngLat;
declare var point: AMap.LngLat;

// $ExpectType Bounds
var bounds = new AMap.Bounds(southWest, northEast);

// $ExpectType boolean
bounds.contains(point);

// $ExpectType boolean
bounds.contains([point.getLng(), point.getLat()]);

// $ExpectType LngLat
bounds.getCenter();

// $ExpectType LngLat
bounds.getSouthWest();

// $ExpectType LngLat
bounds.getSouthEast();

// $ExpectType LngLat
bounds.getNorthEast();

// $ExpectType LngLat
bounds.getNorthWest();

// $ExpectType string
bounds.toString();
