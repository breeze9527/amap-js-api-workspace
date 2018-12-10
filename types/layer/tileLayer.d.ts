declare namespace AMap {
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
}
