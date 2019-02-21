// TypeScript Version: 2.8

/// <reference types="amap" />

declare namespace AMap {
    namespace OverView {
        interface EventMap {
            show: Event<'show'>;
            hide: Event<'hide'>;
            open: Event<'open'>;
            close: Event<'close'>;
        }
        interface Options<L extends TileLayer = TileLayer> {
            tileLayer?: L;
            isOpen?: boolean;
            visible?: boolean;
        }
    }

    class OverView<L extends TileLayer = TileLayer> extends EventEmitter {
        constructor(options?: OverView.Options<L>);
        show(): void;
        hide(): void;
        open(): void;
        close(): void;
        setTileLayer(tileLayer: L): void;
        getTileLayer(): L;
    }
}
