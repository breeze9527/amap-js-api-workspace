declare namespace AMap {
    namespace TileLayer {
        interface WMSGetMapParams {
            VERSION?: string;
            LAYERS?: string;
            STYLES?: string;
            FORMAT?: string;
            TRANSPARENT?: 'TRUE' | 'FALSE';
            BGCOLOR?: string;
            EXCEPTIONS?: string;
            TIME?: string;
            ELEVATION?: string;
        }
        interface WMSOptions extends FlexibleOptions {
            url: string;
            params: WMSGetMapParams;
            blend?: boolean;
        }
        class WMS extends Flexible {
            constructor(options: WMSOptions);
            setUrl(url: string): void;
            getUrl(): string;
            setParams(params: WMSGetMapParams): void;
            getParams(): WMSGetMapParams;
        }
    }
}
