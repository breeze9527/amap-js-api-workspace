// TypeScript Version: 2.8

/// <reference types="amap" />
declare namespace AMap {
    namespace Heatmap {
        interface Options {
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
        interface Data {
            lng: number;
            lat: number;
            count: number;
        }
        interface DataSet {
            max?: number;
            data: Data[];
        }
    }

    class Heatmap {
        constructor(map: Map, opts?: Heatmap.Options);
        setMap(map: Map): void;
        setOptions(opts?: Heatmap.Options): void;
        setDataSet(dataset: Heatmap.DataSet | {
            data: string;
            dataParser?(data: any): Heatmap.DataSet;
        }): void;
        addDataPoint(lng: number, lat: number, count?: number): void;
        hide(): void;
        show(): void;
        getMap(): Map;
        getOptions(): Heatmap.Options;
        getDataSet(): Heatmap.DataSet;
        // internal
        setzIndex(zIndex: number): void;
        getzIndex(): number;
    }
}
