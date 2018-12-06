declare namespace AMap {
    class LngLat {
        constructor(lng: number, lat: number, noAutofix?: boolean);
        offset(x: number, s: number): LngLat;
        distance(lnglat: LngLat | LngLat[]): number;
        getLng(): number;
        getLat(): number;
        equals(lnglat: LngLat): boolean;
        toString(): string;
    }
}
