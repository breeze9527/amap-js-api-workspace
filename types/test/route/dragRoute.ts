import {
    map,
    lnglat,
    lnglatTuple,
    icon,
    markerShape
} from '../preset';

interface CustomData {
    test: number;
}
const polyOptions: AMap.Polyline.Options<CustomData> = {
    zIndex: 10,
    bubble: true,
    cursor: 'default',
    geodesic: true,
    isOutline: true,
    borderWeight: 1,
    outlineColor: '#AA0000',
    path: [lnglat],
    strokeColor: '#0000AA',
    strokeOpacity: 0.5,
    strokeWeight: 10,
    strokeStyle: 'dashed',
    strokeDasharray: [20, 10, 20],
    lineJoin: 'bevel',
    lineCap: 'butt',
    draggable: true,
    extData: { test: 1 },
    showDir: true
};
const markerOptions: AMap.Marker.Options<CustomData> = {
    position: lnglat,
    offset: pixel,
    icon: 'iconUrl',
    content: 'htmlString',
    topWhenClick: true,
    raiseOnDrag: true,
    cursor: 'default',
    visible: true,
    zIndex: 10,
    angle: 10,
    autoRotation: true,
    animation: 'AMAP_ANIMATION_BOUNCE',
    shadow: icon,
    title: '123',
    clickable: true,
    shape: markerShape,
    extData: {
        test: 123
    }
};

// $ExpectType DragRoute<any, any, any, any>
new AMap.DragRoute(map, [lnglat, lnglat]);
// $ExpectType DragRoute<any, any, any, any>
new AMap.DragRoute(map, [lnglatTuple, lnglatTuple]);
// $ExpectType DragRoute<any, any, any, any>
new AMap.DragRoute(map, [lnglat, lnglat], AMap.DrivingPolicy.FEE_HIGHWAY);
// $ExpectType DragRoute<any, any, any, any>
new AMap.DragRoute(map, [lnglat, lnglat], AMap.DrivingPolicy.FEE_HIGHWAY, {});
// $ExpectType DragRoute<any, any, any, any>
new AMap.DragRoute(map, [lnglat, lnglat], AMap.DrivingPolicy.FEE_HIGHWAY, {
    polyOptions: {},
    startMarkerOptions: {},
    midMarkerOptions: {},
    endMarkerOptions: {},
    showTraffic: false
});
// $ExpectType DragRoute<CustomData, CustomData, CustomData, CustomData>
const dragRoute = new AMap.DragRoute<CustomData, CustomData, CustomData, CustomData>(map, [lnglat, lnglat], AMap.DrivingPolicy.LEAST_TIME, {
    polyOptions,
    startMarkerOptions: markerOptions,
    midMarkerOptions: markerOptions,
    endMarkerOptions: markerOptions,
    showTraffic: false
});

// $ExpectType void
dragRoute.search();

// $ExpectType LngLat[]
dragRoute.getWays();

// $ExpectType LngLat[]
dragRoute.getRoute();

dragRoute.on('addway', (event: AMap.DragRoute.EventMap<typeof dragRoute>['addway']) => {
    // $ExpectType LngLat | undefined
    event.lnglat;
    // $ExpectType DragRoute<CustomData, CustomData, CustomData, CustomData>
    event.target;
    // $ExpectType "addway"
    event.type;
});

dragRoute.on('complete', (event: AMap.DragRoute.EventMap<typeof dragRoute>['complete']) => {
    // $ExpectType SearchResultBase
    event.data;
    // $ExpectType DragRoute<CustomData, CustomData, CustomData, CustomData>
    event.target;
    // $ExpectType "complete"
    event.type;
});

dragRoute.on('search', (event: AMap.DragRoute.EventMap<typeof dragRoute>['search']) => {
    // $ExpectType SearchResultBase
    event.data;
    // $ExpectType DragRoute<CustomData, CustomData, CustomData, CustomData>
    event.target;
    // $ExpectType "search"
    event.type;
});
