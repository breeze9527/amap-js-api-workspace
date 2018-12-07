/// <reference path="util.d.ts" />

type MapsEventName =
    'click' |
    'dblclick' |
    'mousemove' |
    'mousewheel' |
    'mouseover' |
    'mouseout' |
    'mouseup' |
    'mousedown' |
    'rightclick' |
    'touchstart' |
    'touchmove' |
    'touchend';

type HotspotEventName =
    'hotspotclick' |
    'hotspotover' |
    'hotspotout';

type PureEventName =
    'complete' |
    'mapmove' |
    'movestart' |
    'moveend' |
    'zoomchange' |
    'zoomstart' |
    'zoomend' |
    'dragstart' |
    'dragging' |
    'dragend' |
    'resize';

declare namespace AMap {
    type Lang = 'zh_cn' | 'en' | 'zh_en';
    type Feature = 'bg' | 'point' | 'road' | 'building';
    type LocationValue = LngLat | [number, number];
    interface MapOptions {
        view?: View2D;
        layers?: Layer[];
        zoom?: number;
        center?: LocationValue;
        labelzIndex?: number;
        zooms?: [number, number];
        lang?: Lang;
        defaultCursor?: string;
        crs?: 'EPSG3857' | 'EPSG3395' | 'EPSG4326';
        animateEnable?: boolean;
        isHotspot?: boolean;
        defaultLayer?: TileLayer;
        rotateEnable?: boolean;
        resizeEnable?: boolean;
        showIndoorMap?: boolean;
        // indoorMap?: IndoorMap; // TODO;
        expandZoomRange?: boolean;
        dragEnable?: boolean;
        zoomEnable?: boolean;
        doubleClickZoom?: boolean;
        keyboardEnable?: boolean;
        jogEnable?: boolean;
        scrollWheel?: boolean;
        touchZoom?: boolean;
        touchZoomCenter?: number;
        mapStyle?: string;
        features?: Feature[] | 'all' | Feature;
        showBuildingBlock?: boolean;
        viewMode?: '2D' | '3D';
        pitch?: number;
        pitchEnable?: boolean;
        buildingAnimation?: boolean;
        skyColor?: string;
        preloadMode?: boolean;
        mask?: Array<[number, number]> | Array<Array<[number, number]>> | Array<Array<Array<[number, number]>>>;

        // inner
        baseRender?: 'vw' | 'd' | 'dv' | 'v';
        overlayRender?: 'c' | 'd';
        showLabel?: boolean;
        gridMapForeign?: boolean;
        logoUrl?: string;
        logoUrlRetina?: string;
        copyright?: string;
        rotation?: number; // TODO
        turboMode?: boolean;
        workerMode?: boolean;
        maxPitch?: number;
        // continuousZoomEnable?: boolean;
        // showFog: boolean;
        // yaw: number;
        // scale: number;
        // detectRetina: number;
    }
    interface MapStatus {
        animateEnable: boolean;
        doubleClickZoom: boolean;
        dragEnable: boolean;
        isHotspot: boolean;
        jogEnable: boolean;
        keyboardEnable: boolean;
        pitchEnable: boolean;
        resizeEnable: boolean;
        rotateEnable: boolean;
        scrollWheel: boolean;
        touchZoom: boolean;
        zoomEnable: boolean;
    }

