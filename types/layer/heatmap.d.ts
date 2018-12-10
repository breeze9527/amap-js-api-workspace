declare namespace AMap {
    interface HeatmapOptions {
        rejectMapMask?: boolean;
        visible?: boolean;
        radius?: number;
        radiusUnit?: string;
        gradient: object;
        blur?: number;
        opacity?: number;
        zooms?: [number, number];
        zIndex?: number;
        renderOnZooming?: boolean;
        ['3d']?: {
            heightScale?: number;
            heightBezier?: number[];
            gridSize?: number;
            drawGridLine?: boolean;
        };
    }
    interface HeatmapData {
        lng: number;
        lat: number;
        count: number;
    }
    type HeatmapDataSet = {
        max?: number;
        data: HeatmapData[];
    } | {
        max?: number;
        data: string;
        dataParser?(data: any): HeatmapData[];
    };
    class Heatmap {
        constructor(map?: Map, opts?: HeatmapOptions);
        setMap(map?: number): void;
        setOptions(opts: HeatmapOptions): void;
        addDataPoint(lng: number, lat: number, count: number): void;
        setDataSet(dataset: HeatmapDataSet): void;
        hide(): void;
        show(): void;
        getMap(): Map | undefined;
        getOptions(): HeatmapOptions;
        getDataSet(): HeatmapData[];
    }
}
