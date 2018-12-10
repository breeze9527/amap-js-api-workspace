declare namespace AMap {
    interface MassMarksStyle {
        anchor: Pixel;
        url: string;
        size: Size;
        rotation?: number;
    }
    interface MassMarksOptions extends LayerOptions {
        cursor?: string;
        alwayRender?: boolean;
        style: MassMarksStyle | MassMarksStyle[];
        // rejectMapMask
    }
    interface MassMarksData {
        lnglat: LocationValue;
    }
    class MassMarks<D extends MassMarksData = MassMarksData> extends Layer {
        constructor(data: D[] | string, opts: MassMarksOptions);
        setStyle(style: MassMarksStyle | MassMarksStyle[]): void;
        getStyle(): MassMarksStyle | MassMarksStyle[];
        setData(data: D[] | string): void;
        getData(): Array<Pick<D, Exclude<'lnglat', keyof D>> & { lnglat: LngLat }>;
        clear(): void;
    }
}
