import {
    map,
    pixel
} from '../preset';

// $ExpectType Scale
new AMap.Scale();
// $ExpectType Scale
new AMap.Scale({});
// $ExpectType Scale
const scale = new AMap.Scale({
    position: 'LT',
    visible: true,
    offset: pixel
});

scale.on('show', (event: AMap.Scale.EventMap['show']) => {
    // $ExpectType "show"
    event.type;
});

scale.on('hide', (event: AMap.Scale.EventMap['hide']) => {
    // $ExpectType "hide"
    event.type;
});
