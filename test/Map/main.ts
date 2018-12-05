var container = document.getElementById('map')!;
var map = new AMap.Map(container);
var mapCenter = map.getCenter();
var bounds = map.getBounds();
var mapStatus = map.getStatus();
var mapZoom = map.getZoom();
var mapCenterTuple: [number, number] = [mapCenter.getLng(), mapCenter.getLat()];
var mapCenterPixelPixel = map.lnglatToPixel(mapCenter);
var mapStyle = map.getMapStyle();
var mapPitch = map.getPitch();

test('Map#getZoom', mapZoom);
test('Map#getCenter', mapCenter);
test('Map#getContainer', map.getContainer());
map.getCity(result => {
    test('Map#getCity', result);
})
test('Map#getBounds', bounds);
test('Map#getLabelzIndex', map.getLabelzIndex());
test('Map#getLang', map.getLang());
test('Map#getSize', map.getSize());
test('Map#getRotation', map.getRotation());
test('Map#getStatus', mapStatus);
test('Map#getDefaultCursor', map.getDefaultCursor());

test('Map#getResolution', map.getResolution());
test('Map#getResolution(LngLat)', map.getResolution(mapCenter));
test('Map#getResolution([number, number])', map.getResolution(mapCenterTuple));

test('Map#getScale', map.getScale());
test('Map#getScale(number)', map.getScale(96));

test('Map#setZoom(level)', map.setZoom(1));
test('Map#setlabelzIndex(number)', map.setLabelzIndex(9));
test('Map#setCenter', map.setCenter(mapCenter));
test('Map#setZoomAndCenter', map.setZoomAndCenter(13, mapCenter));
test('Map#setBounds', map.setBounds(bounds));
test('Map#setLimitBounds', map.setLimitBounds(bounds));
test('Map#clearLimitBounds', map.clearLimitBounds());
test('Map#setLang', map.setLang('zh_en'));
test('Map#setRotation', map.setRotation(2));
test('Map#setStatus', map.setStatus(mapStatus));
test('Map#setDefaultCursor', map.setDefaultCursor('default'));
test('Map#zoomIn', map.zoomIn());
test('Map#zoomOut', map.zoomOut());
test('Map#panTo', map.panTo(mapCenter));
test('Map#panBy', map.panBy(1, 1));
test('Map#setFitView', map.setFitView());
test('Map#clearMap', map.clearMap());
// test('Map#addControl', map.addControl()); // TODO
// test('Map#removeControl', map.removeControl()); // TODO
test('Map#clearInfoWindow', map.clearInfoWindow());

test('Map#pixelToLngLat', map.pixelToLngLat(mapCenterPixelPixel));
test('Map#pixelToLngLat', map.pixelToLngLat(mapCenterPixelPixel, mapZoom));

test('Map#lnglatToPixel', mapCenterPixelPixel);
test('Map#lnglatToPixel', map.lnglatToPixel(mapCenter, mapZoom));
test('Map#lnglatToPixel', map.lnglatToPixel(mapCenterTuple));

test('Map#containerToLngLat', map.containerToLngLat(mapCenterPixelPixel));
test('Map#lngLatToContainer', map.lngLatToContainer(mapCenterTuple));
test('Map#lnglatToContainer', map.lnglatTocontainer(mapCenterTuple));

test('Map#setMapStyle', map.setMapStyle(mapStyle));
test('Map#getMapStyle', map.getMapStyle());

test('Map#setFeatures', map.setFeatures('all'));
test('Map#setFeatures', map.setFeatures('bg'));
test('Map#setFeatures', map.setFeatures(['bg', 'building']));

test('Map#getFeatures', map.getFeatures());

test('Map#setPitch', map.setPitch(mapPitch));
test('Map#getPitch', mapPitch);
// setFitView