// TypeScript Version: 2.8

/// <reference types="amap" />
/// <reference types="amap-place-search" />

declare namespace AMap {
    enum TransferPolicy {
        LEAST_TIME = 0,
        LEAST_FEE = 1,
        LEAST_TRANSFER = 2,
        LEAST_WALK = 3,
        MOST_COMFORT = 4,
        NO_SUBWAY = 5
    }

    namespace Transfer {
        interface EventMap {
            error: Event<'error', { info: string }>;
            complete: Event<'complete', SearchResult>;
        }
        interface Options {
            city: string;
            policy?: TransferPolicy;
            nightflag?: boolean;
            cityd?: string;
            extensions?: 'all' | 'base';
            map?: Map;
            panel?: string;
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
        interface WalkStep {
            instruction: string;
            road: string;
            distance: number;
            time: number;
            path: LngLat[];
            action: string;
            assist_action: string;
        }
        interface WalkDetails {
            origin: LngLat;
            destination: LngLat;
            path: LngLat[];
            steps: WalkStep[];
        }
        interface WalkSegment {
            time: number;
            instruction: string;
            transit_mode: 'WALK';
            distance: number;
            transit: WalkDetails;
        }
        interface TaxiDetails {
            time: number;
            distance: number;
            origin: LngLat;
            destination: LngLat;
            sname: string;
            tname: string;
        }
        interface TaxiSegment {
            transit_mode: 'TAXI';
            instruction: string;
            distance: number;
            time: number;
            transit: TaxiDetails;
        }
        interface TransitStop {
            name: string;
            id: string;
            location: LngLat;
            segment?: TransitSegment;
        }
        interface TransitLine {
            name: string;
            id: string;
            type: string;
            stime: string | never[];
            etime: string | never[];
        }
        interface SubwayEntrance {
            name: string;
            location: LngLat;
        }
        interface TransitDetails {
            on_station: TransitStop;
            off_station: TransitStop;
            path: LngLat[];
            via_num: number;
            via_stops: TransitStop[];
            lines: TransitLine[];
            entrance?: SubwayEntrance;
            exit?: SubwayEntrance;
        }
        interface TransitSegment {
            instruction: string;
            transit_mode: 'SUBWAY' | 'METRO_RAIL' | 'BUS';
            time: number;
            transit: TransitDetails;
            distance: number;
        }
        interface RailwayStop {
            adcode: string;
            id: string;
            location: LngLat;
            name: string;
            time: number;
            wait?: number;
            segment?: RailwaySegment;
        }
        interface RailwaySpace {
            type: string | never[];
            cost: number;
        }
        interface RailwayDetailsBase {
            id: string;
            name: string;
            trip: string;
            type: string;
            distance: number;
            time: number;
            departure_stop: RailwayStop;
            arrival_stop: RailwayStop;
            spaces: RailwaySpace[];
        }
        interface RailwayAlter {
            id: string;
            name: string;
        }
        interface RailwayViaStop {
            id: string;
            location: LngLat;
            name: string;
            time: number;
            wait: number;
        }
        interface RailwayDetailsExt extends RailwayDetailsBase {
            via_stops: RailwayViaStop[];
            via_num: number;
            alters: RailwayAlter[];
        }
        type RailwayDetails = RailwayDetailsBase | RailwayDetailsExt;
        interface RailwaySegment {
            instruction: string;
            transit_mode: 'RAILWAY';
            time: number;
            distance: number;
            transit: RailwayDetails;
        }
        type Segment = WalkSegment | TaxiSegment | TransitSegment | RailwaySegment;
        interface Plan {
            cost: number;
            time: number;
            nightLine: boolean;
            segments: Segment[];
            transit_distance: number;
            railway_distance: number;
            walking_distance: number;
            taxi_distance: number;
            distance: number;
            path: LngLat[];
        }
        interface Poi {
            location: LngLat;
            name: string;
            type: 'start' | 'end';
        }
        interface SearchResultCommon {
            info: string;
            origin: LngLat;
            destination: LngLat;
            taxi_cost: number;
            plans: Plan[];
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

    class Transfer extends EventEmitter {
        constructor(options: Transfer.Options);
        search(
            origin: LocationValue,
            destination: LocationValue,
            callback?: (status: Transfer.SearchStatus, result: string | Transfer.SearchResultBase) => void
        ): void;
        search(
            path: [Transfer.SearchPoint, Transfer.SearchPoint],
            callback?: (status: Transfer.SearchStatus, result: string | Transfer.SearchResultExt) => void
        ): void;
        setPolicy(policy?: TransferPolicy): void;
        setCity(city?: string): void;
        setCityd(city?: string): void;
        leaveAt(time?: string, date?: string): void;
        clear(): void;
        searchOnAMAP(obj: {
            origin: LocationValue,
            originName?: string,
            destination: LocationValue,
            destinationName?: string
        }): void;
        // internal
        open(): void;
        close(): void;
    }
}
