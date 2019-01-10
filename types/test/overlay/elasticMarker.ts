import {
    map,
    lnglat
} from '../preset';

interface ExtraData {
    test: number;
}

// $ExpectError
new AMap.ElasticMarker();
// $ExpectError
new AMap.ElasticMarker({});
// $ExpectType ElasticMarker<ExtraData>
const elasticMarker = new AMap.ElasticMarker<ExtraData>({
    zooms: [1, 2],
    styles: [
        {
            icon: {
                img: 'url',
                size: [1, 2],
                ancher: [1, 2]
            }
        },
        {
            icon: {
                img: 'url',
                size: [1, 2],
                ancher: [1, 2],
                imageOffset: [1, 2],
                imageSize: [1, 2],
                fitZoom: 1,
                scaleFactor: 1,
                maxScale: 1,
                minScale: 1
            },
            label: {
                content: 'content',
                position: 'BM',
                offset: [1, 2],
                minZoom: 1
            }
        }
    ],
    zoomStyleMapping: {
        20: 1
    },
    map,
    position: lnglat,
    topWhenClick: false,
    bubble: false,
    draggable: true,
    cursor: 'cursor',
    visible: true,
    zIndex: 10,
    clickable: false,
    extData: { test: 1 }
});

// $ExpectType void
elasticMarker.markOnAMAP({
    name: '123',
    position: [1, 2]
});

// $ExpectType void
elasticMarker.setClickable(true);

// $ExpectType boolean
elasticMarker.getClickable();

// $ExpectType LngLat | undefined
elasticMarker.getPosition();

// $ExpectType void
elasticMarker.setPosition(lnglat);

// $ExpectType void
elasticMarker.setzIndex(10);

// $ExpectType number
elasticMarker.getzIndex();

// $ExpectType void
elasticMarker.setDraggable(true);

// $ExpectType boolean
elasticMarker.getDraggable();

// $ExpectType void
elasticMarker.hide();

// $ExpectType void
elasticMarker.show();

// $ExpectType void
elasticMarker.setCursor('cursor');

// $ExpectType void
elasticMarker.setMap(map);
// $ExpectType void
elasticMarker.setMap(null);

// $ExpectType void
elasticMarker.setTitle('title');

// $ExpectType string | undefined
elasticMarker.getTitle();

// $ExpectType void
elasticMarker.setTop(true);

// $ExpectType boolean
elasticMarker.getTop();

// $ExpectType void
elasticMarker.setExtData({ test: 2 });

// $ExpectType {} | ExtraData
elasticMarker.getExtData();

elasticMarker.on('click', event => {
    // $ExpectType "click"
    event.type;
    // $ExpectType ElasticMarker<ExtraData>
    event.target;
});

elasticMarker.on('allLoaded', event => {
    // $ExpectType "allLoaded"
    event.type;
    // $ExpectType ElasticMarker<ExtraData>
    event.target;
});
