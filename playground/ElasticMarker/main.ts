testPluginWrapper('ElasticMarker', () => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map', {
        zooms: [14, 20]
    });
    const lnglat = map.getCenter();

    const elasticMarker = new AMap.ElasticMarker<ExtraData>({
        zooms: [14, 20],
        styles: [
            {
                icon: {
                    img: 'http://img3.a0bi.com/upload/ttq/20140813/1407909487249.jpg',
                    size: [200, 200],
                    ancher: [0, 0]
                }
            },
            {
                icon: {
                    img: 'http://img2.a0bi.com/upload/ttq/20140813/1407909493108.jpg',
                    size: [200, 200],
                    ancher: [0, 0],
                    imageOffset: [0, 0],
                    imageSize: [20, 20],
                    fitZoom: 14,
                    scaleFactor: 2,
                    // maxScale: 2,
                    // minScale: 1
                },
                label: {
                    content: 'Content',
                    position: 'BM',
                    offset: [10, 10],
                    minZoom: 13
                }
            }
        ],
        zoomStyleMapping: {
            "14": 0,
            "15": 0,
            "16": 1,
            "17": 1,
            "18": 1,
            "19": 1,
            "20": 1
        },
        map,
        position: lnglat,
        topWhenClick: false,
        bubble: false,
        draggable: true,
        cursor: 'pointer',
        visible: true,
        zIndex: 10,
        clickable: false,
        extData: { test: 1 }
    });

    test('new ElasticMarker(options)', elasticMarker);

    test('ElasticMarker@click', elasticMarker.on('click', event => {
        test('ElasticMarker@click$event', event);
    }));

    test('ElasticMarker@allLoaded', elasticMarker.on('allLoaded', event => {
        test('ElasticMarker@allLoaded$event', event);
    }));

    test('ElasticMarker#setClickable', elasticMarker.setClickable(true));

    test('ElasticMarker#getClickable', elasticMarker.getClickable());

    test('ElasticMarker#setPosition', elasticMarker.setPosition(lnglat));

    test('ElasticMarker#getPosition', elasticMarker.getPosition());

    test('ElasticMarker#setzIndex', elasticMarker.setzIndex(10));

    test('ElasticMarker#setzIndex', elasticMarker.getzIndex());

    test('ElasticMarker#setDraggable', elasticMarker.setDraggable(true));

    test('ElasticMarker#getDraggable', elasticMarker.getDraggable());

    test('ElasticMarker#hide', elasticMarker.hide());

    test('ElasticMarker#show', elasticMarker.show());

    test('ElasticMarker#setCursor', elasticMarker.setCursor('pointer'));

    test('ElasticMarker#setMap(null)', elasticMarker.setMap(null));
    test('ElasticMarker#setMap(map)', elasticMarker.setMap(map));

    test('ElasticMarker#getMap(map)', elasticMarker.getMap());

    test('ElasticMarker#setTitle', elasticMarker.setTitle('title'));

    test('ElasticMarker#getTitle', elasticMarker.getTitle());

    test('ElasticMarker#setTop', elasticMarker.setTop(true));

    test('ElasticMarker#getTop', elasticMarker.getTop());

    test('ElasticMarker#setExtData', elasticMarker.setExtData({ test: 2 }));

    test('ElasticMarker#getExtData', elasticMarker.getExtData());

    return {
        map,
        elasticMarker
    };
});
