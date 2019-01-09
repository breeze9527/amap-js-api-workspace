testWrapper(() => {
    const map = new AMap.Map('map');
    const center = map.getCenter();
    const northEast = center.offset(5e3, 5e3);
    const southWest = center.offset(-5e3, -5e3);
    const bounds = new AMap.Bounds(southWest, northEast);
    const url = 'http://175.6.10.239/69747080F9D4771CB00323AF1/03000801005C32332839E3E01233E8BD5FBED6-7282-4A97-8DD0-94A7404EA323.mp4?ccode=0501&duration=66&expire=18000&psid=dea4c6f6c685d02d8e337a6297473396&ups_client_netip=778935ee&ups_ts=1547026673&ups_userid=&utid=4a68FFM1IkYCAXeJNe6btPQ0&vid=XNDAwMDE3MDkyOA&vkey=Aaf80aa00db07cd1502ea11536aacd8aa&sp=&ali_redirect_domain=ykugc.cp31.ott.cibntv.net&ali_redirect_ex_ftag=1b2bec18945f525f63d8da31b134def60a3a161532e318cf&ali_redirect_ex_tmining_ts=1547026693&ali_redirect_ex_tmining_expire=3600&ali_redirect_ex_hot=0';

    const videoLayer = new AMap.VideoLayer({
        map,
        bounds,
        visible: true,
        zooms: [3, 15],
        opacity: 0.7
    });

    test('new ImageLayer(options)', videoLayer);

    test('ImageLayer#setMap(null)', videoLayer.setMap(null));
    test('ImageLayer#setMap(Map)', videoLayer.setMap(map));

    test('ImageLayer#getMap(Map)', videoLayer.getMap());

    test('ImageLayer#getBounds', videoLayer.getBounds());

    test('ImageLayer#setBounds', videoLayer.setBounds(bounds));

    test('ImageLayer#hide', videoLayer.hide());

    test('ImageLayer#show', videoLayer.show());

    test('ImageLayer#setzIndex', videoLayer.setzIndex(10));

    test('ImageLayer#getzIndex', videoLayer.getzIndex());

    test('ImageLayer#getElement', videoLayer.getElement());

    test('ImageLayer#getImageUrl', videoLayer.getVideoUrl());

    test('ImageLayer#setImageUrl', videoLayer.setVideoUrl(url));

    return {
        map,
        videoLayer
    }
});
