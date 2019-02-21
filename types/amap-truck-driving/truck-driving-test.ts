declare const map: AMap.Map;
declare const lnglat: AMap.LngLat;
declare const lnglatTuple: [number, number];

// $ExpectType TruckDriving
new AMap.TruckDriving({
    size: 1
});
// $ExpectType TruckDriving
const TruckDriving = new AMap.TruckDriving({
    policy: 1,
    size: 2,
    width: 2.5,
    height: 2,
    load: 2,
    weight: 10,
    axlesNum: 3,
    extensions: 'base',
    map,
    panel: 'result',
    hideMarkers: true,
    showTraffic: true,
    isOutline: true,
    outlineColor: 'blue',
    autoFitView: true,
    province: '粤',
    number: '111111'
});

// $ExpectType void
TruckDriving.search([{ lnglat }, { lnglat }]);
// $ExpectType void
TruckDriving.search([{ lnglat: lnglatTuple }, { lnglat: lnglatTuple }]);
// $ExpectType void
TruckDriving.search([{ lnglat }, { lnglat }], (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType LngLat
        result.destination;
        // $ExpectType Poi
        result.end;
        {
            const poi = result.end;
            // $ExpectType LngLat
            poi.location;
            // $ExpectType string
            poi.name;
            // $ExpectType "start" | "end" | "waypoint"
            poi.type;
        }
        // $ExpectType string
        result.info;
        // $ExpectType LngLat
        result.origin;
        // $ExpectType Route[]
        result.routes;
        {
            const route = result.routes[0];
            // $ExpectType number
            route.distance;
            // $ExpectType string
            route.policy;
            // $ExpectType 0 | 1
            route.restriction;
            // $ExpectType Step[]
            route.steps;
            {
                const step = route.steps[0];
                // $ExpectType string
                step.action;
                // $ExpectType string
                step.assistant_action;
                // $ExpectType City[] | undefined
                step.cities;
                if (step.cities) {
                    const city = step.cities[0];
                    // $ExpectType string
                    city.adcode;
                    // $ExpectType string | null
                    city.citycode;
                    // $ExpectType District[] | null
                    city.districts;
                    if (city.districts) {
                        const district = city.districts[0];
                        // $ExpectType string
                        district.adcode;
                        // $ExpectType string
                        district.name;
                    }
                    // $ExpectType string | null
                    city.name;
                }
                // $ExpectType number
                step.distance;
                // $ExpectType LngLat
                step.end_location;
                // $ExpectType string
                step.instruction;
                // $ExpectType string
                step.orientation;
                // $ExpectType LngLat[]
                step.path;
                // $ExpectType string
                step.road;
                // $ExpectType LngLat
                step.start_location;
                // $ExpectType number
                step.time;
                // $ExpectType TMC[] | undefined
                step.tmcs;
                if (step.tmcs) {
                    const tmc = step.tmcs[0];
                    // $ExpectType number
                    tmc.distance;
                    // $ExpectType string | undefined
                    tmc.lcode;
                    // $ExpectType LngLat[]
                    tmc.path;
                    // $ExpectType string
                    tmc.polyline;
                    // $ExpectType string
                    tmc.status;
                }
                // $ExpectType TMCsPath[] | undefined
                step.tmcsPaths;
                if (step.tmcsPaths) {
                    const tmcsPath = step.tmcsPaths[0];
                    // $ExpectType LngLat[]
                    tmcsPath.path;
                    // $ExpectType string
                    tmcsPath.status;
                }
                // $ExpectType number
                step.toll_distance;
                // $ExpectType string
                step.toll_road;
                // $ExpectType number
                step.tolls;
            }
            // $ExpectType number
            route.time;
            // $ExpectType number
            route.tolls;
            // $ExpectType number
            route.tolls_distance;
        }
        // $ExpectType Poi
        result.start;
        // $ExpectType (Poi & { isWaypoint: boolean; })[]
        result.waypoints;
    } else {
        // $ExpectType string
        result;
    }
});
TruckDriving.search([{ keyword: 'start' }, { keyword: 'end' }], (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType SearchResultExt
        result;
        // $ExpectType string
        result.destinationName;
        // $ExpectType PoiExt
        result.end;
        // $ExpectType string
        result.originName;
        // $ExpectType PoiExt
        result.start;
        // (PoiExt & {isWaypoint: boolean})[]
        result.waypoints;
    } else {
        // $ExpectType string
        result;
    }
});

TruckDriving.search([
    { keyword: 'start', city: 'startCity' },
    { keyword: 'end', city: 'endCity' }
]);

// $ExpectType void
TruckDriving.clear();

// $ExpectType void
TruckDriving.setProvinceAndNumber('province', 'number');

TruckDriving.on('complete', (event: AMap.TruckDriving.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;

    if ('start' in event) {
        // $ExpectType LngLat
        event.destination;
        if ('destinationName' in event) {
            // $ExpectType string
            event.destinationName;
            // $ExpectType string
            event.originName;
        }
        event.end;
        // $ExpectType LngLat
        event.origin;
        // $ExpectType Route[]
        event.routes;
        event.start;
        event.waypoints;
    }
});