    class Map implements EventEmitter {
        constructor(container: string | HTMLElement, opts?: MapOptions);
        poiOnAMAP(obj: { id: string; location: LocationValue; }): void; // TODO: more test
        detailOnAMAP(obj: { id: string; location: LocationValue; }): void; // TODO: more test
        getZoom(): number;
        // getLayers(): Layer[]; // TODO
        getCenter(): LngLat;
        getContainer(): HTMLElement | null;
        getCity(callback: (cityData: {
            city: string;
            citycode: string;
            district: string;
            province: string | never[]; // province is empty array when getCity fail
        }) => void): void;
        getBounds(): Bounds;
        getLabelzIndex(): number;
        getLimitBounds(): Bounds;
        getLang(): Lang;
        getSize(): Size;
        getRotation(): number;
        getStatus(): MapStatus;
        getDefaultCursor(): string;
        getResolution(point?: LocationValue): number;
        getScale(dpi?: number): number;
        setZoom(level: number): void;
        setLabelzIndex(index: number): void;
        setLayers(layers: Layer[]): void; // TODO
        // add(overlay: Overlay[]): void; // TODO
        // remove(overlay: Overlay[]): void; // TODO
        // getAllOverlay(type?: 'marker' | 'circle' | 'polyline' | 'polygon'): Overlay[];
        setCenter(center: LocationValue): void; // TODO
        setZoomAndCenter(zoomLevel: number, center: LocationValue): void; // TODO
        setCity(city: string, callback: (this: this, coord: [number, number], zoom: number) => void): void; // TODO
        setBounds(bound: Bounds): Bounds;
        setLimitBounds(bound: Bounds): void;
        clearLimitBounds(): void;
        setLang(lang: Lang): void;
        setRotation(rotation: number): void;
        setStatus(status: Partial<MapStatus>): void; // TODO
        setDefaultCursor(cursor: string): void;
        zoomIn(): void;
        zoomOut(): void;
        panTo(position: LocationValue): void; // TODO
        panBy(x: number, y: number): void;
        // setFitView(overlayList?: any[]): void; // TODO
        clearMap(): void;
        destroy(): void;
        plugin(name: string | string[], callback: () => void): this;
        // addControl(obj: Control): void; // TODO
        // removeControl(obj: Control): void; // TODO
        clearInfoWindow(): void;
        pixelToLngLat(pixel: Pixel, level?: number): LngLat;
        lnglatToPixel(lnglat: LocationValue, level?: number): Pixel;
        containerToLngLat(pixel: Pixel, /* boolean, number */): LngLat;
        lngLatToContainer(lnglat: LocationValue): Pixel;
        lnglatTocontainer(lnglat: LocationValue): Pixel;
        setMapStyle(style: string): void;
        getMapStyle(): string;
        setFeatures(feature: Feature | Feature[] | 'all'): void;
        getFeatures(): Feature | Feature[] | 'all';
        // setDefaultLayer(layer: TileLayer): void; // TODO
        setPitch(pitch: number): void;
        getPitch(): number;

        // hotspot event
        on<N extends HotspotEventName, C = this>(
            eventName: N,
            handler: (this: C, event: HotspotEvent<N>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        // maps events
        on<N extends MapsEventName, C = this>(
            eventName: N,
            handler: (this: C, event: MapsEvent<N, this>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        // "pure" events
        on<N extends PureEventName, C = this>(
            eventName: N,
            handler: (this: C, event: Event<N>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;
        // custom event
        on<N extends string, C = this, D = undefined>(
            eventName: N,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: (this: C, event: Event<N, D>) => void,
            context?: C,
            once?: boolean,
            unshift?: boolean
        ): this;

        // hotspot event
        off<N extends HotspotEventName, C = this>(
            eventName: N,
            handler: ((this: C, event: HotspotEvent<N>) => void) | 'mv',
            context?: C
        ): this;
        // maps events
        off<N extends MapsEventName, C = this>(
            eventName: N,
            handler: ((this: C, event: MapsEvent<N, this>) => void) | 'mv',
            context?: C
        ): this;
        // "pure" events
        off<N extends PureEventName, C = this>(
            eventName: N,
            handler: ((this: C, event: Event<N>) => void) | 'mv',
            context?: C
        ): this;
        // custom event
        off<N extends string, C = this, D = undefined>(
            eventName: N,
            // tslint:disable-next-line: no-unnecessary-generics
            handler: ((this: C, event: Event<N, D>) => void) | 'mv',
            context?: C
        ): this;

        // eventName suggestion
        emit<N extends MapsEventName | HotspotEventName | PureEventName>(
            eventName: N,
            data: N extends MapsEventName ? Omit<MapsEvent<N, this>, 'type'>
                : N extends HotspotEventName ? Omit<HotspotEvent<N>, 'type'>
                : undefined
        ): this;
        // fallback
        emit<N extends string>(
            eventName: N,
            data: N extends MapsEventName ? Omit<MapsEvent<N, this>, 'type'>
                : N extends HotspotEventName ? Omit<HotspotEvent<N>, 'type'>
                : N extends PureEventName ? never
                : any
        ): this;
    }
    type HotspotEvent<N extends HotspotEventName> = Event<N, {
        lnglat: LngLat;
        name: string;
        id: string;
        // internal
        isIndoorPOI: boolean;
    }>;
}
