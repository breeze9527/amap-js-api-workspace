// TypeScript Version: 2.8

/// <reference types="core" />
/// <reference types="amap-place-search" />

declare namespace AMap {
    namespace TruckDriving {
        interface EventMap {
            error: Event<'error', { info: string }>;
            complete: Event<'complete', { info: string } | SearchResult>;
        }
        interface Options {
            policy?: number;
            size: number;
            width?: number;
            height?: number;
            load?: number;
            weight?: number;
            axlesNum?: number;
            extensions?: 'base' | 'all';
            map?: Map;
            panel?: string | HTMLDivElement;
            hideMarkers?: boolean;
            showTraffic?: boolean;
            isOutline?: boolean;
            outlineColor?: string;
            autoFitView?: boolean;
            province?: string;
            number?: string;
            // internal
            showDir?: boolean;
        }
        interface LngLatPath {
            lnglat: LocationValue;
            pid?: string;
            type?: string;
        }
        interface KeywordPath {
            keyword: string;
            city?: string;
        }
        interface District {
            name: string;
            adcode: string;
        }
        interface City {
            name: string | null;
            citycode: string | null;
            adcode: string;
            districts: District[] | null;
        }
        interface TMC {
            lcode?: string;
            distance: number;
            status: string;
            path: LngLat[];
            polyline: string;
        }
        interface TMCsPath {
            path: LngLat[];
            status: string;
        }
        interface Step {
            start_location: LngLat;
            end_location: LngLat;
            instruction: string;
            orientation: string;
            road: string;
            distance: number;
            tolls: number;
            toll_distance: number;
            toll_road: string;
            time: number;
            path: LngLat[];
            action: string;
            assistant_action: string;
            cities?: City[];
            tmcs?: TMC[];
            tmcsPaths?: TMCsPath[];
        }
        interface Route {
            steps: Step[];
            restriction: 0 | 1;
            distance: number;
            time: number;
            policy: string;
            tolls: number;
            tolls_distance: number;
        }
        interface SearchResultCommon {
            info: string;
            origin: LngLat;
            destination: LngLat;
            routes: Route[];
        }
        interface Poi {
            location: LngLat;
            name: string;
            type: 'start' | 'end' | 'waypoint';
        }
        interface SearchResultExt extends SearchResultCommon {
            start: PlaceSearch.PoiExt;
            end: PlaceSearch.PoiExt;
            originName: string;
            destinationName: string;
            waypoints: Array<PlaceSearch.PoiExt & { isWaypoint: boolean }>;
        }
        interface SearchResultBase extends SearchResultCommon {
            start: Poi;
            end: Poi;
            waypoints: Array<Poi & { isWaypoint: boolean }>;
        }
        type SearchStatus = 'complete' | 'no_data' | 'error';
        type SearchResult = SearchResultBase | SearchResultExt;
    }

    class TruckDriving extends EventEmitter {
        constructor(options: TruckDriving.Options);
        search(
            path: TruckDriving.LngLatPath[],
            callback?: (status: TruckDriving.SearchStatus, result: TruckDriving.SearchResultBase | string) => void
        ): void;
        search(
            path: TruckDriving.KeywordPath[],
            callback?: (status: TruckDriving.SearchStatus, result: TruckDriving.SearchResultExt | string) => void
        ): void;
        clear(): void;
        setProvinceAndNumber(province: string, number: string): void;

        // internal
        setPolicy(policy?: number): void;
        open(): void;
        close(): void;
    }
}
