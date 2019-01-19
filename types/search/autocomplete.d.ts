declare namespace AMap {
    namespace Autocomplete {
        interface EventMap {
            complete: Event<'complete', SearchResult | { info: string }>;
            error: Event<'error', { info: string }>;
            select: Event<'select', { tip: Tip }>;
            choose: Event<'choose', { tip: Tip }>;
        }
        type DataType = 'all' | 'bus' | 'poi' | 'busline';
        interface Options {
            type?: string;
            city?: string;
            datatype?: DataType;
            citylimit?: boolean;
            input?: string | HTMLInputElement;
            output?: string | HTMLDivElement;
            outPutDirAuto?: boolean;
            // internal
            closeResultOnScroll?: boolean;
            lang?: Lang;
        }
        interface Tip {
            name: string;
            district: string;
            adcode: string;
            address: string;
            city: any[];
            id: string;
            location: LngLat;
            typecode: string;
        }
        interface SearchResult {
            info: string;
            count: number;
            tips: Tip[];
        }
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }
    class Autocomplete extends EventEmitter {
        constructor(options?: Autocomplete.Options);
        search(
            keyword: string,
            callback: (status: Autocomplete.SearchStatus, result: Autocomplete.SearchResult | string) => void
        ): void;
        setType(type?: string): void;
        setCity(city?: string): void;
        setCityLimit(cityLimit: boolean): void;
        setLang(lang?: Lang): void;
        getLang(): Lang | undefined;
    }
}
