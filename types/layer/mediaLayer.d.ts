declare namespace AMap {
    interface MediaLayerOptions extends LayerOptions {
        bounds?: Bounds;
        visible?: boolean;
        zooms?: [number, number];
        opacity?: number;
    }

    abstract class MediaLayer<E extends HTMLElement> extends Layer {
        constructor(options?: MediaLayerOptions);
        setBounds(bounds: Bounds): void;
        getBounds(): Bounds;
        setOptions(options: Partial<MediaLayerOptions>): void;
        getOptions(): Partial<MediaLayerOptions>;
        getElement(): E | null;
    }

    class ImageLayer extends MediaLayer<HTMLImageElement> {
        setImageUrl(url: string): void;
        getImageUrl(): string | undefined;
    }

    class VideoLayer extends MediaLayer<HTMLVideoElement> {
        setVideoUrl(source: string | string[]): void;
        getVideoUrl(): string | string[] | undefined;
    }

    class CanvasLayer extends MediaLayer<HTMLCanvasElement> {
        setCanvas(canvas: HTMLCanvasElement): void;
        getCanvas(): HTMLCanvasElement | undefined;
        reFresh(): void;
    }
}
