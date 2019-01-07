declare namespace AMap {
    interface MarkerEventMap<I extends EventEmitter> {
        click: MapsEvent<'click', I>;
        dblclick: MapsEvent<'dblclick', I>;
        rightclick: MapsEvent<'rightclick', I>;
        mousemove: MapsEvent<'mousemove', I>;
        mouseover: MapsEvent<'mouseover', I>;
        mouseout: MapsEvent<'mouseout', I>;
        mousedown: MapsEvent<'mousedown', I>;
        mouseup: MapsEvent<'mouseup', I>;
        dragstart: MapsEvent<'dragstart', I>;
        dragging: MapsEvent<'dragging', I>;
        dragend: MapsEvent<'dragend', I>;
        moving: MovingEvent;
        moveend: Event<'moveend'>;
        movealong: Event<'movealong'>;
        touchstart: MapsEvent<'touchstart', I>;
        touchmove: MapsEvent<'touchmove', I>;
        touchend: MapsEvent<'touchend', I>;
    }

    type MarkerAnimationName = 'AMAP_ANIMATION_NONE' | 'AMAP_ANIMATION_DROP' | 'AMAP_ANIMATION_BOUNCE';

    interface MarkerLabel {
        content?: string;
        offset?: Pixel;
    }

    interface MarkerOptions<ExtraData = any> extends OverlayOptions<ExtraData> {
        position?: LocationValue;
        offset?: Pixel;
        icon?: string; // | Icon; // TODO
        content?: string | HTMLElement;
        topWhenClick?: boolean;
        bubble?: boolean;
        draggable?: boolean;
        raiseOnDrag?: boolean;
        cursor?: string;
        visible?: boolean;
        zIndex?: number;
        angle?: number;
        autoRotation?: boolean;
        animation?: MarkerAnimationName;
        shadow?: Icon | string;
        title?: string;
        shape?: MarkerShape;
        label?: MarkerLabel;

        // internal
        topWhenMouseOver?: boolean;
        height?: number; // TODO
    }

    class Marker<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: MarkerOptions<ExtraData>);
        markOnAMAP(obj?: { name?: string, position?: LocationValue }): void;
        getOffset(): Pixel;
        setOffset(offset: Pixel): void;
        setAnimation(animate: MarkerAnimationName, prevent?: boolean): void;
        getAnimation(): MarkerAnimationName;
        setClickable(cilckable: boolean): void;
        getClickable(): boolean;
        getPosition(): LngLat | undefined;
        setPosition(position: LocationValue): void;
        setAngle(angle: number): void;
        setLabel(label?: MarkerLabel): void;
        getLabel(): MarkerLabel | undefined;
        getAngle(): number;
        setzIndex(index: number): void;
        getzIndex(): number;
        setIcon(content: string | Icon): void;
        getIcon(): string | Icon | undefined;
        setDraggable(draggable: boolean): void;
        getDraggable(): boolean;
        setCursor(cursor: string): void;
        setContent(content: string | HTMLElement): void;
        getContent(): string | HTMLElement;
        moveAlong(
            path: LngLat[],
            speed: number,
            timingFunction?: (t: number) => number,
            circleable?: boolean
        ): void;
        moveTo(
            path: LocationValue,
            speed: number,
            timingFunction?: (t: number) => number
        ): void;
        stopMove(): void;
        pauseMove(): boolean;
        resumeMove(): boolean;
        setMap(map: null | Map): void;
        setTitle(title: string): void;
        getTitle(): string | undefined;
        setTop(isTop: boolean): void;
        getTop(): boolean;
        setShadow(icon?: Icon | string): void;
        getShadow(): Icon | undefined | string;
        setShape(shape?: MarkerShape): void;
        getShape(): MarkerShape | undefined;
    }
}
