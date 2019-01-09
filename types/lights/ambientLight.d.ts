declare namespace AMap {
    namespace Lights {
        class AmbientLight {
            constructor(color: [number, number, number], intensity: number);
            setColor(color: [number, number, number]): void;
            setIntensity(intensity: number): void;
        }
    }
}
