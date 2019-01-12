import { map } from '../preset';

// $ExpectType PlaceSearchLayer
new AMap.PlaceSearchLayer();
// $ExpectType PlaceSearchLayer
new AMap.PlaceSearchLayer({});
// $ExpectType PlaceSearchLayer
const placeSearchLayer = new AMap.PlaceSearchLayer({
    map,
    keyword: '华强',
    zIndex: 10
});

// $ExpectType void
placeSearchLayer.setKeywords('keyword');

// $ExpectType void
placeSearchLayer.setMap(null);
// $ExpectType void
placeSearchLayer.setMap(map);

placeSearchLayer.on('click', event => {
    // $ExpectType "click"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    const content = event.content[0];
    // $ExpectType string
    content.id;
    // $ExpectType string
    content.name;
});

placeSearchLayer.on('mousemove', event => {
    // $ExpectType "mousemove"
    event.type;
    // $ExpectType LngLat
    event.lnglat;
    const content = event.content[0];
    // $ExpectType string
    content.id;
    // $ExpectType string
    content.name;
});

placeSearchLayer.on('complete', event => {
    // $ExpectType "complete"
    event.type;
});
