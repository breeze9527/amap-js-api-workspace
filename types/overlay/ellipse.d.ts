declare namespace AMap {
    interface EllipseOptions<ExtraData = any> extends PolygonOptions<ExtraData> {
        center?: LocationValue;
        radius?: [number, number];
    }

    type EllipseGetOptionsResult<ExtraData = any> = Merge<CircleGetOptionsResult<ExtraData>, {
        radius: [number, number];
    }>;

    interface EllipseEventMap<I = Ellipse> extends ShapeOverlayEventMap<I> {
        setPath: Event<'setPath'>;
        setCenter: Event<'setCenter'>;
    }

    class Ellipse<ExtraData = any> extends Polygon<ExtraData> {
        constructor(options?: EllipseOptions<ExtraData>);
        getCenter(): LngLat | undefined;
        setCenter(center: LocationValue, preventEvent?: boolean): void;
        setOptions(options: EllipseOptions<ExtraData>): void;

        // internal
        setRadius(radius: [number, number], preventEvent?: boolean): void;
        getRadius(): [number, number];
    }
}
