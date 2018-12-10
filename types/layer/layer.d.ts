declare namespace AMap {
    interface LayerOptions {
        map?: Map;
    }
    class Layer {
        protected constructor(options?: LayerOptions);
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
    // TODO event
}
