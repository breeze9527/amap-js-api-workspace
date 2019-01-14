declare namespace AMap {
    interface LineSearchEventMap {
        complete: Event<'complete', LineSearchResult>;
        error: Event<'error', { info: string }>;
    }
    interface LineSearchOptions {
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
    interface LineSearchResult {
        info: string;
        lineInfo: Array<LineInfoBase | LineInfoExt>;
    }
    class LineSearch extends EventEmitter {
        constructor(options?: LineSearchOptions);
        searchById(
            id: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: string | LineSearchResult) => void
        ): void;
        search(
            keyword: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: string | LineSearchResult) => void
        ): void;
        setPageIndex(pageIndex?: number): void;
        setPageSize(pageSize?: number): void;
        setCity(city?: string): void;
    }
}
