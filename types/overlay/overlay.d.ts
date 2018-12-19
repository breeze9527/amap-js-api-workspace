declare namespace AMap {
    interface OverlayOptions<ExtraData = any> {
        extData?: ExtraData;
        bubble?: boolean;
        clickable?: boolean;
        draggable?: boolean;
    }

    class Overlay<ExtraData = any, M = {}> extends EventEmitter<M> {
        constructor(options?: OverlayOptions);
        show(): void;
        hide(): void;
        getMap(): Map | null;
        setExtData(extData: ExtraData): void;
        getExtData(): ExtraData;

        // internal
        setHeight(height?: number | string): void;
        getHeight(): number | string;
    }
}
