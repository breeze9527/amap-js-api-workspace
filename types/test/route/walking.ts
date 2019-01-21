import {
    map,
    lnglat,
    lnglatTuple
} from '../preset';

// $ExpectType Walking
new AMap.Walking();
// $ExpectType Walking
new AMap.Walking({});
// $ExpectType Walking
const walking = new AMap.Walking({
    map,
    panel: 'panel',
    hideMarkers: true,
    isOutline: true,
    outlineColor: 'color',
    autoFitView: true
});

// $ExpectType void
walking.search(lnglat, lnglat);
// $ExpectType void
walking.search(lnglatTuple, lnglatTuple, (status, result) => {
    const temp: 'complete' | 'no_data' | 'error' = status;
    // $ExpectType string | SearchResultBase
    result;
    if (typeof result !== 'string') {
        result.count;
        // $ExpectType number
        result.count;
        // $ExpectType LngLat
        result.destination;
        // $ExpectType Poi | undefined
        const end = result.end;
        if (end) {
            // $ExpectType LngLat
            end.location;
            // $ExpectType string
            end.name;
            const type: 'start' | 'end' = end.type; // $ExpectType
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
            // $ExpectType Step[]
            route.steps;
            {
                const step = route.steps[0];
                // $ExpectType string
                step.action;
                // $ExpectType string
                step.assistant_action;
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
            }
            // $ExpectType number
            route.time;
        }
        // $ExpectType Poi | undefined
        result.start;
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
walking.search([{ keyword: 'origin' }, { keyword: 'destination' }]);
// $ExpectType void
walking.search([{ keyword: 'origin' }, { keyword: 'destination' }], (status, result) => {
    const temp: 'complete' | 'no_data' | 'error' = status;
    // $ExpectType string | SearchResultExt
    result;
    if (typeof result !== 'string') {
        // $ExpectType number
        result.count;
        // $ExpectType LngLat
        result.destination;
        // $ExpectType string
        result.destinationName;
        // $ExpectType PoiExt
        result.end;
        // $ExpectType string
        result.info;
        // $ExpectType LngLat
        result.origin;
        // $ExpectType string
        result.originName;
        // $ExpectType Route[]
        result.routes;
        // $ExpectType PoiExt
        result.start;
    }
});

// $ExpectType void
walking.clear();

walking.on('complete', (event: AMap.Walking.EventMap['complete']) => {
    // $ExpectType number
    event.count;
    // $ExpectType LngLat
    event.destination;
    // $ExpectType string
    event.info;
    // $ExpectType LngLat
    event.origin;
    // $ExpectType Route[]
    event.routes;
    // $ExpectType "complete"
    event.type;
    if ('originName' in event) {
        // $ExpectType string
        event.originName;
        // $ExpectType PoiExt
        event.start;
        // $ExpectType LngLat
        event.destination;
        // $ExpectType PoiExt
        event.end;
    } else {
        // $ExpectType Poi | undefined
        event.end;
        // $ExpectType Poi | undefined
        event.start;
    }
});

walking.on('error', (event: AMap.Walking.EventMap['error']) => {
    // $ExpecType string
    event.info;
    // $ExpecType "error"
    event.type;
});
