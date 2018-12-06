declare const northEast: AMap.LngLat;
declare const southWest: AMap.LngLat;
declare const point: AMap.LngLat;

const bounds = new AMap.Bounds(southWest, northEast); // $ExpectType Bounds

bounds.contains(point); // $ExpectType boolean
bounds.contains([point.getLng(), point.getLat()]); // $ExpectType boolean
bounds.getCenter(); // $ExpectType LngLat
bounds.getSouthWest(); // $ExpectType LngLat
bounds.getSouthEast(); // $ExpectType LngLat
bounds.getNorthEast(); // $ExpectType LngLat
bounds.getNorthWest(); // $ExpectType LngLat
bounds.toString(); // $ExpectType string
