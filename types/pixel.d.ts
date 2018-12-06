declare namespace AMap {
    class Pixel {
        constructor(x: number, y: number);
        getX(): number;
        getY(): number;
        equals(point: Pixel): boolean;
        toString(): string;
    }
}
