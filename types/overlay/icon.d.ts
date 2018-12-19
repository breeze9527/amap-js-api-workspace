declare namespace AMap {
    interface IconOptions {
        size?: SizeValue;
        imageOffset?: Pixel;
        image?: string;
        imageSize?: SizeValue;
    }

    class Icon extends EventEmitter {
        constructor(options?: IconOptions);
        setImageSize(size: SizeValue): void;
        getImageSize(): Size;
    }
}