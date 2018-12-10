declare namespace AMap {
    interface BuildingsOptions extends LayerOptions {
        zooms?: [number, number];
        zIndex?: number;
        heightFactor?: number;
        // inner
        visible?: boolean;
        merge?: boolean;
        sort?: boolean;
    }
    interface BuildingStyleArea {
        color1: string;
        path: LocationValue[];
        color2?: string;
        visible?: boolean;
        rejectTexture?: boolean;
    }
    interface BuildingStyleSetting {
        hideWithoutStyle?: boolean;
        areas: BuildingStyleArea[];
    }
    class Buildings extends Layer {
        constructor(opts: BuildingsOptions);
        setStyle(style: BuildingStyleSetting): void;
    }
}
