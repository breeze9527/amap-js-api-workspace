declare namespace AMap {
    type Geometry = {
        type: 'Point';
        coordinates: [number, number];
    } | {
        type: 'MultiPoint' | 'LineString' | 'Polygon';
        coordinates: Array<[number, number]>;
    } | {
        type: 'MultiLineString' | 'MultiPolygon';
        coordinates: Array<Array<[number, number]>>;
    } | {
        type: 'GeometryCollection';
        geometries: Geometry[];
    };

    type GeoJSONObject = {
        type: 'Feature';
        properties: any;
        geometry: Geometry;
    } | {
        type: 'FeatureCollection',
        properties: any;
        features: GeoJSONObject[];
    };
    interface GeoJSONOptions {
        geoJSON?: GeoJSONObject | GeoJSONObject[];
        getMarker?(obj: GeoJSONObject, lnglat: LngLat): Marker;
        getPolyline?(obj: GeoJSONObject, lnglats: LngLat[]): Polyline;
        getPolygon?(obj: GeoJSONObject, lnglats: LngLat[]): Polygon;
        coordsToLatLng?(lnglat: LngLat): LngLat;

        // internal
        coordsToLatLngs?(lnglats: LngLat[]): LngLat[];
    }

    class GeoJSON<ExtraData = any> extends OverlayGroup<Overlay, ExtraData> {
        constructor(options?: GeoJSONOptions);
        importData(obj: GeoJSONObject | GeoJSONObject[]): void;
        toGeoJSON(): GeoJSONObject[];
    }
}
