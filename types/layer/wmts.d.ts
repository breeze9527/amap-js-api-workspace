declare namespace AMap {
    namespace TileLayer {
        interface WMTSGetMapParams {
            Version?: string;
            Layer?: string;
            Style?: string;
            Format?: string;
        }
        interface WMTSOptions extends FlexibleOptions {
            url: string;
            params: WMTSGetMapParams;
            blend?: boolean;
        }
        class WMTS extends Flexible {
            constructor(options: WMTSOptions);
            setUrl(url: string): void;
            getUrl(): string;
            setParams(params: WMTSGetMapParams): void;
            getParams(): WMTSGetMapParams;
        }
    }
}
