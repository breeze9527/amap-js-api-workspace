type ReferOverlayOptions<O> =
    O extends AMap.BezierCurve ? AMap.BezierCurveOptions
    : O extends AMap.Polyline ? AMap.PolylineOptions<O>
    : O extends AMap.Circle ? AMap.CircleOptions
    : O extends AMap.Ellipse ? AMap.EllipseOptions
    : O extends AMap.Polygon ? AMap.PolygonOptions
    : O extends AMap.Text ? AMap.TextOptions
    : O extends AMap.Marker ? AMap.MarkerOptions
    : O extends AMap.Rectangle ? AMap.RectangleOptions
    : any;

declare namespace AMap {
    class OverlayGroup<O extends Overlay = Overlay, ExtraData = any> extends Overlay<ExtraData> {
        constructor(overlays?: O | O[]);
        addOverlay(overlay: O | O[]): this;
        addOverlays(overlay: O | O[]): this;
        getOverlays(): O[];
        hasOverlay(overlay: O | ((this: null, item: O, index: number, list: O[]) => boolean)): boolean;
        removeOverlay(overlay: O | O[]): this;
        removeOverlays(overlay: O | O[]): this;
        clearOverlays(): this;
        eachOverlay<C = O>(iterator: (this: C, overlay: O, index: number, overlays: O[]) => void, context?: C): this;
        setMap(map: null | Map): this;
        setOptions(options: ReferOverlayOptions<O>): this;
        show(): this;
        hide(): this;

        getOverlay(finder: ((this: null, item: O, index: number, list: O[]) => boolean) | O): O | null;
    }
}
