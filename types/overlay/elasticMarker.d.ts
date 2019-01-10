declare namespace AMap {
    interface ElasticMarkerEventMap<I extends EventEmitter> extends MarkerEventMap<I> {
        allLoaded: Event<'allLoaded', { target: I }>;
    }
    interface ElasticMarkerStyle {
        icon: {
            img: string;
            size: [number, number];
            ancher: [number, number];
            imageOffset?: [number, number];
            imageSize?: [number, number];
            fitZoom?: number;
            scaleFactor?: number;
            maxScale?: number;
            minScale?: number;
        };
        label?: {
            content: string;
            position?: 'BM' | 'BL' | 'BR' | 'ML' | 'MR' | 'TL' | 'TM' | 'TR';
            offset?: [number, number];
            minZoom?: number;
        };
    }
    interface ElasticMarkerOptions<ExtraData = any> extends MarkerOptions<ExtraData> {
        styles: ElasticMarkerStyle[];
        zoomStyleMapping: Record<string | number, number>;
    }
    class ElasticMarker<ExtraData = any> extends Marker<ExtraData> {
        constructor(options: ElasticMarkerOptions<ExtraData>);
    }
}
