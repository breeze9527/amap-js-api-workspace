type MarkerMapsEventName =
    'click' | 'dblclick' | 'rightclick' |
    'mousemove' | 'mouseover' | 'mouseout' | 'mousedown' | 'mouseup' |
    'dragstart' | 'dragging' | 'dragend' |
    'touchstart' | 'touchmove' | 'touchend';
type MarkerPureEventName = 'moveend' | 'movealong';

declare namespace AMap {
    type MarkerMovingEvent = Event<'moving', { passedPath: LngLat[] }>;
    type MarkerEventMap<I> =
        { [K in MarkerMapsEventName]: MapsEvent<K, I> } &
        { [K in MarkerPureEventName]: Event<K> } &
        { moving: MarkerMovingEvent };

    type MarkerAnimationName = 'AMAP_ANIMATION_NONE' | 'AMAP_ANIMATION_DROP' | 'AMAP_ANIMATION_BOUNCE';
    interface MarkerLabel {
        content?: string;
        offset?: Pixel;
    }
    interface MarkerOptions<ExtraData = any> extends OverlayOptions<ExtraData> {
        map?: Map;
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
        // shadow?: Icon // TODO
        title?: string;
        shape?: MarkerShape;
        label?: MarkerLabel;

        // internal
        topWhenMouseOver?: boolean;
        height?: number; // TODO
    }

    class Marker<ExtraData = any> extends Overlay<ExtraData, MarkerEventMap<Marker<ExtraData>>> {
        constructor(options?: MarkerOptions<ExtraData>);
        markOnAMAP(obj?: { name?: string, position?: LocationValue }): void;
        getOffset(): Pixel;
        setOffset(offset: Pixel): void;
        setAnimation(animate: MarkerAnimationName, prevent?: boolean): void;
        getAnimation(): MarkerAnimationName;
        setClickable(cilckable: boolean): void;
        getClickable(): boolean;
        getPosition(): LngLat;
        setPosition(position: LocationValue): void;
        setAngle(angle: number): void;
        setLabel(label?: MarkerLabel): void;
        getLabel(): MarkerLabel | undefined;
        getAngle(): number;
        setzIndex(index: number): void;
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
