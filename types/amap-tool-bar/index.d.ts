// TypeScript Version: 2.8

/// <reference types="amap" />

declare namespace AMap {
    namespace ToolBar {
        interface EventMap {
            hide: Event<'hide'>;
            show: Event<'show'>;
            location: Event<'location', {lnglat: LngLat}>;
            zoomchanged: Event<'zoomin' | 'zoomout'>;
            // internal
            'location-success': Event<'location-success'>; // TODO geolocation.getCurrentPosition
            'location-failed': Event<'location-failed'>; // TODO geolocation.getCurrentPosition
        }
        type Position = 'LT' | 'RT' | 'LB' | 'RB';
        interface Options {
            offset?: Pixel;
            position?: Position;
            ruler?: boolean;
            noIpLocate?: boolean;
            locate?: boolean;
            liteStyle?: boolean;
            direction?: boolean;
            autoPosition?: boolean;
            locationMarker?: Marker;
            useNative?: boolean;
            // internal
            timeout?: number;
        }
    }

    class ToolBar extends EventEmitter {
        constructor(options?: ToolBar.Options);
        getOffset(): Pixel;
        setOffset(offset: Pixel): void;
        hideRuler(): void;
        showRuler(): void;
        hideDirection(): void;
        showDirection(): void;
        hideLocation(): void;
        showLocation(): void;
        doLocation(): void;
        getLocation(): LngLat | null | undefined;
        hide(): void;
        show(): void;
    }
}
