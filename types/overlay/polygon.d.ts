declare namespace AMap {
    interface PolygonOptions<ExtraData = any> extends PathOverlayOptions<ExtraData> {
        path?: LocationValue[] | LocationValue[][];
        fillColor?: string;
        fillOpacity?: number;
    }

    interface PolygonGetOptionsResult<ExtraData = any> extends ShapeOverlayGetOptionsResult<ExtraData> {
        fillColor: string;
        fillOpacity: number;
        path: LngLat[] | LngLat[][];
        lineJoin: StrokeLineJoin;
        texture: string;
    }

    class Polygon<ExtraData = any> extends PathOverlay<ExtraData> {
        constructor(options?: PolygonOptions<ExtraData>);
        setPath(path: LocationValue[] | LocationValue[][]): void;
        getPath(): LngLat[] | LngLat[][];
        setOptions(options: PolygonOptions<ExtraData>): void;
        getOptions(): Partial<
            this extends Omit<Ellipse, keyof Polygon> ? EllipseGetOptionsResult<ExtraData> :
            this extends Omit<Rectangle, keyof Polygon> ? RectangleGetOptionsResult<ExtraData> :
            PolygonGetOptionsResult<ExtraData>
        >;
        getArea(): number;
        contains(point: LocationValue): boolean;
    }
}
