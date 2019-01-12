import * as preset from '../preset';

// $ExpectType DistrictSearch
new AMap.DistrictSearch();
// $ExpectType DistrictSearch
new AMap.DistrictSearch({});
// $ExpectType DistrictSearch
const districtSearch = new AMap.DistrictSearch({
    level: 'city',
    showbiz: true,
    extensions: 'all',
    subdistrict: 1
});

// $ExpectType void
districtSearch.search('keyword', (status, result) => {
    // $ExpectType "complete" | "error" | "no_data"
    status;
    if (typeof result !== 'string') {
        // $ExpectType DistrictSearchResult
        result;
        // $ExpectType string
        result.info;
        // $ExpectType District
        const district = result.districtList[0];
        // $ExpectType string
        district.adcode;
        // $ExpectType LngLat[][] | undefined
        district.boundaries;
        // $ExpectType LngLat
        district.center;
        // $ExpectType string
        district.citycode;
        // $ExpectType District[] | undefined
        district.districtList;
        // $ExpectType DistrictLevel
        district.level;
        // $ExpectType string
        district.name;
    } else {
        // $ExpectType string
        result;
    }
});

declare const level: 'country' | 'province' | 'city' | 'district' | 'biz_area';
// $ExpectType void
districtSearch.setLevel(level);
districtSearch.setLevel();

// $ExpectType void
districtSearch.setSubdistrict(3);

// $ExpectError
districtSearch.setSubdistrict(4);

districtSearch.on('complete', event => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;
    // $ExpectType District[]
    event.districtList;
});

districtSearch.on('error', event => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});
