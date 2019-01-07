testWrapper(() => {
    interface ExtraData {
        test: number;
    }
    const map = new AMap.Map('map', {
        zoom: 8
    });
    const path1: AMap.LocationValue[] = [
        [113.476206, 22.723818],
        [113.639627, 22.593286],
        [113.54899, 22.319149],
        [113.470713, 22.410588],
    ]
    const path2: AMap.LocationValue[] = [
        [113.956858, 22.643993],
        [114.169718, 22.576802],
        [114.11204, 22.420744],
        [113.804422, 22.623712]
    ]
    const path3: AMap.LocationValue[] = [
        [113.087564, 22.588214],
        [113.539377, 22.175519],
        [114.046122, 22.104285],
        [114.54188, 22.190778],
        [114.478708, 22.735217],
        [114.070841, 22.892184],
        [113.224894, 22.944044]
    ]

    const polygon = new AMap.Polygon<ExtraData>({
        map,
        zIndex: 10,
        bubble: true,
        cursor: 'pointer',
        strokeColor: '#00FF00',
        strokeOpacity: 0.3,
        strokeWeight: 5,
        fillColor: '#0000FF',
        fillOpacity: 0.5,
        draggable: true,
        extData: { test: 1 },
        strokeStyle: 'dashed',
        strokeDasharray: [2, 4],
        path: path1
    });

    test('new Polygon()', new AMap.Polygon());
    test('new Polygon({})', new AMap.Polygon({}));
    test('new Polygon(options)', polygon);

    test('Polygon@click', polygon.on('click', event => {
        test('Polygon@click$event', event);
    }));

    test('Polygon@change', polygon.on('change', event => {
        test('Polygon@change$event', event);
    }));

    test('Polygon@options', polygon.on('options', event => {
        test('Polygon@options$event', event);
    }));

    test('Polygon@hide', polygon.on('hide', event => {
        test('Polygon@hide$event', event);
    }));

    test('Polygon@show', polygon.on('show', event => {
        test('Polygon@show$event', event);
    }));

    test('Polygon#setPath(LocationValue[])', polygon.setPath(path1));
    test('Polygon#setPath(LocationValue[][])', polygon.setPath([path1, path2, path3]));

    test('Polygon#getPath', polygon.getPath());

    test('Polygon#setOptions({})', polygon.setOptions({}));
    test('Polygon#setOptions(options)', polygon.setOptions({
        map,
        zIndex: 10,
        bubble: true,
        cursor: 'pointer',
        strokeColor: '#00FF00',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        fillColor: '#0000FF',
        fillOpacity: 0.5,
        draggable: true,
        extData: { test: 1 },
        strokeStyle: 'dashed',
        strokeDasharray: [4, 2],
        path: [path3, path2, path1]
    }));

    test('Polygon#getOptions', polygon.getOptions());

    test('Polygon#getBounds', polygon.getBounds());

    test('Polygon#getArea', polygon.getArea());

    test('Polygon#hide', polygon.hide());

    test('Polygon#show', polygon.show());

    test('Polygon#setMap(null)', polygon.setMap(null));

    test('Polygon#setMap(Map)', polygon.setMap(map));
    test('Polygon#setMap(Map)', polygon.setMap(map));

    test('Polygon#setExtData', polygon.setExtData({ test: 1 }));

    test('Polygon#getExtData', polygon.getExtData());

    test('Polygon#contains(point)', polygon.contains(map.getCenter()));

    return {
        map,
        polygon,
        path1,
        path2,
        path3
    }
});
