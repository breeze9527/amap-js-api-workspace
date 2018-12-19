declare namespace AMap {
    interface MarkerShapeCircleOptions {
        type: 'circle';
        coords: [number, number, number];
    }
    interface MarkerShapePolyOptions {
        type: 'poly';
        coords: number[];
    }
    interface MarkerShapeRectOptions {
        type: 'rect';
        coords: [number, number, number, number];
    }
    type MarkerShapeOptions = MarkerShapeCircleOptions | MarkerShapePolyOptions | MarkerShapeRectOptions;

    class MarkerShape {
        constructor(options: MarkerShapeOptions);
    }
}
