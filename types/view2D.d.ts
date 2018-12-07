declare namespace AMap {
    interface View2DOptions {
        center?: LocationValue;
        rotation?: number;
        zoom?: number;
        crs?: 'EPGS3857' | 'EPGS3395' | 'EPGS4326';
    }
    class View2D implements EventEmitter {
        constructor(options?: View2DOptions);
        on<N extends string, C = this, D = undefined>(
            eventName: N,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: Event<N, D>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        off<N extends string, C = this, D = undefined>(
            eventName: N,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: ((this: C, event: Event<N, D>) => void) | 'mv',
            context?: C
        ): this;
        emit(eventName: string, data: any): this;
    }
}
