declare namespace AMap {
    namespace AdvancedInfoWindow {
        interface EventMap<I = AdvancedInfoWindow> extends InfoWindow.EventMap<I> {
            complete: (
                Event<'placesearch', { info: string }> |
                Event<'driving', { info: string }> |
                Event<'walking', { info: string }> |
                Event<'transit', { info: string }>
            ); // TODO
            error: Event<'error'>; // TODO
        }
        interface Options<ExtraData = any> extends InfoWindow.Options<ExtraData> {
            panel?: string | HTMLElement;
            searchRadius?: number;
            placeSearch?: boolean;
            driving?: boolean;
            walking?: boolean;
            transit?: boolean;
            asOrigin?: boolean;
            asDestination?: boolean;
        }
    }

    class AdvancedInfoWindow<ExtraData = any> extends InfoWindow<ExtraData> {
        constructor(options?: AdvancedInfoWindow.Options);
        clear(): void;
    }
}
