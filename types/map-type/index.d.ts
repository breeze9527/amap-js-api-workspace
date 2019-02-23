// TypeScript Version: 2.8

/// <reference types="core" />

declare namespace AMap {
    namespace MapType {
        interface EventMap {
            hide: Event<'hide'>;
            show: Event<'show'>;
        }
        interface Options {
            defaultType?: 0 | 1;
            showTraffic?: boolean;
            showRoad?: boolean;
        }
    }

    class MapType extends EventEmitter {
        constructor(options?: MapType.Options);
        show(): void;
        hide(): void;
    }
}
