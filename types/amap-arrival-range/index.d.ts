// TypeScript Version: 2.8

/// <reference types="amap" />

declare namespace AMap {
    namespace ArrivalRange {
        interface EventMap {
            error: Event<'error', { info: string; }>;
        }
        interface SearchOptions {
            policy?: string; // 'BUS' | 'SUBWAY' | 'BUS,SUBWAY' | 'SUBWAY,BUS';
            resultType?: 'polygon' | 'coverage'; // useless
            destination?: LocationValue | LocationValue[];
        }
        interface SearchResult {
            info: string;
            bounds: string[][][][];
            inRange?: boolean[];
            // internal
            infocode: string;
        }
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }

    class ArrivalRange extends EventEmitter {
        search(
            origin: LocationValue,
            time: number,
            callback: (status: ArrivalRange.SearchStatus, result: string | ArrivalRange.SearchResult) => void,
            opts?: ArrivalRange.SearchOptions
        ): void;
    }
}
