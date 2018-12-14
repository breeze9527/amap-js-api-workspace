/// <reference path="./util.d.ts" />

type MergeEventMap<M> = (AsType<M> extends Record<string, AMap.Event> ? AsType<M> : {}) & {
    complete: AMap.CompleteEvent;
};

type EventData<E> =
    E extends AMap.Event ?
    Exclude<keyof E, 'type'> extends never ? never // {type: xxx}
    : E extends ({ value: infer V }) ?
    Exclude<keyof E, 'type' | 'value'> extends never ?
    ({ value: V } | V) // {type: xxx, value: xxx}
    : Omit<E, 'type'> // {type: xxx, value: xxx, xxx?:xxx }
    : Omit<E, 'type'> // {type: xxx, xxx?:xxx }
    : any; // is not event

type OmitPureEvent<M extends Record<string, AMap.Event>> = Omit<M, { [K in keyof M]: EventData<M[K]> extends never ? K : never }[keyof M]>;
type PickPureEvent<M extends Record<string, AMap.Event>> = Omit<M, { [K in keyof M]: EventData<M[K]> extends never ? never : K }[keyof M]>;

type InferEventMap<I> = I extends AMap.EventEmitter<infer M> ? M : {};

declare namespace AMap {
    type CompleteEvent = Event<'complete'>;

    type Event<N extends string = string, V = undefined> = { type: N } &
        (V extends HTMLElement ? { value: V }
            : V extends object ? V
            : V extends undefined ? {}
            : { value: V });

    abstract class EventEmitter<M = {}> {
        on<N extends keyof MergeEventMap<M>, C = this>(
            eventName: N,
            handler: (this: C, event: MergeEventMap<M>[N]) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        on<N extends string, D extends Record<string, any>, C = this>(
            eventName: N,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: Event<N, D>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;

        off<N extends keyof MergeEventMap<M>, C = this>(
            eventName: N,
            handler: ((this: C, event: MergeEventMap<M>[N]) => void) | 'mv',
            context?: C
        ): this;
        off<N extends string, C = this>(
            eventName: N,
            handler: ((this: C, event: Event<N, { [k: string]: any }>) => void) | 'mv',
            context?: C
        ): this;

        emit<N extends keyof MergeEventMap<M>>(
            eventName: N,
            data: EventData<MergeEventMap<M>[N]>
        ): this;
        emit<N extends keyof OmitPureEvent<MergeEventMap<M>>>(
            eventName: N,
            data: EventData<MergeEventMap<M>[N]>
        ): this;
        emit(eventName: keyof PickPureEvent<MergeEventMap<M>>): this;
        emit<N extends string>(
            eventName: N,
            // data cannot be optional, if we do that, emitter.emit('click') will pass the lint
            // but emitter.emit('customEvent') will throw an error
            // and we can use emitter.emit('customEvent', null | undefined) instead
            data: N extends keyof MergeEventMap<M> ? EventData<MergeEventMap<M>[N]> : any
        ): this;

        // hack for help infer M out of EventEmitter
        private __event_map_infer_hack: MergeEventMap<M>;
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

        function addListener<I extends EventEmitter, N extends keyof InferEventMap<I>, C = I>(
            instance: I,
            eventName: N,
            handler: (this: C, event: InferEventMap<I>[N]) => void,
            context?: C
        ): EventListener<1>;

        function addListenerOnce<I extends EventEmitter, N extends keyof InferEventMap<I>, C = I>(
            instance: I,
            eventName: N,
            handler: (this: C, event: InferEventMap<I>[N]) => void,
            context?: C
        ): EventListener<1>;
        function removeListener(listener: EventListener<0 | 1>): void;

        function trigger<I extends EventEmitter, N extends keyof OmitPureEvent<InferEventMap<I>>>(
            instance: I,
            eventName: N,
            extArgs: EventData<InferEventMap<I>[N]>
        ): void;
        function trigger<I extends EventEmitter>(
            instance: I,
            eventName: keyof PickPureEvent<InferEventMap<I>> | string
        ): void;
    }

    // events
    type MapsEvent<N extends string = string> = Event<N, {
        lnglat: LngLat;
        pixel: Pixel;
        target: Map;
    }>;
}
