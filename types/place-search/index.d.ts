// TypeScript Version: 2.8

/// <reference types="core" />

declare namespace AMap {
    namespace PlaceSearch {
        interface EventMap {
            complete: Event<'complete', SearchResult>;
            error: Event<'error', { info: string }>;
            selectChanged: Event<'selectChanged', {
                selected: SelectChangeEventData | EventMap['markerClick'] | EventMap['listElementClick'];
                lastSelected: SelectChangeEventData | EventMap['markerClick'] | EventMap['listElementClick'] | null;
            }>;
            listElementClick: SelectChangeEvent<'listElementClick', MouseEvent>;
            markerClick: SelectChangeEvent<'markerClick', Marker.EventMap['click']>;
            // internal
            renderComplete: Event<'renderComplete', {
                result: SelectChangeEventData[];
                markers: Marker[];
                listElements: HTMLElement[];
            }>;
            infoWindowClick: Event<'infoWindowClick', SelectChangeEventData & {
                event: MouseEvent;
                infoWindow: InfoWindow;
                infoWindowContentDom: HTMLDivElement;
            }>;
            willClear: Event<'willClear', {
                id: string;
                index: number;
                data: Poi[];
            }>;
            markerDestoryed: Event<'markerDestoryed', SelectChangeEventData>; // typo in source code
            listElementDetroyed: Event<'listElementDetroyed', SelectChangeEventData>; // typo too
        }

        interface SelectChangeEventData {
            id: string;
            index: number;
            marker: Marker;
            listElement: HTMLLIElement;
            data: Poi[];
        }
        type SelectChangeEvent<N extends string, E> = Event<N, SelectChangeEventData & {
            event: E;
        }>;
        interface PoiPhoto {
            title: string;
            url: string;
        }
        interface PoiBase {
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
            photos: PoiPhoto[];
            url: string;
            provider: string;
        }
        interface Discount {
            title: string;
            detail: string;
            start_time: string;
            end_time: string;
            sold_num: number;
            photos: PoiPhoto[];
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
            photos: PoiPhoto[];
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
            photos: PoiPhoto[];
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
            photos: PoiPhoto[];
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
            photos: PoiPhoto[];
        }
        type PoiExt = PoiBase & {
            website: string;
            pcode: string;
            citycode: string;
            adcode: string;
            postcode: string;
            pname: string;
            cityname: string;
            adname: string;
            email: string;
            photos: PoiPhoto[];
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
        interface Options {
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
        interface PoiList {
            pois: Poi[]; // PlaceSearchPoiBase[] | PlaceSearchPoiExt[];
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
        interface SearchResult {
            info: string;
            poiList: PoiList;
            keywordList?: string[];
            cityList?: CityInfo[];
        }
        type Poi = PoiBase | PoiExt;
        type SearchStatus = 'complete' | 'error' | 'no_data';
    }
    class PlaceSearch extends EventEmitter {
        constructor(options?: PlaceSearch.Options);
        search(
            keyword: string,
            callback: (status: PlaceSearch.SearchStatus, result: string | PlaceSearch.SearchResult) => void
        ): void;
        searchNearBy(
            keyword: string,
            center: LocationValue,
            radius: number,
            callback: (status: PlaceSearch.SearchStatus, result: string | PlaceSearch.SearchResult) => void
        ): void;
        searchInBounds(
            keyword: string,
            bounds: Bounds | Polygon,
            callback: (status: PlaceSearch.SearchStatus, result: string | PlaceSearch.SearchResult) => void
        ): void;
        getDetails(
            POIID: string,
            callback: (status: PlaceSearch.SearchStatus, result: string | PlaceSearch.SearchResult) => void
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
