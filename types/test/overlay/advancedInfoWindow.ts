import {
    map,
    lnglat,
    lnglatTuple,
    div
} from '../preset';
import { eventNames } from 'cluster';

interface ExtraData {
    test: number;
}
// $ExpectType AdvancedInfoWindow<any>
new AMap.AdvancedInfoWindow();
// $ExpectType AdvancedInfoWindow<any>
new AMap.AdvancedInfoWindow({});
// $ExpectType AdvancedInfoWindow<ExtraData>
const advancedInfoWindow = new AMap.AdvancedInfoWindow<ExtraData>({
    autoMove: true,
    closeWhenClickMap: true,
    content: '123',
    offset: new AMap.Pixel(1, 2),
    panel: div,
    searchRadius: 4000,
    placeSearch: true,
    driving: true,
    walking: true,
    transit: true,
    asOrigin: true,
    asDestination: true
});

// $ExpectType void
advancedInfoWindow.open(map);
// $ExpectType void
advancedInfoWindow.open(map, lnglat);
// $ExpectType void
advancedInfoWindow.open(map, lnglatTuple);

// $ExpectType void
advancedInfoWindow.close();

// $ExpectType boolean
advancedInfoWindow.getIsOpen();

// $ExpectType void
advancedInfoWindow.setContent('123');
// $ExpectType void
advancedInfoWindow.setContent(div);

// $ExpectType string | HTMLElement | undefined
advancedInfoWindow.getContent();

// $ExpectType void
advancedInfoWindow.setPosition(lnglat);
// $ExpectType void
advancedInfoWindow.setPosition(lnglatTuple);

// $ExpectType LngLat | undefined
advancedInfoWindow.getPosition();

// $ExpectType void
advancedInfoWindow.clear();

advancedInfoWindow.on('error', event => {
    // $ExpectType "error"
    event.type;
});

advancedInfoWindow.on('complete', event => {
    // $ExpectType "placesearch" | "driving" | "walking" | "transit"
    event.type;
    // $ExpectType string
    event.info;
});
