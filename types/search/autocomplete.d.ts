declare namespace AMap {
    interface AutocompleteEventMap {
        complete: Event<'complete', AutocompleteResult | { info: string }>;
        error: Event<'error', { info: string }>;
        select: Event<'select', { tip: Tip }>;
        choose: Event<'choose', { tip: Tip }>;
    }
    interface AutocompleteOptions {
        type?: string;
        city?: string;
        datatype?: 'all' | 'bus' | 'poi' | 'busline';
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
    interface AutocompleteResult {
        info: string;
        count: number;
        tips: Tip[];
    }
    class Autocomplete extends EventEmitter {
        constructor(options?: AutocompleteOptions);
        search(
            keyword: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: AutocompleteResult | string) => void
        ): void;
        setType(type?: string): void;
        setCity(city?: string): void;
        setCityLimit(cityLimit: boolean): void;
        setLang(lang?: Lang): void;
        getLang(): Lang | undefined;
    }
}
