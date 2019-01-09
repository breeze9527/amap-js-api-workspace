declare namespace AMap {
    interface Object3DLayerOptions {
        map?: Map;
        visible?: boolean;
        opacity?: number;
        zIndex?: number;
        zooms?: [number, number];
    }
    class Object3DLayer extends Layer {
        constructor(options?: Object3DLayerOptions)
        add(object3d: Object3D): void;
        remove(object3d: Object3D): void;
        clear(): void;
        reDraw(): void;

        // internal
        setOption(options: {
            position?: number;
            scale?: number;
            height?: number;
            scene?: number;
        }): void;
    }
}
