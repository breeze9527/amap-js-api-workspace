// TypeScript Version: 2.8

/// <reference types="core" />
declare namespace AMap {
    namespace AdvancedInfoWindow {
        interface EventMap<I = AdvancedInfoWindow> extends InfoWindow.EventMap<I> {
            complete: (
                Event<'placesearch', { info: string }> |
                Event<'driving', { info: string }> |
                Event<'walking', { info: string }> |
                Event<'transit', { info: string }>
            ); // TODO
            error: Event<'error'>; // TODO
        }
        interface Options<ExtraData = any> extends InfoWindow.Options<ExtraData> {
            /**
             * 结果列表的HTML容器id或容器元素
             */
            panel?: string | HTMLElement;
            /**
             * 设定周边搜索的半径，单位：米
             */
            searchRadius?: number;
            /**
             * 是否支持显示周边搜索
             */
            placeSearch?: boolean;
            /**
             * 是否支持驾车路径规划
             */
            driving?: boolean;
            /**
             * 是否支持步行路径规划
             */
            walking?: boolean;
            /**
             * 是否支持公交路径规划
             */
            transit?: boolean;
            /**
             * 是否支持作为路径规划的起点
             */
            asOrigin?: boolean;
            /**
             * 是否支持作为路径规划的终点
             */
            asDestination?: boolean;
        }
    }

    class AdvancedInfoWindow<ExtraData = any> extends InfoWindow<ExtraData> {
        /**
         * 高级信息窗体
         * @param options 选项
         */
        constructor(options?: AdvancedInfoWindow.Options);
        /**
         * 清除信息窗体在地图上绘制的路线规划或者搜索的结果
         */
        clear(): void;
    }
}
