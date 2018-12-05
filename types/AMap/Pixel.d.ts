declare namespace AMap {
    export class Pixel {
        constructor(x: number, y: number);
        getX(): number;
        getY(): number;
        equals(point: Pixel): boolean;
        toString(): string;
    }
}
