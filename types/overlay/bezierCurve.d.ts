declare namespace AMap {
    type BezierCurveOptions<ExtraData = any> = Merge<PolylineOptions<ExtraData>, {
        // internal
        path: Array<Array<number | string | Array<string | number>>>;
        tolerance?: number;
        interpolateNumLimit?: [number | number];
    }>;

    interface BezierCurveGetOptionsResult<ExtraData = any> extends PolylineGetOptionsResult<ExtraData> {
        path: Array<LngLat & { controlPoints: LngLat[] }>;
    }

    class BezierCurve<ExtraData = any> extends Polyline<ExtraData> {
        constructor(options: BezierCurveOptions<ExtraData>);
        getOptions(): Partial<BezierCurveGetOptionsResult<ExtraData>>;
        // internal
        getInterpolateLngLats(): LngLat[];
        getSerializedPath(): number[][];
    }
}
