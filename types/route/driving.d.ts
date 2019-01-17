declare namespace AMap {
    interface DrivingEventMap {
        complete: Event<'complete', DrivingResult | { info: string }>;
        error: Event<'error', { info: string }>;
    }

    enum DrivingPolicy {
        LEAST_TIME = 0,
        LEAST_FEE = 1,
        LEAST_DISTANCE = 2,
        REAL_TRAFFIC = 4
    }
    interface DrivingOptions {
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
    }
    interface DrivingSearchOptions {
        waypoints?: LocationValue[];
    }
    interface DrivingSearchPoint {
        keyword: string;
        city?: string;
    }
    interface TMCsPath {
        path: LngLat[];
        status: string;
    }
    interface DriveStepBase {
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
    }
    interface ViaCityDistrict {
        name: string;
        adcode: string;
    }
    interface ViaCity {
        name: string;
        citycode: string;
        adcode: string;
        districts: ViaCityDistrict[];
    }
    interface TMC {
        lcode: string | never[];
        distance: number;
        status: string;
        path: LngLat[];
        polyline: string;
    }
    interface DriveStepExt extends DriveStepBase {
        cities: ViaCity[];
        tmcs: TMC[];
        tmcsPaths: TMCsPath[];
    }
    interface DriveRoute {
        distance: number;
        time: number;
        policy: string;
        tolls: number;
        tolls_distance: number;
        steps: Array<DriveStepBase | DriveStepExt>;
        restriction: 0 | 1;
    }
    interface DrivePoi {
        location: LngLat;
        name: string;
        type: 'start' | 'end' | 'waypoint';
    }
    interface DrivingResultCommon {
        info: string;
        origin: LngLat;
        destination: LngLat;
        routes: DriveRoute[];
        taxi_cost?: number;
    }
    interface DrivingResultBase extends DrivingResultCommon {
        start: DrivePoi;
        end: DrivePoi;
        waypoints: Array<DrivePoi & { isWaypoint: boolean }>;
    }
    interface DrivingResultExt extends DrivingResultCommon {
        start: PlaceSearchPoiExt;
        end: PlaceSearchPoiExt;
        originName: string;
        destinationName: string;
        waypoints: Array<PlaceSearchPoiExt & { isWaypoint: boolean }>;
    }
    type DrivingResult = DrivingResultBase | DrivingResultExt;
    class Driving extends EventEmitter {
        constructor(options?: DrivingOptions);
        search(
            origin: LocationValue,
            destination: LocationValue,
            opts?: DrivingSearchOptions,
            callback?: (status: 'error' | 'no_data' | 'complete', result: string | DrivingResultBase) => void
        ): void;
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback: (status: 'error' | 'no_data' | 'complete', result: string | DrivingResultBase) => void
        ): void;
        search(
            points: DrivingSearchPoint[],
            callback?: (status: 'error' | 'no_data' | 'complete', result: string | DrivingResultExt) => void
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
