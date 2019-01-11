declare namespace AMap {
    interface AdvancedInfoWindowEventMap<I> extends InfoWindowEventMap<I> {
        complete: (
            Event<'placesearch', { info: string }> |
            Event<'driving', { info: string }> |
            Event<'walking', { info: string }> |
            Event<'transit', { info: string }>
        ); // TODO
        error: Event<'error'>; // TODO
    }
    interface AdvancedInfoWindowOptions<ExtraData = any> extends InfoWindowOptions<ExtraData> {
        panel?: string | HTMLElement;
        searchRadius?: number;
        placeSearch?: boolean;
        driving?: boolean;
        walking?: boolean;
        transit?: boolean;
        asOrigin?: boolean;
        asDestination?: boolean;
    }

    class AdvancedInfoWindow<ExtraData = any> extends InfoWindow<ExtraData> {
        constructor(options?: AdvancedInfoWindowOptions);
        clear(): void;
    }
}
