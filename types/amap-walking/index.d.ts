// TypeScript Version: 2.8

/// <reference types="amap" />
/// <reference types="amap-place-search" />

declare namespace AMap {
    namespace Walking {
        interface EventMap {
            error: Event<'error', { info: string }>;
            complete: Event<'complete', SearchResult>;
        }
        interface Options {
            map?: Map;
            panel?: string | HTMLElement;
            hideMarkers?: boolean;
            isOutline?: boolean;
            outlineColor?: string;
            autoFitView?: boolean;
            // internal
            showDir?: boolean;
        }
        interface SearchPoint {
            keyword: string;
        }
        interface Step {
            start_location: LngLat;
            end_location: LngLat;
            instruction: string;
            distance: number;
            time: number;
            path: LngLat[];
            action: string;
            assistant_action: string;
            orientation: string;
            road: string;
        }
        interface Route {
            distance: number;
            time: number;
            steps: Step[];
        }
        interface SearchResultCommon {
            info: string;
            origin: LngLat;
            destination: LngLat;
            count: number;
            routes: Route[];
        }
        interface Poi {
            location: LngLat;
            name: string;
            type: 'start' | 'end';
        }
        interface SearchResultBase extends SearchResultCommon {
            start?: Poi;
            end?: Poi;
        }
        interface SearchResultExt extends SearchResultCommon {
            start: PlaceSearch.PoiExt;
            end: PlaceSearch.PoiExt;
            originName: string;
            destinationName: string;
        }
        type SearchResult = SearchResultBase | SearchResultExt;
        type SearchStatus = 'complete' | 'no_data' | 'error';
    }

    class Walking extends EventEmitter {
        constructor(options?: Walking.Options);
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Walking.SearchStatus, result: string | Walking.SearchResultBase) => void
        ): void;
        search(
            point: Walking.SearchPoint[],
            callback?: (status: Walking.SearchStatus, result: string | Walking.SearchResultExt) => void
        ): void;
        clear(): void;
        // internal
        open(): void;
        close(): void;
        searchOnAMAP(obj: { origin: LocationValue; originName?: string; destination: LocationValue; destinationName?: string; }): void;
    }
}
