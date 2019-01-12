import * as prest from '../preset';

// $ExpectType StationSearch
new AMap.StationSearch();
// $ExpectType StationSearch
new AMap.StationSearch({});
// $ExpectType StationSearch
const stationSearch = new AMap.StationSearch({
    pageIndex: 1,
    pageSize: 10,
    city: '深圳'
});

stationSearch.search('keyword', (status, result) => {
    // $ExpectType "complete" | "error" | "no_data"
    status;
    if (typeof result !== 'string') {
        // $ExpectType string
        result.info;
        // $ExpectType StationInfo[]
        result.stationInfo;
        // $ExpectType CityInfo[] | undefined
        result.cityList;
        // $ExpectType string[] | undefined
        result.keywordList;

        const station = result.stationInfo[0];
        // $ExpectType string
        station.adcode;
        // $ExpectType Busline[]
        station.buslines;
        // $ExpectType string
        station.citycode;
        // $ExpectType string
        station.id;
        // $ExpectType LngLat
        station.location;
        // $ExpectType string
        station.name;

        const busline = station.buslines[0];
        // $ExpectType string
        busline.end_stop;
        // $ExpectType string
        busline.id;
        // $ExpectType LngLat
        busline.location;
        // $ExpectType string
        busline.name;
        // $ExpectType string
        busline.start_stop;
    } else {
        // $ExpectType string
        result;
    }
});

stationSearch.searchById('id', (status, result) => {
    // $ExpectType "complete" | "error" | "no_data"
    status;
    // $ExpectType string | StationSearchResult
    result;
});

// $ExpectType void
stationSearch.setPageIndex(10);
// $ExpectType void
stationSearch.setPageIndex();

// $ExpectType void
stationSearch.setPageSize(10);
// $ExpectType void
stationSearch.setPageSize();

// $ExpectType void
stationSearch.setCity('city');
// $ExpectType void
stationSearch.setCity();

stationSearch.on('complete', event => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;
    // $ExpectType CityInfo[] | undefined
    event.cityList;
    // $ExpectType string[] | undefined
    event.keywordList;
    // $ExpectType StationInfo[]
    event.stationInfo;
});

stationSearch.on('error', event => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});
