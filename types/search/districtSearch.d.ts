declare namespace AMap {
    interface DistrictSearchEventMap {
        error: Event<'error', { info: string; }>;
        complete: Event<'complete', DistrictSearchResult>;
    }
    type DistrictLevel = 'country' | 'province' | 'city' | 'district' | 'biz_area';
    interface DistrictSearchOptions {
        level?: DistrictLevel;
        showbiz?: boolean;
        extensions?: 'base' | 'all';
        subdistrict?: 0 | 1 | 2 | 3;
    }
    interface District {
        name: string;
        center: LngLat;
        citycode: string;
        adcode: string;
        level: DistrictLevel;
        boundaries?: LngLat[][];
        districtList?: District[];
    }
    interface DistrictSearchResult {
        info: string;
        districtList: District[];
    }
    class DistrictSearch extends EventEmitter {
        constructor(options?: DistrictSearchOptions);
        search(
            keyword: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: DistrictSearchResult | string) => void
        ): void;
        setLevel(level?: DistrictLevel): void;
        setSubdistrict(district?: 0 | 1 | 2 | 3): void;
        // internal
        setExtensions(extensions?: boolean): void;
    }
}
