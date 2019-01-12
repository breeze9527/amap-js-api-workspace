declare namespace AMap {
    interface PlaceSearchLayerEventContent {
        id: string;
        name: string;
    }
    interface PlaceSearchLayerEventMap {
        complete: Event<'complete'>;
        click: Event<'click', { content: PlaceSearchLayerEventContent[]; lnglat: LngLat }>;
        mousemove: Event<'mousemove', { content: PlaceSearchLayerEventContent[]; lnglat: LngLat }>;
    }
    interface PlaceSearchLayerOptions {
        map?: Map;
        keyword?: string;
        // internal
        zIndex?: number;
    }
    class PlaceSearchLayer extends EventEmitter {
        constructor(options?: PlaceSearchLayerOptions);
        setMap(map: Map | null): void;
        setKeywords(keywords: string): void;
    }
}
