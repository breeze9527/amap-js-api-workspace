declare namespace AMap {
    namespace Scale {
        interface EventMap {
            show: Event<'show'>;
            hide: Event<'hide'>;
        }
        type Position = 'LT' | 'RT' | 'LB' | 'RB';
        interface Options {
            position?: Position;
            visible?: boolean;
            offset?: Pixel;
        }
    }

    class Scale extends EventEmitter {
        constructor(options?: Scale.Options);
        show(): void;
        hide(): void;
    }
}
