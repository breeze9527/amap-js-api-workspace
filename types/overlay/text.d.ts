declare namespace AMap {
    interface TextOptions extends MarkerOptions {
        text?: string;
        textAlign?: 'left' | 'right' | 'center';
        verticalAlign?: 'top' | 'middle' | 'bottom';
    }
    class Text extends Marker {
        constructor(options?: TextOptions);
        getText(): string;
        setText(text: string): void;
        setStyle(style: object): void;
    }
}
