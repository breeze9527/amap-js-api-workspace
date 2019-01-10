type OmitEventEmitter<I extends AMap.EventEmitter> = Omit<I, keyof AMap.EventEmitter>;
type ReferEventMap<I extends AMap.EventEmitter> =
    I extends OmitEventEmitter<AMap.Map> ? AMap.MapEventMap :
    I extends OmitEventEmitter<AMap.MassMarks> ? AMap.MassMarksEventMap<I> :
    I extends OmitEventEmitter<AMap.TileLayer> ? AMap.TileLayerEventMap :
    I extends OmitEventEmitter<AMap.ElasticMarker> ? AMap.ElasticMarkerEventMap<I> :
    I extends OmitEventEmitter<AMap.Marker> ? AMap.MarkerEventMap<I> :
    I extends OmitEventEmitter<AMap.Circle> ? AMap.CircleEventMap<I> :
    I extends OmitEventEmitter<AMap.Rectangle> ? AMap.RectangleEventMap<I> :
    I extends OmitEventEmitter<AMap.ShapeOverlay> ? AMap.ShapeOverlayEventMap<I> :
    I extends OmitEventEmitter<AMap.ContextMenu> ? AMap.ContextMenuEventMap<I> :
    any;
type OmitPureEventName<M> = { [K in keyof M]: AMap.InferEventData<M[K]> extends never ? never : K }[keyof M];
type PickPureEventName<M> = { [K in keyof M]: AMap.InferEventData<M[K]> extends never ? K : never }[keyof M];

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
    type InferEventData<E> =
        E extends Event ?
        Exclude<keyof E, 'type'> extends never ? never // {type}
        : E extends ({ value: infer V }) ?
        Exclude<keyof E, 'type' | 'value'> extends never ?
        ({ value: V } | V) // {type, value} | value
        : Omit<E, 'type'> // {type, value, extra? }
        : Omit<E, 'type'> // {type, extra? }
        : never; // is not event

    type MovingEvent = Event<'moving', {
        passwdPath: LngLat[];
    }>;

    abstract class EventEmitter {
        on<N extends keyof ReferEventMap<this>, C = this>(
            eventName: N,
            handler: (this: C, event: ReferEventMap<this>[N]) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        on<N extends string, D extends Record<string, any>, C = this>(
            eventName: N,
            // tslint:disable-next-line
            handler: (this: C, event: Event<N, D>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;

        off<N extends keyof ReferEventMap<this>, C = this>(
            eventName: N,
            handler: ((this: C, event: ReferEventMap<this>[N]) => void) | 'mv',
            context?: C
        ): this;
        off<N extends string, D extends Record<string, any>, C = this>(
            eventName: N,
            // tslint:disable-next-line
            handler: ((this: C, event: Event<N, D>) => void) | 'mv',
            context?: C
        ): this;

        emit<N extends OmitPureEventName<ReferEventMap<this>>>(
            eventName: N,
            data: ReferEventMap<this>[N]
        ): this;
        emit(eventName: PickPureEventName<ReferEventMap<this>>): this;
        emit<N extends string>(
            eventName: N,
            data: N extends OmitPureEventName<ReferEventMap<this>> ? InferEventData<ReferEventMap<this>[N]> : any
        ): this;
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

        function addListener<I extends EventEmitter, N extends keyof ReferEventMap<I>, C = I>(
            instance: I,
            eventName: N,
            handler: (this: C, event: ReferEventMap<I>[N]) => void,
            context?: C
        ): EventListener<1>;

        function addListenerOnce<I extends EventEmitter, N extends keyof ReferEventMap<I>, C = I>(
            instance: I,
            eventName: N,
            handler: (this: C, event: ReferEventMap<I>[N]) => void,
            context?: C
        ): EventListener<1>;

        function removeListener(listener: EventListener<0 | 1>): void;

        function trigger<I extends EventEmitter, N extends keyof ReferEventMap<I>>(
            instance: I,
            eventName: N,
            data: InferEventData<ReferEventMap<I>[N]>
        ): void;
        function trigger<I extends EventEmitter>(
            instance: I,
            eventName: PickPureEventName<ReferEventMap<I>>
        ): void;
    }
}
