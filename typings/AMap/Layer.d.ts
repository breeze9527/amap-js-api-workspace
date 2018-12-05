declare namespace AMap {
    interface LayerOptions {
        map?: Map;
    }
    class Layer {
        protected constructor();
        getContainer(): HTMLDivElement | undefined;
        getZooms(): [number, number];
        setOpacity(alpha: number): void;
        getOpacity(): number;
        show(): void;
        hide(): void;
        setMap(map?: Map): void;
        getMap(): Map | undefined;
        setzIndex(index?: number): void;
        getzIndex(): number;
    }

    interface TileLayerOptions extends LayerOptions {
        tileSize?: number;
        tileUrl?: string;
        errorUrl?: string;
        getTileUrl?: string | ((x: number, y: number, level: number) => string);
        zIndex?: number;
        opacity?: number;
        zooms?: [number, number];
        detectRetina?: boolean;
    }
    interface TrafficTileLayerOptions extends TileLayerOptions {
        autoRefresh?: boolean;
        interval?: number;
    }
    class TileLayer extends Layer {
        constructor(options?: TileLayerOptions);
        getTiles(): string[];
        reload(): void;
        setTileUrl(url: string | ((x: number, y: number, level: number) => string)): void;
    }
    namespace TileLayer {
        class Satellite extends TileLayer { }
        class RoadNet extends TileLayer { }
        class Traffic extends TileLayer {
            constructor(options?: TrafficTileLayerOptions);
        }
    }
    // TODO event

    interface MassMarkStyle {
        anchor: Pixel;
        url: string;
        size: Size;
        rotation?: number;
    }
    interface MassMarksOptions extends LayerOptions {
        cursor?: string;
        alwayRender?: boolean;
        style: MassMarkStyle | MassMarkStyle[];
        // rejectMapMask
    }
    interface MassMarksData {
        lnglat: LocationValue;
    }
    class MassMarks<D extends MassMarksData = MassMarksData> extends Layer {
        constructor(data: D[] | string, opts: MassMarksOptions);
        setStyle(style: MassMarkStyle | MassMarkStyle[]): void;
        getStyle(): MassMarkStyle | MassMarkStyle[];
        setData(data: D[] | string): void;
        getData(): Array<Pick<D, Exclude<'lnglat', keyof D>> & { lnglat: LngLat }>;
        clear(): void;
    }

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
        }
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
    }
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

    class LayerGroup extends Layer {
        constructor(layers?: Layer[]);
        addLayer(layer: Layer | Layer[]): this;
        addLayers(layers: Layer | Layer[]): this;
        getLayers(): Layer[];
        hasLayer(layer: Layer): boolean;
        removeLayer(layer: Layer | Layer[]): this;
        removeLayers(layer: Layer | Layer[]): this;
        clearLayers(): this;
        eachLayer<T = Layer>(iterator: (this: T, layer: Layer, index: number, collections: Layer[]) => void, context?: T): void; // TODO deep test
        setOptions(opt: LayerOptions): this; // TODO test
    }

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
