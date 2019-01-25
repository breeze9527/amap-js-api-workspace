declare namespace AMap {
    namespace Geolocation {
        interface EventMap {
            complete: Event<'complete', GeolocationResult>;
            error: Event<'error', ErrorStatus>;
        }
        type ButtonPosition = 'LT' | 'LB' | 'RT' | 'RB';
        interface Options {
            enableHighAccuracy?: boolean;
            timeout?: number;
            noIpLocate?: number;
            noGeoLocation?: number;
            GeoLocationFirst?: boolean;
            maximumAge?: number;
            convert?: boolean;
            showButton?: boolean;
            buttonDom?: string | HTMLElement;
            buttonPosition?: ButtonPosition;
            buttonOffset?: Pixel;
            showMarker?: boolean;
            markerOptions?: Marker.Options;
            showCircle?: boolean;
            circleOptions?: Circle.Options;
            panToLocation?: boolean;
            zoomToAccuracy?: boolean;
            useNative?: boolean;
            extensions?: 'all' | 'base';
            // internal
            convertUrl?: string;
            stopWhenPermissionDenied?: boolean;
        }
        type LocationType = 'html5' | 'ip' | 'sdk';
        interface GeolocationResult extends Geocoder.ReGeocode {
            position: LngLat;
            accuracy: number | null;
            location_type: LocationType;
            message: string;
            isConverted: boolean;
            info: string;
            status: 1;
        }
        interface ErrorStatus {
            info: string;
            message: string;
            status: 0;
        }
        interface CityResult {
            adcode: string;
            bounds: number[];
            center: [number, number];
            city: string;
            citycode: string;
            country: string;
            info: string;
            isConverted: boolean;
            message: string;
            province: string;
            status: 1;
        }
        type SearchStatus = 'complete' | 'error';
    }

    class Geolocation extends EventEmitter {
        constructor(options?: Geolocation.Options);
        isSupported(): boolean;
        getCurrentPosition(callback: (status: Geolocation.SearchStatus, result: Geolocation.GeolocationResult | Geolocation.ErrorStatus) => void): void;
        watchPosition(): string | undefined | null;
        clearWatch(wathcId: string): string | undefined;
        getCityInfo(callback: (status: Geolocation.SearchStatus, result: Geolocation.CityResult | Geolocation.ErrorStatus) => void): void;
    }
}
