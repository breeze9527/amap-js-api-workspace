declare namespace AMap {
    interface RectangleOptions<ExtraData = any> extends PolygonOptions<ExtraData> {
        bounds?: Bounds;
    }
    type RectangleGetOptionsResult<ExtraData = any> = Merge<PolygonGetOptionsResult<ExtraData>, {
        path: LngLat[];
        bounds: Bounds;
        texture: string;
    }>;
    interface RectangleEventMap<I> extends ShapeOverlayEventMap<I> {
        setBounds: Event<'setBounds'>;
    }

    class Rectangle<ExtraData = any> extends Polygon<ExtraData> {
        constructor(options?: RectangleOptions<ExtraData>);
        setBounds(bounds: Bounds, preventEvent?: boolean): void;
        setOptions(options: Partial<RectangleOptions>): void;
    }
}
