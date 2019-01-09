declare namespace AMap {
    namespace TileLayer {
        interface FlexibleOptions extends TileLayerOptions {
            createTile?(
                x: number,
                y: number,
                z: number,
                success: (tile: HTMLImageElement | HTMLCanvasElement) => void,
                fail: () => void
            ): void;
            cacheSize?: number;
            visible?: boolean;
        }
        class Flexible extends TileLayer {
            constructor(options?: FlexibleOptions);
        }
    }
}
