declare namespace AMap {
    namespace ControlBar {
        interface EventMap {
            hide: Event<'hide'>;
            show: Event<'show'>;
        }
        interface Position {
            top?: string;
            right?: string;
            bottom?: string;
            left?: string;
        }
        interface Options {
            position?: Position;
            showZoomBar?: boolean;
            showControlButton?: boolean;
        }
    }
    class ControlBar extends EventEmitter {
        constructor(options?: ControlBar.Options);
        // internal
        // show(): void;
        // hide(): void;
    }
}
