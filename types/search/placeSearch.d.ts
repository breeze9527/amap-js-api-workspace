declare namespace AMap {
    interface PlaceSearchSelectChangeEventData {
        id: string;
        index: number;
        marker: Marker;
        listElement: HTMLLIElement;
        data: PlaceSearchPoiBase | PlaceSearchPoiExt;
    }
    type PlaceSearchSelectChangeEvent<N extends string, E> = Event<N, PlaceSearchSelectChangeEventData & {
        event: E;
    }>;
    interface PlaceSearchPoiPhoto {
        title: string;
        url: string;
    }
    interface PlaceSearchPoiBase {
        id: string;
        name: string;
        type: string;
        location: LngLat | null;
        address: string;
        distance: number;
        tel: string;
        shopinfo: string;
        children?: any[]; // TODO Array<{location: LngLat | null}>
    }
    interface Groupbuy {
        title: string;
        type_code: string;
        type: string;
        detail: string;
        stime: string;
        etime: string;
        count: number;
        sold_num: number;
        original_price: number;
        groupbuy_price: number;
        discount: number;
        ticket_address: string;
        ticket_tel: string;
        photos: PlaceSearchPoiPhoto[];
        url: string;
        provider: string;
    }
    interface Discount {
        title: string;
        detail: string;
        start_time: string;
        end_time: string;
        sold_num: number;
        photos: PlaceSearchPoiPhoto[];
        url: string;
        provider: string;
    }
    interface Cinema {
        intro: string;
        rating: string;
        deep_src: string;
        parking: string;
        opentime_GDF: string;
        opentime: string;
        photos: PlaceSearchPoiPhoto[];
    }
    interface Dining {
        cuisines: string;
        tag: string;
        intro: string;
        rating: string;
        cp_rating: string;
        deep_src: string;
        taste_rating: string;
        environment_rating: string;
        service_rating: string;
        cost: string;
        recommend: string;
        atmosphere: string;
        ordering_wap_url: string;
        ordering_web_url: string;
        ordering_app_url: string;
        opentime_GDF: string;
        opentime: string;
        addition: string;
        photos: PlaceSearchPoiPhoto[];
    }
    interface Scenic {
        intro: string;
        rating: string;
        deep_src: string;
        level: string;
        price: string;
        season: string;
        recommend: string;
        theme: string;
        ordering_wap_url: string;
        ordering_web_url: string;
        opentime_GDF: string;
        opentime: string;
        photos: PlaceSearchPoiPhoto[];
    }
    interface Hotel {
        rating: string;
        star: string;
        intro: string;
        lowest_price: string;
        faci_rating: string;
        health_rating: string;
        environment_rating: string;
        service_rating: string;
        traffic: string;
        addition: string;
        deep_src: string;
        photos: PlaceSearchPoiPhoto[];
    }
    type PlaceSearchPoiExt = PlaceSearchPoiBase & {
        website: string;
        pcode: string;
        citycode: string;
        adcode: string;
        postcode: string;
        pname: string;
        cityname: string;
        adname: string;
        email: string;
        photos: PlaceSearchPoiPhoto[];
        entr_location: LngLat | null;
        exit_location: LngLat | null;
        groupbuy: boolean;
        discount: boolean;
    } & ({
        indoor_map: true;
        indoor_data: {
            cpid: string;
            floor: string;
            truefloor: string;
        };
    } | {
        indoor_map: false;
    }) & {
        groupbuys?: Groupbuy[];
        discounts?: Discount[];
    } & ({
        deep_type: 'CINEMA';
        cinema: Cinema;
    } | {
        deep_type: 'DINING';
        dining: Dining;
    } | {
        deep_type: 'SCENIC';
        scenic: Scenic;
    } | {
        deep_type: 'HOTEL';
        hotel: Hotel;
    });
    interface PlaceSearchEventMap {
        complete: Event<'complete', PlaceSearchResult>;
        error: Event<'error', { info: string }>;
        selectChanged: Event<'selectChanged', {
            selected: PlaceSearchSelectChangeEventData | PlaceSearchEventMap['markerClick'] | PlaceSearchEventMap['listElementClick'];
            lastSelected: PlaceSearchSelectChangeEventData | PlaceSearchEventMap['markerClick'] | PlaceSearchEventMap['listElementClick'] | null;
        }>;
        listElementClick: PlaceSearchSelectChangeEvent<'listElementClick', MouseEvent>;
        markerClick: PlaceSearchSelectChangeEvent<'markerClick', MarkerEventMap<Marker>['click']>;
        // internal
        renderComplete: Event<'renderComplete', {
            result: PlaceSearchSelectChangeEventData[];
            markers: Marker[];
            listElements: HTMLElement[];
        }>;
        infoWindowClick: Event<'infoWindowClick', PlaceSearchSelectChangeEventData & {
            event: MouseEvent;
            infoWindow: InfoWindow;
            infoWindowContentDom: HTMLDivElement;
        }>;
        willClear: Event<'willClear', {
            id: string;
            index: number;
            data: PlaceSearchPoiBase | PlaceSearchPoiExt;
        }>;
        markerDestoryed: Event<'markerDestoryed', PlaceSearchSelectChangeEventData>; // typo in source code
        listElementDetroyed: Event<'listElementDetroyed', PlaceSearchSelectChangeEventData>; // typo too
    }
    interface PlaceSearchOptions {
        city?: string;
        citylimit?: boolean;
        children?: number;
        type?: string;
        lang?: Lang;
        pageSize?: number;
        pageIndex?: number;
        extensions?: 'base' | 'all';
        map?: Map;
        panel?: string | HTMLElement;
        showCover?: boolean;
        renderStyle?: 'newpc' | 'default';
        autoFitView?: boolean;
        // internal
        renderEngine?: string;
        rankBy?: string;
    }
    interface PlaceSearchPoiList {
        pois: Array<PlaceSearchPoiBase | PlaceSearchPoiExt>; // PlaceSearchPoiBase[] | PlaceSearchPoiExt[];
        pageIndex: number;
        pageSize: number;
        count: number;
    }
    interface CityInfo {
        name: string;
        citycode: string;
        adcode: string;
        count: number;
    }
    interface PlaceSearchResult {
        info: string;
        poiList: PlaceSearchPoiList;
        keywordList?: string[];
        cityList?: CityInfo[];
    }
    class PlaceSearch extends EventEmitter {
        constructor(options?: PlaceSearchOptions);
        search(
            keyword: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: string | PlaceSearchResult) => void
        ): void;
        searchNearBy(
            keyword: string,
            center: LocationValue,
            radius: number,
            callback: (status: 'complete' | 'error' | 'no_data', result: string | PlaceSearchResult) => void
        ): void;
        searchInBounds(
            keyword: string,
            bounds: Bounds | Polygon,
            callback: (status: 'complete' | 'error' | 'no_data', result: string | PlaceSearchResult) => void
        ): void;
        getDetails(
            POIID: string,
            callback: (status: 'complete' | 'error' | 'no_data', result: string | PlaceSearchResult) => void
        ): void;
        setType(type?: string): void;
        setCityLimit(limit?: boolean): void;
        setPageIndex(pageIndex?: number): void;
        setPageSize(pageSize?: number): void;
        setCity(city?: string): void;
        setLang(lang?: Lang): void;
        getLang(): Lang | undefined;
        clear(): void;
        poiOnAMAP(obj: { location?: LocationValue; id: string; name?: string; }): void;
        detailOnAMAP(obj: { location?: LocationValue; id: string; name?: string; }): void;
        // internal
        open(): void;
        close(): void;
    }
}
