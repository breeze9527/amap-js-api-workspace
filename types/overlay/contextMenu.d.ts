declare namespace AMap {
    interface ContextMenuOptions {
        content?: string | HTMLElement;
        // internal
        visible?: boolean;
    }

    interface ContextMenuEventMap<I> {
        items: Event<'items'>;
        open: Event<'open', { target: I }>;
        close: Event<'close', { target: I }>;
    }

    class ContextMenu<ExtraData = any> extends Overlay<ExtraData> {
        constructor(options?: ContextMenuOptions);
        addItem(text: string, fn: (this: HTMLLIElement) => void, num?: number): void;
        removeItem(test: string, fn: (this: HTMLLIElement) => void): void;
        open(map: Map, position: LocationValue): void;
        close(): void;
    }
}
