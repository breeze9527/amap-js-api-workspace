// $ExpectType Map
new AMap.Map('map');
// $ExpectType Map
new AMap.Map(div);

// $ExpectType Map
new AMap.Map(div, {});

// $ExpectType Map
const testMap = new AMap.Map(div, {
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
testMap.getZoom();

// $ExpectType Layer[]
testMap.getLayers();

// $ExpectType LngLat
testMap.getCenter();

// $ExpectType HTMLElement | null
testMap.getContainer();

testMap.getCity(city => {
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
testMap.getBounds();

// $ExpectType number
testMap.getLabelzIndex();

// $ExpectType Lang
testMap.getLang();

// $ExpectType Size
testMap.getSize();

// $ExpectType number
testMap.getRotation();

// $ExpectType Status
const mapStatus = testMap.getStatus();
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
testMap.getDefaultCursor();

// $ExpectType number
testMap.getResolution();

// $ExpectType number
testMap.getScale();
// $ExpectType number
testMap.getScale(1);

// $ExpectType void
testMap.setZoom(1);

// $ExpectType void
testMap.setLabelzIndex(1);

// $ExpectType void
testMap.setLayers([tileLayer]);

// $ExpectType void
testMap.setCenter(lnglat);
// $ExpectType void
testMap.setCenter([1, 2]);

// $ExpectType void
testMap.setZoomAndCenter(13, lnglat);
// $ExpectType void
testMap.setZoomAndCenter(13, [1, 2]);

// $ExpectType void
testMap.setCity('city', (coord, zoom) => {
    // $ExpectType string
    coord[0];
    // $ExpectType string
    coord[1];
    // $ExpectType number
    zoom;
});

// $ExpectType Bounds
testMap.setBounds(bounds);

// $ExpectType void
testMap.setLimitBounds(bounds);

// $ExpectType void
testMap.clearLimitBounds();

// $ExpectType void
testMap.setLang('zh_cn');

// $ExpectType void
testMap.setRotation(1);

// $ExpectType void
testMap.setStatus({});
// $ExpectType void
testMap.setStatus({
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
testMap.setDefaultCursor('default');

// $ExpectType void
testMap.zoomIn();

// $ExpectType void
testMap.zoomOut();

// $ExpectType void
testMap.panTo([1, 2]);
// $ExpectType void
testMap.panTo(lnglat);

// $ExpectType void
testMap.panBy(1, 2);

// $ExpectType void
testMap.clearMap();

// $ExpectType Map
testMap.plugin('plugin name', () => { });
// $ExpectType Map
testMap.plugin(['plugin name'], () => { });

// $ExpectType void
testMap.clearInfoWindow();

// $ExpectType LngLat
testMap.pixelToLngLat(pixel);
// $ExpectType LngLat
testMap.pixelToLngLat(pixel, 1);

// $ExpectType Pixel
testMap.lnglatToPixel(lnglat);
// $ExpectType Pixel
testMap.lnglatToPixel(lnglat, 1);

// $ExpectType LngLat
testMap.containerToLngLat(pixel);

// $ExpectType Pixel
testMap.lngLatToContainer(lnglat);
// $ExpectType Pixel
testMap.lnglatTocontainer(lnglat);

// $ExpectType void
testMap.setMapStyle('');
// $ExpectType string
testMap.getMapStyle();

// $ExpectType void
testMap.setFeatures('all');
// $ExpectType void
testMap.setFeatures(['bg']);

const feature: 'all' | 'bg' | 'point' | 'road' | 'building' | AMap.Map.Feature[] = testMap.getFeatures();

// $ExpectType void
testMap.setDefaultLayer(tileLayer);

// $ExpectType void
testMap.setPitch(1);
// $ExpectType number
testMap.getPitch();

// $ExpectType ViewMode
testMap.getViewMode_();

// $ExpectType Pixel
testMap.lngLatToGeodeticCoord(lnglat);
// $ExpectType Pixel
testMap.lngLatToGeodeticCoord(lnglatTuple);

// $ExpectType LngLat
testMap.geodeticCoordToLngLat(pixel);

// $ExpectType void
testMap.destroy();

declare function dblClickHandler(this: AMap.Map, event: AMap.Map.EventMap['dblclick']): void;

// $ExpectType Map
testMap.on('click', (event: AMap.Map.EventMap['click']) => {
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
testMap.on('dblclick', dblClickHandler);
// $ExpectType Map
testMap.on('complete', (event: AMap.Map.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectError
    event.value;
});
// $ExpectType Map
testMap.on('hotspotclick', (event: AMap.Map.EventMap['hotspotclick']) => {
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
testMap.on('custom', (event: AMap.Event<'custom', { test: string }>) => {
    // $ExpectType "custom"
    event.type;
    // $ExpectType string
    event.test;
});

// $ExpectType Map
testMap.off('dblclick', dblClickHandler);
// $ExpectType Map
testMap.off('click', 'mv');

// $ExpectType Map
testMap.emit('click', {
    target: testMap,
    lnglat,
    pixel
});

testMap.emit('complete');
// $ExpectType Map
testMap.emit('hotspotclick', {
    lnglat,
    name: '123',
    id: '123',
    isIndoorPOI: true
});
// $ExpectType Map
testMap.emit('custom', {
    test: 1
});
// $ExpectType Map
testMap.emit('custom', undefined);
