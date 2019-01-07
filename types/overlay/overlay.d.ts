declare namespace AMap {
    interface OverlayEventMap<I> {
        touchstart: MapsEvent<'touchstart', I>;
        touchmove: MapsEvent<'touchmove', I>;
        touchend: MapsEvent<'touchend', I>;
        click: MapsEvent<'click', I>;
        rightclick: MapsEvent<'rightclick', I>;
        dblclick: MapsEvent<'dblclick', I>;
        mousemove: MapsEvent<'mousemove', I>;
        mouseover: MapsEvent<'mouseover', I>;
        mousedown: MapsEvent<'mousedown', I>;
        mouseup: MapsEvent<'mouseup', I>;
    }

    interface OverlayOptions<ExtraData = any> {
        map?: Map;
        cursor?: string;
        extData?: ExtraData;
        bubble?: boolean;
        clickable?: boolean;
        draggable?: boolean;
    }

    abstract class Overlay<ExtraData = any> extends EventEmitter {
        constructor(options?: OverlayOptions);
        show(): void;
        hide(): void;
        getMap(): Map | null;
        setMap(map: Map | null): void;
        setExtData(extData: ExtraData): void;
        getExtData(): ExtraData | {};

        // internal
        setHeight(height?: number | string): void;
        getHeight(): number | string;
    }

    interface ShapeOverlayEventMap<I> extends OverlayEventMap<I> {
        show: Event<'show', { target: I }>;
        hide: Event<'hide', { target: I }>;
        options: Event<'options'>;
        change: Event<'change', { target: I }>;
    }

    interface ShapeOverlayGetOptionsResult<ExtraData = any> {
        map: Map;
        zIndex: number;
        strokeColor: string;
        strokeOpacity: number;
        strokeWeight: number;
        strokeStyle: StrokeStyle;
        strokeDasharray: number[];
        extData: ExtraData | {};
        bubble: boolean;
        clickable: boolean;
    }

    abstract class ShapeOverlay<ExtraData = any> extends Overlay<ExtraData> {
        abstract setOptions(options: {}): void;
        abstract getOptions(): {};
        getzIndex(): number;
        setzIndex(zIndex: number): void;
        getVisible(): boolean;
        setDraggable(draggable: boolean): void;
    }

    type StrokeLineJoin = 'miter' | 'round' | 'bevel';
    type StrokeLineCap = 'butt' | 'round' | 'square';
    type StrokeStyle = 'dashed' | 'solid';

    interface PathOverlayOptions<ExtraData = any> extends OverlayOptions<ExtraData> {
        visible?: boolean;
        zIndex?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        strokeStyle?: StrokeStyle;
        strokeDasharray?: number[];
        lineJoin?: StrokeLineJoin;
        lineCap?: StrokeLineCap;
    }

    abstract class PathOverlay<ExtraData = any> extends ShapeOverlay<ExtraData> {
        constructor(options?: PathOverlayOptions<ExtraData>);
        getBounds(): Bounds | (this extends Rectangle ? undefined : null);
    }
}
