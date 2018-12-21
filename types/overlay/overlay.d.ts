declare namespace AMap {
    interface OverlayOptions<ExtraData = any> {
        extData?: ExtraData;
        bubble?: boolean;
        clickable?: boolean;
        draggable?: boolean;
    }

    abstract class Overlay<ExtraData = any> extends EventEmitter {
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
