// $ExpectTYpe LabelMarker<any>;
new AMap.LabelMarker();
// $ExpectTYpe LabelMarker<any>;
new AMap.LabelMarker({});
// $ExpectTYpe LabelMarker<ExtraData>;
const testLabelMarker = new AMap.LabelMarker({
    title: "全聚德烤鸭",
    position: [116.467456, 39.994996],
    zooms: [10, 20],
    opacity: 1,
    rank: 10,
    zIndex: 10,
    icon: {
        type: 'image',
        image: 'https://a.amap.com/jsapi_demos/static/images/poi-marker.png',
        clipOrigin: [14, 92],
        clipSize: [50, 68],
        size: [25, 34],
        anchor: 'bottom-center',
        angel: 0,
        retina: true
    },
    text: {
        content: '全聚德烤鸭',
        direction: 'left',
        offset: [0, 0],
        style: {
            fontSize: 15,
            fontWeight: 'normal',
            fillColor: '#666',
            strokeColor: '#fff',
            strokeWidth: 1
        }
    }
});

// $ExpectType void
testLabelMarker.setPosition(lnglatTuple);

// $ExpectType [number, number] | [string, string]
testLabelMarker.getPosition();

// $ExpectType [number, number]
testLabelMarker.getZooms();

// $ExpectType void
testLabelMarker.setZooms([1, 1]);

// $ExpectType number
testLabelMarker.getOpacity();

// $ExpectType void
testLabelMarker.setOpacity(1);

// $ExpectType any
testLabelMarker.on('click', () => {});

// $ExpectType any
testLabelMarker.off('click', () => {});
