declare namespace AMap {
    interface GeocoderEventMap {
        complete: Event<'complete', GeocoderResult | {} | ReGeocodeResult | BatchReGeocodeResult>;
        error: Event<'error', { info: string }>;
    }
    interface GeocoderOptions {
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
    class Geocoder extends EventEmitter {
        constructor(options?: GeocoderOptions);
        getLocation(
            address: string | string[],
            callback: (status: 'complete' | 'no_data' | 'error', result: GeocoderResult | string) => void
        ): void;
        setCity(city?: string): void;
        getAddress(
            location: LocationValue,
            callback: (status: 'complete' | 'no_data' | 'error', result: ReGeocodeResult | string) => void
        ): void;
        getAddress(
            location: LocationValue[],
            callback: (status: 'complete' | 'no_data' | 'error', result: BatchReGeocodeResult | string) => void
        ): void;

        // internal
        setLang(lang?: Lang): void;
        getLang(): Lang | undefined;
    }

    interface ConvertorResult {
        info: string; // 'ok'
        locations: LngLat[];
    }
    function convertFrom(
        lnglat: LocationValue | LocationValue[],
        type: 'gps' | 'baidu' | 'mapbar' | null,
        callback: (status: 'complete' | 'error', result: string | ConvertorResult) => void
    ): void;
}
