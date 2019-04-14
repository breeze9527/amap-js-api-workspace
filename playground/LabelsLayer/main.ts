testWrapper(() => {
    const labelsData: AMap.LabelMarker.Options[] = [
        {
            "title": "全聚德烤鸭",
            "position": [116.467456, 39.994996],
            "zooms": [10, 20],
            "opacity": 1,
            "rank": 10,
            "zIndex": 10,
            "icon": {
                "type": "image",
                "image": "https://a.amap.com/jsapi_demos/static/images/poi-marker.png",
                "clipOrigin": [14, 92],
                "clipSize": [50, 68],
                "size": [25, 34],
                "anchor": "bottom-center",
                "angel": 90,
                "retina": true
            },
            "text": {
                "content": "全聚德烤鸭",
                "direction": "left",
                "offset": [0, 0],
                "style": {
                    "fontSize": 15,
                    "fontWeight": "normal",
                    "fillColor": "#666",
                    "strokeColor": "#fff",
                    "strokeWidth": 1
                }
            }
        },
        {
            "position": [116.469412, 39.996412].join(','),
            // "zooms": [10, 20],
            // "opacity": 1,
            "zIndex": 16,
            "icon": {
                "type": "image",
                "image": "https://a.amap.com/jsapi_demos/static/images/poi-marker.png",
                "clipOrigin": [101, 92],
                "clipSize": [50, 68],
                "size": [25, 34],
                "anchor": "bottom-center",
                "angel": 0,
                "retina": true
            },
            "text": {
                // "content": "绥兴盛",
                "direction": "top",
                "offset": [0, 0],
                "style": {
                    "fontSize": 15,
                    "fontWeight": "normal",
                    "fillColor": "#666",
                    "strokeColor": "#fff",
                    "strokeWidth": 1
                }
            }
        },
        {
            "position": new AMap.LngLat(116.471871, 39.995616),
            "zooms": [10, 20],
            "opacity": 1,
            "zIndex": 8,
            "icon": {
                "type": "image",
                "image": "https://a.amap.com/jsapi_demos/static/images/poi-marker.png",
                "clipOrigin": [194, 92],
                "clipSize": [50, 68],
                "size": [25, 34],
                "anchor": "bottom-center",
                "angel": 0,
                "retina": true
            },
            "text": {}
            // "text": {
            //     "content": "香河肉饼",
            //     "direction": "right",
            //     "offset": [0, 0],
            //     "style": {
            //         "fontSize": 15,
            //         "fontWeight": "normal",
            //         "fillColor": "#666",
            //         "strokeColor": "#fff",
            //         "strokeWidth": 1
            //     }
            // }
        }
    ]
    const map = new AMap.Map('map', {
        center: [116.467456, 39.994996]
    });
    const labelMarkers = labelsData.map(opt => new AMap.LabelMarker(opt));
    const labelMarker = labelMarkers[0];
    const labelsLayer = new AMap.LabelsLayer({
        visible: true,
        zIndex: 1000,
        zooms: [3, 20],
        opacity: 0.9
    });
    labelsLayer.setMap(map);

    test('LabelsLayer()', new AMap.LabelsLayer());
    test('LabelsLayer({})', new AMap.LabelsLayer({}));
    test('LabelsLayer(options)', labelsLayer);

    test('LabelMarker()', new AMap.LabelMarker());
    test('LabelMarker({})', new AMap.LabelMarker({}));
    test('LabelMarker(options)', labelMarker);

    test('LabelsLayer#add(LabelMarker)', labelsLayer.add(labelMarker));
    test('LabelsLayer#add(LabelMarker[])', labelsLayer.add(labelMarkers.slice(1)));

    // test('LabelsLayer#remove', labelsLayer.remove(labelMarkers[2]));
    // test('LabelsLayer#clear', labelsLayer.clear());

    test('LabelsLayer#on', labelsLayer.on('click', () => { }, undefined, true));
    test('LabelsLayer#off', labelsLayer.on('click', () => { }, undefined, true));

    test('LabelMarker#setPosition', labelMarker.setPosition([116.43587, 39.97500]));

    test('LabelMarker#getPosition', labelMarker.getPosition());
    test('LabelMarker#getPosition', labelMarkers[1].getPosition());
    test('LabelMarker#getPosition', labelMarkers[2].getPosition());

    test('LabelMarker#getZooms', labelMarker.getZooms());
    test('LabelMarker#getZooms', labelMarkers[1].getZooms());

    test('LabelMarker#setZooms', labelMarker.setZooms([3, 18]));

    test('LabelMarker#getOpacity', labelMarker.getOpacity());
    test('LabelMarker#getOpacity', labelMarkers[1].getOpacity());

    test('LabelMarker#setOpacity', labelMarker.setOpacity(0.8));

    test('LabelMarker#on', labelMarker.on('click', () => { }, undefined, true));
    test('LabelMarker#off', labelMarker.on('click', () => { }, undefined, true));

    labelsLayer.on('click', event => {
        test('LabelsLayer@click$event', event);
    });

    labelMarker.on('click', event => {
        test('LabelMarker@click$event', event);
    });

    return {
        map,
        labelMarkers,
        labelsLayer
    }
});
