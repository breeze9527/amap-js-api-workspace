declare namespace AMap {
    interface TileLayerEventMap {
        complete: Event<'complete'>;
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

    class TileLayer extends Layer {
        constructor(options?: TileLayerOptions);
        getTiles(): string[];
        reload(): void;
        setTileUrl(url: string | ((x: number, y: number, level: number) => string)): void;
    }

    interface TrafficTileLayerOptions extends TileLayerOptions {
        autoRefresh?: boolean;
        interval?: number;
    }

    namespace TileLayer {
        class Satellite extends TileLayer { }
        class RoadNet extends TileLayer { }
        class Traffic extends TileLayer {
            constructor(options?: TrafficTileLayerOptions);
        }
    }
}
