declare namespace AMap {
    interface PolylineEventMap<I = Polyline> extends PathOverlayEventMap<I> { }
    interface PolylineGetOptionsResult<ExtraData = any> extends ShapeOverlayGetOptionsResult<ExtraData> {
        isOutline: boolean;
        outlineColor: string;
        geodesic: boolean;
        path: LngLat[];
        lineJoin: StrokeLineJoin;
        lineCap: StrokeLineCap;
        borderWeight: number;
        showDir: boolean;
        dirColor: string;
        dirImg: string;
    }

    interface PolylineOptions<ExtraData = any> extends PathOverlayOptions<ExtraData> {
        isOutline?: boolean;
        outlineColor?: string;
        geodesic?: boolean;
        dirColor?: string;
        borderWeight?: number;
        showDir?: boolean;
        // internal
        path?: LocationValue[];
    }

    class Polyline<ExtraData = any> extends PathOverlay<ExtraData> {
        constructor(options?: BezierCurveOptions<ExtraData> | PolylineOptions<ExtraData>);
        setPath(
            path: this extends Omit<BezierCurve, keyof Polyline> ?
                Array<Array<number | string | Array<string | number>>>
                : LocationValue[]
        ): void;
        getPath(): this extends Omit<BezierCurve, keyof Polyline> ?
            Array<LngLat & { controlPoints: LngLat[] }>
            : LngLat[];
        getLength(): number;
        setOptions(options: this extends Omit<BezierCurve, keyof Polyline> ?
            Partial<BezierCurveOptions<ExtraData>>
            : PolylineOptions<ExtraData>
        ): void;
        getOptions(): Partial<PolylineGetOptionsResult<ExtraData>>;
    }
}
