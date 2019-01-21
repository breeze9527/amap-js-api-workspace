declare namespace AMap {
    enum RidingPolicy {
        DEFAULT = 0,
        RECOMMENDED = 1,
        FASTEST = 2
    }
    namespace Riding {
        interface EventMap {
            complete: Event<'complete', SearchResult>;
            error: Event<'error', { info: string; }>;
        }
        interface Options {
            map?: Map;
            policy?: RidingPolicy;
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
        interface Ride {
            start_location: LngLat;
            end_location: LngLat;
            instruction: string;
            road: string;
            orientation: string;
            distance: number;
            time: number;
            path: LngLat[];
            action: string;
        }
        interface Route {
            distance: number;
            time: number;
            rides: Ride[];
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
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }

    class Riding extends EventEmitter {
        constructor(options?: Riding.Options);
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Riding.SearchStatus, result: Riding.SearchResultBase | string) => void
        ): void;
        search(
            point: Riding.SearchPoint[],
            callback?: (status: Riding.SearchStatus, result: Riding.SearchResultExt | string) => void
        ): void;
        clear(): void;
        // internal
        setPolicy(policy: RidingPolicy): void;
        open(): void;
        close(): void;
    }
}
