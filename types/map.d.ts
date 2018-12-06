declare namespace AMap {
    type Lang = 'zh_cn' | 'en' | 'zh_en';
    type Feature = 'bg' | 'point' | 'road' | 'building';
    type LocationValue = LngLat | [number, number];
    interface MapOptions {
        // view: View2D; // TODO
        // layers: any[]; // TODO
        zoom?: number;
        center?: LocationValue;
        labelzIndex?: number;
        zooms?: [number, number];
        lang?: Lang;
        defaultCursor?: string;
        crs?: 'EPSG3857' | 'EPSG3395' | 'EPSG4326';
        animateEnable?: boolean;
        isHotspot?: boolean;
        // defaultLayer: TileLayer; // TODO
        rotateEnable?: boolean;
        resizeEnable?: boolean;
        showIndoorMap?: boolean;
        indoorMap?: any; // TODO;
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
        features?: Feature[] | string;
        showBuildingBlock?: boolean;
        viewMode?: '2D' | '3D';
        pitch?: number; // TODO : 俯仰角度，默认0，[0,83]，2D地图下无效 。（自V1.4.0开始支持）
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
        isHotSpot: boolean;
        jogEnable: boolean;
        keyboardEnable: boolean;
        pitchEnable: boolean;
        resizeEnable: boolean;
        scrollWheel: boolean;
        touchZoom: boolean;
        zoomEnable: boolean;
    }
    class Map {
        constructor(container: string | HTMLElement, opts?: MapOptions);
        poiOnAMAP(obj: { id: string; location: LocationValue; }): void; // TODO: more test
        detailOnAMAP(obj: { id: string; location: LocationValue; }): void; // TODO: more test
        getZoom(): number;
        // getLayers(): Layer[]; // TODO
        getCenter(): LngLat;
        getContainer(): HTMLElement;
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
        getScale(dpi?: number): void;
        setZoom(level: number): void;
        setLabelzIndex(index: number): void;
        setLayers(layers: Layer[]): void; // TODO
        // add(overlay: Overlay[]): void; // TODO
        // remove(overlay: Overlay[]): void; // TODO
        // getAllOverlay(type?: 'marker' | 'circle' | 'polyline' | 'polygon'): Overlay[];
        setCenter(center: LngLat): void; // TODO
        setZoomAndCenter(zoomLevel: number, center: LocationValue): void; // TODO
        // setCity(city: string, callback: any ): void; // TODO
        setBounds(bound: Bounds): Bounds;
        setLimitBounds(bound: Bounds): void;
        clearLimitBounds(): void;
        setLang(lang: Lang): void;
        setRotation(rotation: number): void;
        setStatus(status: MapStatus): void; // TODO
        setDefaultCursor(cursor: string): void;
        zoomIn(): void;
        zoomOut(): void;
        panTo(position: LocationValue): void; // TODO
        panBy(x: number, y: number): void;
        setFitView(overlayList?: any[]): void; // TODO
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
        // on(eventName: EventName, handler) // TODO
    }
}
