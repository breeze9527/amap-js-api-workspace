// TypeScript Version: 2.8

/// <reference types="core" />
/// <reference types="place-search" />

declare namespace AMap {
    namespace PlaceSearchLayer {
        interface EventContent {
            id: string;
            name: string;
        }
        interface EventMap {
            complete: Event<'complete'>;
            click: Event<'click', { content: EventContent[]; lnglat: LngLat }>;
            mousemove: Event<'mousemove', { content: EventContent[]; lnglat: LngLat }>;
        }
        interface Options {
            map?: Map;
            keyword?: string;
            // internal
            zIndex?: number;
        }
    }

    class PlaceSearchLayer extends EventEmitter {
        constructor(options?: PlaceSearchLayer.Options);
        setMap(map: Map | null): void;
        setKeywords(keywords: string): void;
    }
}
