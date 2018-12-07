type ReferEvent<M, N extends Extract<keyof M, string>> = AMap.Event<N, M[N]>;
interface EventDataMap {
    complete: undefined;
}
declare namespace AMap {
    type Event<N extends string = string, V = undefined> = { type: N } &
        (V extends HTMLElement ? { value: V }
            : V extends object ? V
            : V extends undefined ? {}
            : { value: V });

    interface EventEmitter {
        on<N extends string, C = this>(
            eventName: N,
            handler: (this: C, event: Event<N>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        off<N extends string, C = this>(
            eventName: N,
            handler: (this: C, event: Event<N>) => void,
            context?: C
        ): this;

        emit(eventName: string, data: any): this;
    }

    interface EventListener {
        type: string | 0;
    }

    namespace event {
        function addDomListener<N extends keyof HTMLElementTagNameMap, E extends keyof HTMLElementEventMap, C = HTMLElementTagNameMap[N]>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: HTMLElementTagNameMap[N],
            eventName: E,
            handler: (this: C, event: HTMLElementEventMap[E]) => void,
            context?: C
        ): EventListener;
        function addListener<E = undefined, I = any, C = I>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: I,
            eventName: string,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: Event<string, E>) => void,
            context?: C
        ): EventListener;
        function addListenerOnce<E = undefined, I = any, C = I>(
            // tslint:disable-next-line: no-unnecessary-generics
            instance: I,
            eventName: string,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: Event<string, E>) => void,
            context?: C
        ): EventListener;
        function removeListener(listener: EventListener): void;

        function trigger(
            instance: any,
            eventName: string,
            extArgs: any
        ): void;
    }

    // events
    type MapsEvent<N extends string = string, T = any> = Event<N, {
        lnglat: LngLat;
        pixel: Pixel;
        target: T
    }>;
}
