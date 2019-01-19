declare namespace AMap {
    namespace Geocoder {
        interface EventMap {
            complete: Event<'complete', GeocoderResult | {} | ReGeocodeResult | BatchReGeocodeResult>;
            error: Event<'error', { info: string }>;
        }
        interface Options {
            city?: string;
            radius?: number;
            lang?: Lang;
            batch?: boolean;
            extensions?: 'base' | 'all';
        }
        interface BuildingArea {
            id: string;
            name: string;
            location: LngLat;
        }
        interface GeocodeAddressComponent {
            neighborhood: string;
            neighborhoodType: string;
            building: string;
            buildingType: string;
            province: string;
            city: string;
            district: string;
            township: string;
            citycode: string;
            street: string;
            streetNumber: string;
        }
        interface ReGeocodeAddressComponent {
            citycode: string;
            adcode: string;
            businessAreas: BuildingArea[];
            neighborhoodType: string;
            neighborhood: string;
            building: string;
            buildingType: string;
            street: string;
            streetNumber: string;
            province: string;
            city: string;
            district: string;
            township: string;
        }
        interface Geocode {
            addressComponent: GeocodeAddressComponent;
            formattedAddress: string;
            location: LngLat;
            adcode: string;
            level: string;
        }
        interface GeocoderResult {
            info: string;
            resultNum: string;
            geocodes: Geocode[];
        }
        interface Road {
            id: string;
            name: string;
            distance: number;
            location: LngLat;
            direction: string;
        }
        interface Cross {
            distance: number;
            direction: string;
            location: LngLat;
            first_id: string;
            first_name: string;
            second_id: string;
            second_name: string;
        }
        interface ReGeocodePoi {
            id: string;
            name: string;
            type: string;
            tel: string;
            distance: number;
            direction: string;
            address: string;
            location: LngLat;
            businessArea: string;
        }
        interface ReGeocodeAoi {
            adcode: string;
            area: string;
            id: string;
            location: LngLat;
            name: string;
            type: string;
        }
        interface ReGeocode {
            addressComponent: ReGeocodeAddressComponent;
            formattedAddress: string;
            roads: Road[];
            crosses: Cross[];
            pois: ReGeocodePoi[];
            aois?: ReGeocodeAoi[];
        }
        interface ReGeocodeResult {
            info: string;
            regeocode: ReGeocode;
        }
        interface BatchReGeocodeResult {
            info: string;
            regeocodes: ReGeocode[];
        }
        type SearchStatus = 'complete' | 'no_data' | 'error';
    }
    class Geocoder extends EventEmitter {
        constructor(options?: Geocoder.Options);
        getLocation(
            address: string | string[],
            callback: (status: Geocoder.SearchStatus, result: Geocoder.GeocoderResult | string) => void
        ): void;
        setCity(city?: string): void;
        getAddress(
            location: LocationValue,
            callback: (status: Geocoder.SearchStatus, result: Geocoder.ReGeocodeResult | string) => void
        ): void;
        getAddress(
            location: LocationValue[],
            callback: (status: Geocoder.SearchStatus, result: Geocoder.BatchReGeocodeResult | string) => void
        ): void;

        // internal
        setLang(lang?: Lang): void;
        getLang(): Lang | undefined;
    }

    namespace convertFrom {
        interface Result {
            info: string; // 'ok'
            locations: LngLat[];
        }
        type Type = 'gps' | 'baidu' | 'mapbar';
        type SearchStatus = 'complete' | 'error';
    }
    function convertFrom(
        lnglat: LocationValue | LocationValue[],
        type: convertFrom.Type | null,
        callback: (status: convertFrom.SearchStatus, result: string | convertFrom.Result) => void
    ): void;
}
