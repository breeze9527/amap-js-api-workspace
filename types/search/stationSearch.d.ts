declare namespace AMap {
    interface StationSearchEventMap {
        complete: Event<'complete', StationSearchResult>;
        error: Event<'error', { info: string }>;
    }
    interface StationSearchOptions {
        pageIndex?: number;
        pageSize?: number;
        city?: string;
    }
    interface Busline {
        id: string;
        name: string;
        location: LngLat;
        start_stop: string;
        end_stop: string;
    }
    interface StationInfo {
        id: string;
        name: string;
        location: LngLat;
        adcode: string;
        citycode: string;
        buslines: Busline[];
    }
    interface StationSearchResult {
        info: string;
        stationInfo: StationInfo[];
        keywordList?: string[];
        cityList?: CityInfo[];
    }
    class StationSearch extends EventEmitter {
        constructor(options?: StationSearchOptions);
        searchById(
            id: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: StationSearchResult | string) => void
        ): void;
        search(
            keyword: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: StationSearchResult | string) => void
        ): void;
        setPageIndex(pageIndex?: number): void;
        setPageSize(pageSize?: number): void;
        setCity(city?: string): void;
    }
}
