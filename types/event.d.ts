declare namespace AMap {
    type Event<N extends string = string, V = undefined> = { type: N } &
        (V extends HTMLElement ? { value: V }
            : V extends object ? V
            : V extends undefined ? {}
            : { value: V });
    type MapsEvent<N extends string, I> = Event<N, {
        lnglat: LngLat;
        pixel: Pixel;
        target: I
    }>;

    abstract class EventEmitter {
        on<E extends Event, C = this>(
            eventName: string,
            // tslint:disable-next-line:no-unnecessary-generics
            handler: (this: C, event: E) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;

        off<E extends Event, C = this>(
            eventName: string,
            // tslint:disable-next-line
            handler: ((this: C, event: E) => void) | 'mv',
            context?: C
        ): this;

        emit(eventName: string, data?: any): this;
    }

    interface EventListener<T extends 0 | 1> {
        type: T;
    }

    namespace event {
        function addDomListener<N extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, C = HTMLElementTagNameMap[N]>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: HTMLElementTagNameMap[N],
            eventName: E,
            handler: (this: C, event: HTMLElementEventMap[E]) => void,
            context?: C
        ): EventListener<0>;

        function addListener<I extends EventEmitter, E extends Event, C = I>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: I,
            eventName: string,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: E) => void,
            // tslint:disable-next-line: no-unnecessary-generics
            context?: C
        ): EventListener<1>;

        function addListenerOnce<I extends EventEmitter, E extends Event, C = I>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: I,
            eventName: string,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: E) => void,
            // tslint:disable-next-line: no-unnecessary-generics
            context?: C
        ): EventListener<1>;

        function removeListener(listener: EventListener<0 | 1>): void;

        function trigger(instance: EventEmitter, eventName: string, data?: any): void;
    }
}
