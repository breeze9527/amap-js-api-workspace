// TypeScript Version: 2.8

/// <reference types="core" />
declare namespace AMap {
    namespace ElasticMarker {
        interface EventMap<I extends EventEmitter> extends Marker.EventMap<I> {
            allLoaded: Event<'allLoaded', { target: I }>;
        }
        type LabelPosition = 'BM' | 'BL' | 'BR' | 'ML' | 'MR' | 'TL' | 'TM' | 'TR';
        interface Style {
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
                position?: LabelPosition;
                offset?: [number, number];
                minZoom?: number;
            };
        }
        interface Options<ExtraData = any> extends Marker.Options<ExtraData> {
            styles: Style[];
            zoomStyleMapping: Record<string, number>;
        }
    }
    class ElasticMarker<ExtraData = any> extends Marker<ExtraData> {
        constructor(options: ElasticMarker.Options<ExtraData>);
    }
}
