declare namespace AMap {
    enum DrivingPolicy {
        LEAST_TIME = 0,
        LEAST_FEE = 1,
        LEAST_DISTANCE = 2,
        REAL_TRAFFIC = 4,
        // form DragRoute
        MULTI_POLICIES = 5,
        HIGHWAY = 6,
        FEE_HIGHWAY = 7,
        FEE_TRAFFIC = 8,
        TRAFFIC_HIGHWAY = 9
    }
    namespace Driving {
        interface EventMap {
            complete: Event<'complete', SearchResult | { info: string }>;
            error: Event<'error', { info: string }>;
        }
        interface Options {
            policy?: DrivingPolicy;
            extensions?: 'base' | 'all';
            ferry?: boolean;
            map?: Map;
            panel?: string | HTMLElement;
            hideMarkers?: boolean;
            showTraffic?: boolean;
            province?: string;
            number?: string;
            isOutline?: boolean;
            outlineColor?: string;
            autoFitView?: boolean;
            // internal
            showDir?: boolean;
        }
        interface Options {
            waypoints?: LocationValue[];
        }
        interface SearchPoint {
            keyword: string;
            city?: string;
        }
        interface TMCsPath {
            path: LngLat[];
            status: string;
        }
        interface Step {
            start_location: LngLat;
            end_location: LngLat;
            instruction: string;
            action: string;
            assistant_action: string;
            orientation: string;
            road: string;
            distance: number;
            tolls: number;
            toll_distance: number;
            toll_road: string;
            time: number;
            path: LngLat[];
            cities?: City[];
            tmcs?: TMC[];
            tmcsPaths?: TMCsPath[];
        }
        interface District {
            name: string;
            adcode: string;
        }
        interface City {
            name: string;
            citycode: string;
            adcode: string;
            districts: District[];
        }
        interface TMC {
            lcode: string | never[];
            distance: number;
            status: string;
            path: LngLat[];
            polyline: string;
        }
        interface Route {
            distance: number;
            time: number;
            policy: string;
            tolls: number;
            tolls_distance: number;
            steps: Step[];
            restriction: 0 | 1;
        }
        interface Poi {
            location: LngLat;
            name: string;
            type: 'start' | 'end' | 'waypoint';
        }
        interface SearchResultCommon {
            info: string;
            origin: LngLat;
            destination: LngLat;
            routes: Route[];
            taxi_cost?: number;
        }
        interface SearchResultBase extends SearchResultCommon {
            start: Poi;
            end: Poi;
            waypoints: Array<Poi & { isWaypoint: boolean }>;
        }
        interface SearchResultExt extends SearchResultCommon {
            start: PlaceSearch.PoiExt;
            end: PlaceSearch.PoiExt;
            originName: string;
            destinationName: string;
            waypoints: Array<PlaceSearch.PoiExt & { isWaypoint: boolean }>;
        }
        type SearchResult = SearchResultBase | SearchResultExt;
        type SearchStatus = 'error' | 'no_data' | 'complete';
    }
    class Driving extends EventEmitter {
        constructor(options?: Driving.Options);
        search(
            origin: LocationValue,
            destination: LocationValue,
            opts?: Driving.Options,
            callback?: (status: Driving.SearchStatus, result: string | Driving.SearchResultBase) => void
        ): void;
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Driving.SearchStatus, result: string | Driving.SearchResultBase) => void
        ): void;
        search(
            points: Driving.SearchPoint[],
            callback?: (status: Driving.SearchStatus, result: string | Driving.SearchResultExt) => void
        ): void;
        setPolicy(policy?: DrivingPolicy): void;
        setAvoidPolygons(path: LocationValue[][]): void;
        setAvoidRoad(road: string): void;
        clearAvoidRoad(): void;
        clearAvoidPolygons(): void;
        getAvoidPolygons(): LngLat[];
        getAvoidRoad(): string | undefined;
        clear(): void;
        searchOnAMAP(obj: { origin: LocationValue, originName?: string, destination: LocationValue, destinationName?: string }): void;
        setProvinceAndNumber(province: string, number: string): void;

        // internal
        open(): void;
        close(): void;
    }
}
