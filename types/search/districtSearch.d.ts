declare namespace AMap {
    namespace DistrictSearch {
        interface EventMap {
            error: Event<'error', { info: string; }>;
            complete: Event<'complete', SearchResult>;
        }
        type Level = 'country' | 'province' | 'city' | 'district' | 'biz_area';
        interface Options {
            level?: Level;
            showbiz?: boolean;
            extensions?: 'base' | 'all';
            subdistrict?: 0 | 1 | 2 | 3;
        }
        interface District {
            name: string;
            center: LngLat;
            citycode: string;
            adcode: string;
            level: Level;
            boundaries?: LngLat[][];
            districtList?: District[];
        }
        interface SearchResult {
            info: string;
            districtList: District[];
        }
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }
    class DistrictSearch extends EventEmitter {
        constructor(options?: DistrictSearch.Options);
        search(
            keyword: string,
            callback: (status: DistrictSearch.SearchStatus, result: DistrictSearch.SearchResult | string) => void
        ): void;
        setLevel(level?: DistrictSearch.Level): void;
        setSubdistrict(district?: 0 | 1 | 2 | 3): void;
        // internal
        setExtensions(extensions?: boolean): void;
    }
}
