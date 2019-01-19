interface City {
    lnglat: [number, number];
    name: string;
    style: number;
}
declare const citys: City[];

testWrapper(() => {
    const style: AMap.MassMarks.Style[] = [
        {
            url: 'https://a.amap.com/jsapi_demos/static/images/mass0.png',
            anchor: new AMap.Pixel(6, 6),
            size: new AMap.Size(11, 11),
            rotation: 20
        },
        {
            url: 'https://a.amap.com/jsapi_demos/static/images/mass1.png',
            anchor: new AMap.Pixel(4, 4),
            size: new AMap.Size(7, 7)
        },
        {
            url: 'https://a.amap.com/jsapi_demos/static/images/mass2.png',
            anchor: new AMap.Pixel(3, 3),
            size: new AMap.Size(5, 5)
        }
    ]
    const cities1 = citys.map(item => ({ ...item }));
    const cities2 = citys.map(({ lnglat }) => ({
        lnglat: new AMap.LngLat(lnglat[0], lnglat[1])
    }));

    const map = new AMap.Map('map', {
        zoom: 5
    });
    const layerOption: AMap.Layer.Options = {
        map
    }
    interface MassMarksData {
        lnglat: AMap.LocationValue;
    }
    const massMarksLayer = new AMap.MassMarks<MassMarksData>(cities1, {
        map,

        cursor: 'default',
        alwayRender: true,
        style
    });

    testLayer(massMarksLayer);
    test('MassMarker#setStyle', massMarksLayer.setStyle(style[0]));
    test('MassMarker#setStyle(array)', massMarksLayer.setStyle(style));
    test('MassMarker#getStyle', massMarksLayer.getStyle());
    test('MassMarker#clear', massMarksLayer.clear());
    test('MassMarker#setData', massMarksLayer.setData(cities2));
    test('MassMarker#setData', massMarksLayer.setData(cities1));
    test('MassMarker#getData', massMarksLayer.getData());
    test('MassMarker#getData().lnglat', massMarksLayer.getData()[0].lnglat.getLat());
});