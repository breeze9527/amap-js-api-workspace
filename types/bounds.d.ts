declare namespace AMap {
    class Bounds {
        constructor(southWest: LngLat, northEast: LngLat);
        contains(point: LngLat): boolean; // TODO
        getCenter(): LngLat;
        getSouthWest(): LngLat;
        getNorthEast(): LngLat;
        toString(): string;
    }
}
