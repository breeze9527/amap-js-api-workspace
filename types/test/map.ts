declare var container: HTMLDivElement;
declare var tileLayer: AMap.TileLayer;
declare var bounds: AMap.Bounds;
declare var center: AMap.LngLat;
declare var pixel: AMap.Pixel;

// declare var indoorMap: AMap.IndoorMap

// $ExpectType Map
new AMap.Map('map');
// $ExpectType Map
new AMap.Map(container);

// $ExpectType Map
var map = new AMap.Map(container, {});

// $ExpectType Map
var map2 = new AMap.Map(container, {
    layers: [tileLayer],
    zoom: 15,
    center: [1, 2],
    labelzIndex: 110,
    zooms: [5, 15],
    lang: 'zh_cn',
    defaultCursor: 'default',
    crs: 'EPSG4326',
    animateEnable: true,
    isHotspot: false,
    defaultLayer: tileLayer,
    rotateEnable: true,
    resizeEnable: true,
    showIndoorMap: true,
    // indoorMap, // TODO
    expandZoomRange: true,
    dragEnable: true,
    zoomEnable: true,
    doubleClickZoom: true,
    keyboardEnable: true,
    jogEnable: true,
    scrollWheel: true,
    touchZoom: true,
    mapStyle: '',
    features: ['road'],
    showBuildingBlock: true,
    skyColor: '#fff',
    preloadMode: true,
    mask: [[1, 2], [2, 3], [3, 4]]
});

// $ExpectType number
map.getZoom();

// $ExpectType Layer[]
map.getLayers();

// $ExpectType LngLat
map.getCenter();

// $ExpectType HTMLElement | null
map.getContainer();

map.getCity(city => {
    // $ExpectType string
    city.city;
    // $ExpectType string
    city.citycode;
    // $ExpectType string
    city.district;
    // $ExpectType string | never[]
    city.province;
});

// $ExpectType Bounds
map.getBounds();

// $ExpectType number
map.getLabelzIndex();

// $ExpectType Lang
map.getLang();

// $ExpectType Size
map.getSize();

// $ExpectType number
map.getRotation();

// $ExpectType MapStatus
var mapStatus = map.getStatus();
// $ExpectType boolean
mapStatus.animateEnable;
// $ExpectType boolean
mapStatus.doubleClickZoom;
// $ExpectType boolean
mapStatus.dragEnable;
// $ExpectType boolean
mapStatus.isHotspot;
// $ExpectType boolean
mapStatus.jogEnable;
// $ExpectType boolean
mapStatus.keyboardEnable;
// $ExpectType boolean
mapStatus.pitchEnable;
// $ExpectType boolean
mapStatus.resizeEnable;
// $ExpectType boolean
mapStatus.rotateEnable;
// $ExpectType boolean
mapStatus.scrollWheel;
// $ExpectType boolean
mapStatus.touchZoom;
// $ExpectType boolean
mapStatus.zoomEnable;

// $ExpectType string
map.getDefaultCursor();

// $ExpectType number
map.getResolution();

// $ExpectType number
map.getScale();
// $ExpectType number
map.getScale(1);

// $ExpectType void
map.setZoom(1);

// $ExpectType void
map.setLabelzIndex(1);

// $ExpectType void
map.setLayers([tileLayer]);

// $ExpectType void
map.setCenter(center);
// $ExpectType void
map.setCenter([1, 2]);

// $ExpectType void
map.setZoomAndCenter(13, center);
// $ExpectType void
map.setZoomAndCenter(13, [1, 2]);

// $ExpectType void
map.setCity('city', (coord, zoom) => {
    // $ExpectType number
    coord[0];
    // $ExpectType number
    coord[1];
    // $ExpectType number
    zoom;
});

// $ExpectType Bounds
map.setBounds(bounds);

// $ExpectType void
map.setLimitBounds(bounds);

// $ExpectType void
map.clearLimitBounds();

// $ExpectType void
map.setLang('zh_cn');

