declare namespace AMap {
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
}
