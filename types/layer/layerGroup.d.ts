type InferLayerOption<L> =
    L extends AMap.Buildings ? AMap.Buildings.Options
    : L extends AMap.Heatmap ? AMap.Heatmap.Options
    : L extends AMap.MassMarks ? AMap.MassMarks.Options
    : L extends AMap.TileLayer ? AMap.TileLayer.Options
    : L extends AMap.TileLayer.Traffic ? AMap.TileLayer.Traffic.Options
    : {};

declare namespace AMap {
    class LayerGroup<L = any> extends Layer {
        constructor(layers: L | L[]);
        addLayer(layer: L | L[]): this;
        addLayers(layers: L | L[]): this;
        getLayers(): L[];
        getLayer(finder: (this: null, item: L, index: number, list: L[]) => boolean): L | null;
        hasLayer(layer: L | ((this: null, item: L, index: number, list: L[]) => boolean)): boolean;
        removeLayer(layer: L | L[]): this;
        removeLayers(layer: L | L[]): this;
        clearLayers(): this;
        eachLayer<C = L>(iterator: (this: C, layer: L, index: number, list: L[]) => void, context?: C): void;

        // overwrite
        setMap(map?: Map): this;
        hide(): this;
        show(): this;
        reload(): this;
        setOptions(options: InferLayerOption<L>): this;
    }
}
