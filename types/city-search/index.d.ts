// TypeScript Version: 2.8

/// <reference types="core" />

declare namespace AMap {
    namespace CitySearch {
        interface EventMap {
            complete: Event<'complete', SearchResult>;
            error: Event<'error', { info: string }>;
        }
        interface SearchResult {
            city: string;
            rectangle: string;
            bounds: Bounds;
            info: string;
            adcode: string;
            infocode: string;
            province: string;
            status: string;
        }
        type SearchStatus = 'error' | 'complete' | 'no_data';
    }
    class CitySearch extends EventEmitter {
        getLocalCity(callback: (status: CitySearch.SearchStatus, result: CitySearch.SearchResult | string) => void): void;
        getCityByIp(
            ip: string,
            callback: (status: CitySearch.SearchStatus, result: CitySearch.SearchResult | string) => void
        ): void;
    }
}
