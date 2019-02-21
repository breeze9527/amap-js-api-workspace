// TypeScript Version: 2.8

/// <reference types="amap" />

declare namespace AMap {
    namespace StationSearch {
        interface EventMap {
            complete: Event<'complete', SearchResult>;
            error: Event<'error', { info: string }>;
        }
        interface Options {
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
        interface CityInfo {
            name: string;
            citycode: string;
            adcode: string;
            count: number;
        }
        interface SearchResult {
            info: string;
            stationInfo: StationInfo[];
            keywordList?: string[];
            cityList?: CityInfo[];
        }
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }
    class StationSearch extends EventEmitter {
        constructor(options?: StationSearch.Options);
        searchById(
            id: string,
            callback: (status: StationSearch.SearchStatus, result: StationSearch.SearchResult | string) => void
        ): void;
        search(
            keyword: string,
            callback: (status: StationSearch.SearchStatus, result: StationSearch.SearchResult | string) => void
        ): void;
        setPageIndex(pageIndex?: number): void;
        setPageSize(pageSize?: number): void;
        setCity(city?: string): void;
    }
}
