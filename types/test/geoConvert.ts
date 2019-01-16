import {
    lnglat,
    lnglatTuple
} from './preset';

// $ExpectType Geocoder
new AMap.Geocoder();
// $ExpectType Geocoder
new AMap.Geocoder({});
// $ExpectType Geocoder
const geocoder = new AMap.Geocoder({
    city: 'city',
    radius: 10,
    lang: 'zh_cn',
    batch: true,
    extensions: 'all'
});

// $ExpectType void
geocoder.getLocation('address', (status, result) => {
    // $ExpectType "error" | "complete" | "no_data"
    status;
    if (typeof result !== 'string') {
        const geocode = result.geocodes[0];
        const addressComponent = geocode.addressComponent;
        // $ExpectType string
        result.info;
        // $ExpectType string
        result.resultNum;
        // $ExpectType string
        geocode.adcode;
        // $ExpectType string
        geocode.formattedAddress;
        // $ExpectType string
        geocode.level;
        // $ExpectType LngLat
        geocode.location;
        // $ExpectType string
        addressComponent.building;
        // $ExpectType string
        addressComponent.building;
        // $ExpectType string
        addressComponent.buildingType;
        // $ExpectType string
        addressComponent.city;
        // $ExpectType string
        addressComponent.citycode;
        // $ExpectType string
        addressComponent.district;
        // $ExpectType string
        addressComponent.neighborhood;
        // $ExpectType string
        addressComponent.neighborhoodType;
        // $ExpectType string
        addressComponent.province;
        // $ExpectType string
        addressComponent.street;
        // $ExpectType string
        addressComponent.streetNumber;
        // $ExpectType string
        addressComponent.township;
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
geocoder.getLocation(['address', 'address'], () => { });

// $ExpectType void
geocoder.setCity();
// $ExpectType void
geocoder.setCity('city');

// $ExpectType void
geocoder.getAddress(lnglat, (status, result) => {
    // $ExpectType "error" | "complete" | "no_data"
    status;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;

        // $ExpectType ReGeocode
        const regeocode = result.regeocode;
        const addressComponent = regeocode.addressComponent;
        // $ExpectType string
        addressComponent.adcode;
        // $ExpectType string
        addressComponent.building;
        // $ExpectType string
        addressComponent.buildingType;

        const businessArea = addressComponent.businessAreas[0];
        // $ExpectType string
        businessArea.id;
        // $ExpectType LngLat
        businessArea.location;
        // $ExpectType string
        businessArea.name;
        // $ExpectType string
        addressComponent.city;
        // $ExpectType string
        addressComponent.citycode;
        // $ExpectType string
        addressComponent.district;
        // $ExpectType string
        addressComponent.neighborhood;
        // $ExpectType string
        addressComponent.neighborhoodType;
        // $ExpectType string
        addressComponent.province;
        // $ExpectType string
        addressComponent.street;
        // $ExpectType string
        addressComponent.streetNumber;

        const cross = regeocode.crosses[0];
        // $ExpectType string
        cross.direction;
        // $ExpectType number
        cross.distance;
        // $ExpectType string
        cross.first_id;
        // $ExpectType string
        cross.first_name;
        // $ExpectType LngLat
        cross.location;
        // $ExpectType string
        cross.second_id;
        // $ExpectType string
        cross.second_name;
        // $ExpectType string
        regeocode.formattedAddress;

        const poi = regeocode.pois[0];
        // $ExpectType string
        poi.address;
        // $ExpectType string
        poi.businessArea;
        // $ExpectType string
        poi.direction;
        // $ExpectType number
        poi.distance;
        // $ExpectType string
        poi.id;
        // $ExpectType LngLat
        poi.location;
        // $ExpectType string
        poi.name;
        // $ExpectType string
        poi.tel;
        // $ExpectType string
        poi.type;

        const road = regeocode.roads[0];
        // $ExpectType string
        road.direction;
        // $ExpectType number
        road.distance;
        // $ExpectType string
        road.id;
        // $ExpectType LngLat
        road.location;
        // $ExpectType string
        road.name;
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
geocoder.getAddress([lnglat, lnglat], (status, result) => {
    if (typeof result !== 'string') {
        // $ExpectType ReGeocode[]
        result.regeocodes;
    }
});

geocoder.on('error', (event: AMap.GeocoderEventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});

geocoder.on('complete', (event: AMap.GeocoderEventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    if ('info' in event) {
        // $ExpectType string
        event.info;
    }
    if ('geocodes' in event) {
        // $ExpectType string
        event.resultNum;
    }
    if ('regeocode' in event) {
        // $ExpectType ReGeocode
        event.regeocode;
    }
    if ('regeocodes' in event) {
        // $ExpectType ReGeocode[]
        event.regeocodes;
    }
});

// $ExpectType void
geocoder.getAddress(lnglatTuple, () => { });
// $ExpectType void
geocoder.getAddress([lnglatTuple, lnglatTuple], () => { });

declare const convertType: 'baidu' | 'mapbar' | 'gps' | null;
// $ExpectType void
AMap.convertFrom(lnglat, convertType, (status, result) => {
    // $ExpectType "error" | "complete"
    status;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType LngLat[]
        result.locations;
    } else {
        // $ExpectType string
        result;
    }
});
// $ExpectType void
AMap.convertFrom([lnglat], null, () => { });
// $ExpectType void
AMap.convertFrom(lnglatTuple, null, () => { });
// $ExpectType void
AMap.convertFrom([lnglatTuple], null, () => { });
