// TypeScript Version: 2.8

/// <reference types="amap" />

declare namespace AMap {
    namespace LineSearch {
        interface EventMap {
            complete: Event<'complete', SearchResult>;
            error: Event<'error', { info: string }>;
        }
        interface Options {
            pageIndex?: number;
            pageSize?: number;
            city?: string;
            extensions?: 'base' | 'all';
        }
        interface LineInfoBase {
            id: string;
            name: string;
            path: LngLat[];
            citycode: string;
            type: string;
            start_stop: string;
            end_stop: string;
        }
        interface BusStop {
            id: string;
            location: LngLat;
            name: string;
            sequence: number;
        }
        interface LineInfoExt extends LineInfoBase {
            stime: string;
            etime: string;
            basic_price: string;
            total_price: string;
            via_stops: BusStop[];
            distance: string; // is string actually
            bounds: Bounds;
            company: string;
        }
        type LineInfo = LineInfoBase | LineInfoExt;
        interface SearchResult {
            info: string;
            lineInfo: LineInfo[];
        }
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }
    class LineSearch extends EventEmitter {
        constructor(options?: LineSearch.Options);
        searchById(
            id: string,
            callback: (status: LineSearch.SearchStatus, result: string | LineSearch.SearchResult) => void
        ): void;
        search(
            keyword: string,
            callback: (status: LineSearch.SearchStatus, result: string | LineSearch.SearchResult) => void
        ): void;
        setPageIndex(pageIndex?: number): void;
        setPageSize(pageSize?: number): void;
        setCity(city?: string): void;
    }
}
