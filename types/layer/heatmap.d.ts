declare namespace AMap {
    interface HeatmapOptions {
        rejectMapMask?: boolean;
        visible?: boolean;
        radius?: number;
        radiusUnit?: string;
        gradient?: { [key: string]: string };
        blur?: number;
        opacity?: [number, number];
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
    interface HeatmapDataSet {
        max?: number;
        data: HeatmapData[];
    }

    class Heatmap {
        constructor(map: Map, opts?: HeatmapOptions);
        setMap(map: Map): void;
        setOptions(opts?: HeatmapOptions): void;
        setDataSet(dataset: HeatmapDataSet | {
            data: string;
            dataParser?(data: any): HeatmapDataSet;
        }): void;
        addDataPoint(lng: number, lat: number, count?: number): void;
        hide(): void;
        show(): void;
        getMap(): Map;
        getOptions(): HeatmapOptions;
        getDataSet(): HeatmapDataSet;
        // internal
        setzIndex(zIndex: number): void;
        getzIndex(): number;
    }
}
