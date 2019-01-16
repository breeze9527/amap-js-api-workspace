declare namespace AMap {
    interface MassMarksStyle {
        anchor: Pixel;
        url: string;
        size: Size;
        rotation?: number;
    }

    type MassMarksUIEvent<N extends string, I> = Event<N, {
        target: I;
        data: I extends MassMarks<infer D> ? D : MassMarksData;
    }>;

    interface MassMarksEventMap<I = MassMarks> {
        click: MassMarksUIEvent<'click', I>;
        dblclick: MassMarksUIEvent<'dblclick', I>;
        mousedown: MassMarksUIEvent<'mousedown', I>;
        mouseup: MassMarksUIEvent<'mouseup', I>;
        mouseover: MassMarksUIEvent<'mouseover', I>;
        mouseout: MassMarksUIEvent<'mouseout', I>;
        touchstart: MassMarksUIEvent<'touchstart', I>;
        touchend: MassMarksUIEvent<'touchend', I>;
    }

    interface MassMarksOptions extends LayerOptions {
        zIndex?: number;
        cursor?: string;
        alwayRender?: boolean;
        style: MassMarksStyle | MassMarksStyle[];
        // rejectMapMask
    }
    interface MassMarksData {
        lnglat: LocationValue;
        style?: number;
    }
    class MassMarks<D extends MassMarksData = MassMarksData> extends Layer {
        constructor(data: D[] | string, opts: MassMarksOptions);
        setStyle(style: MassMarksStyle | MassMarksStyle[]): void;
        getStyle(): MassMarksStyle | MassMarksStyle[];
        setData(data: D[] | string): void;
        getData(): Array<Pick<D, Exclude<keyof D, 'lnglat'>> & { lnglat: LngLat }>;
        clear(): void;
    }
}