// $ExpectType void
map.setRotation(1);

// $ExpectType void
map.setStatus({});
// $ExpectType void
map.setStatus({
    animateEnable: true,
    doubleClickZoom: true,
    dragEnable: true,
    isHotspot: true,
    jogEnable: true,
    keyboardEnable: true,
    pitchEnable: false,
    resizeEnable: false,
    rotateEnable: false,
    scrollWheel: true,
    touchZoom: true,
    zoomEnable: true
});

// $ExpectType void
map.setDefaultCursor('default');

// $ExpectType void
map.zoomIn();

// $ExpectType void
map.zoomOut();

// $ExpectType void
map.panTo([1, 2]);
// $ExpectType void
map.panTo(center);

// $ExpectType void
map.panBy(1, 2);

// $ExpectType void
map.clearMap();

// $ExpectType Map
map.plugin('plugin name', () => { });
// $ExpectType Map
map.plugin(['plugin name'], () => { });

// $ExpectType void
map.clearInfoWindow();

// $ExpectType LngLat
map.pixelToLngLat(pixel);
// $ExpectType LngLat
map.pixelToLngLat(pixel, 1);

// $ExpectType Pixel
map.lnglatToPixel(center);
// $ExpectType Pixel
map.lnglatToPixel(center, 1);

// $ExpectType LngLat
map.containerToLngLat(pixel);

// $ExpectType Pixel
map.lngLatToContainer(lnglat);
// $ExpectType Pixel
map.lnglatTocontainer(lnglat);

// $ExpectType void
map.setMapStyle('');
// $ExpectType string
map.getMapStyle();

// $ExpectType void
map.setFeatures('all');
// $ExpectType void
map.setFeatures(['bg']);

// $ExpectType "bg" | "point" | "road" | "building" | Feature[] | "all"
map.getFeatures();

// $ExpectType void
map.setDefaultLayer(tileLayer);

// $ExpectType void
map.setPitch(1);
// $ExpectType number
map.getPitch();

declare function dblClickHandler(this: AMap.Map, event: AMap.MapsEvent<'dblclick', AMap.Map>): void;

// $ExpectType Map
map.on('click', function (event) {
    // $ExpectType "click"
    event.type;
    // $ExpectType Pixel
    event.pixel;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType Map
    event.target;
});
// $ExpectType Map
map.on('dblclick', dblClickHandler);
// $ExpectType Map
map.on('complete', event => {
    // $ExpectType "complete"
    event.type;
    // $ExpectError
    event.value;
});
// $ExpectType Map
map.on('click', function () {
    // $ExpectType number
    this.test;
}, { test: 1 });
// $ExpectType Map
map.on('hotspotclick', event => {
    // $ExpectType string
    event.id;
    // $ExpectType LngLat
    event.lnglat;
    // $ExpectType string
    event.name;
    // $ExpectType "hotspotclick"
    event.type;
});
// $ExpectType Map
map.on('custom', (event: AMap.Event<'custom', { test: string }>) => {
    // $ExpectType "custom"
    event.type;
    // $ExpectType string
    event.test;
});

// $ExpectType Map
map.off('dblclick', dblClickHandler);
// $ExpectError
map.off('dblclick', dblClickHandler, { test: 1 });
// $ExpectError
map.off('click', dblClickHandler);
// $ExpectType Map
map.off('click', 'mv');

// $ExpectType Map
map.emit('click', {
    target: map,
    lnglat: center,
    pixel
});
// $ExpectError
map.emit('click');
// $ExpectType Map
map.emit('complete');
// $ExpectType Map
map.emit('hotspotclick', {
    lnglat: center,
    name: '123',
    id: '123',
    isIndoorPOI: true
});
// $ExpectType Map
map.emit('custom', {
    test: 1
});
// $ExpectType Map
map.emit('custom', undefined);
// $ExpectError
map.emit('custom');

// $ExpectType void
map.destroy();
