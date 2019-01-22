declare namespace AMap {
    namespace DragRoute {
        interface EventMap<I = DragRoute> {
            addway: Event<'addway', { lnglat: LngLat | undefined; target: I }>;
            complete: Event<'complete', { target: I, data: Driving.SearchResultBase }>;
            search: Event<'search', { target: I, data: Driving.SearchResultBase }>;
        }
        interface Options<PO = any, SO = any, MO = any, EO = any> {
            polyOptions?: Polyline.Options<PO>;
            startMarkerOptions?: Marker.Options<SO>;
            midMarkerOptions?: Marker.Options<MO>;
            endMarkerOptions?: Marker.Options<EO>;
            showTraffic?: boolean;
            // internal
            showDir?: boolean;
            province?: string;
            number?: string;
        }
    }

    class DragRoute<PO = any, SO = any, MO = any, EO = any> extends EventEmitter {
        constructor(map: Map, path: LocationValue[], policy?: DrivingPolicy, opts?: DragRoute.Options);
        search(): void;
        getWays(): LngLat[];
        getRoute(): LngLat[];
        destory(): void;
        // internal
        setAvoidPolygons(path: LocationValue[][]): void;
        clearAvoidPolygons(): void;
        getAvoidPolygons(): LngLat[];
        setAvoidRoad(road: string): void;
        clearAvoidRoad(): void;
        getAvoidRoad(): string | undefined;
        setProvinceAndNumber(province: string, number: string): void;
        setPolicy(policy?: DrivingPolicy): void;
        showRoute(index: number): void;
        close(): void;
        open(): void;
        getPolyline(): Polyline<PO>;
        getStart(): Marker<SO>;
        getEnd(): Marker<EO>;
        getPoint(): Array<Marker<MO>>;
        getRoutes(): LngLat[][];
    }
}
