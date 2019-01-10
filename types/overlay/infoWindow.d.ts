declare namespace AMap {
    interface InfoWindowEventMap<I> {
        change: Event<'change', { target: I }>;
        open: Event<'open', { target: I }>;
        close: Event<'close', { target: I }>;
    }

    interface InfoWindowOptions<ExtraData = any> extends OverlayOptions<ExtraData> {
        isCustom?: boolean;
        autoMove?: boolean;
        closeWhenClickMap?: boolean;
        content?: string | HTMLElement;
        size?: SizeValue;
        offset?: Pixel;
        position?: LocationValue;
        showShadow?: boolean;
        // internal
        height?: number;
    }

    class InfoWindow<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: InfoWindowOptions);
        open(map: Map, position?: LocationValue): void;
        close(): void;
        getIsOpen(): boolean;
        setContent(content: string | HTMLElement): void;
        getContent(): string | HTMLElement | undefined;
        setPosition(lnglat: LocationValue): void;
        getPosition(): LngLat | undefined;
        setSize(size: SizeValue): void;
        getSize(): Size | undefined;
        // internal
        setOffset(offset: Pixel): void;
    }
}
