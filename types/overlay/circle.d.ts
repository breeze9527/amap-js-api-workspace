declare namespace AMap {
    interface CircleOptions<ExtraData = any> {
        map?: Map;
        zIndex?: number;
        center?: LocationValue;
        bubble?: boolean;
        cursor?: string;
        radius?: number;
        strokeColor?: string;
        strokeOpcity?: number;
        strokeWeight?: number;
        fillColor?: string;
        fillOpacity?: number;
        strokeStyle?: StrokeStyle;
        extData?: ExtraData;
        strokeDasharray?: number[];

        // internal
        visible?: boolean;
        unit?: 'meter' | 'px'; // 'might be typo'
    }

    type CircleGetOptionsResult<ExtraData = any> = Merge<PolygonGetOptionsResult<ExtraData>, {
        path: LngLat[];
        center: LngLat;
        radius: number;
    }>;

    interface CircleEventMap<I> extends ShapeOverlayEventMap<I> {
        setCenter: Event<'setCenter'>;
        setRadius: Event<'setRadius'>;
    }

    class Circle<ExtraData = any> extends ShapeOverlay<ExtraData> {
        constructor(options?: CircleOptions<ExtraData>);
        setCenter(center: LocationValue, preventEvent?: boolean): void;
        getCenter(): LngLat | undefined;
        getBounds(): Bounds | null;
        setRadius(radius: number, preventEvent?: boolean): void;
        getRadius(): number;
        setOptions(options?: CircleOptions<ExtraData>): void;
        getOptions(): Partial<CircleGetOptionsResult<ExtraData>>;
        contains(point: LocationValue): boolean;
        // internal
        getPath(count?: number): LngLat[];
    }
}
