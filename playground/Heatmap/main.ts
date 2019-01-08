testWrapper(() => {
    const map = new AMap.Map('map');

    map.plugin('AMap.Heatmap', () => {
        const heatmapLayer = new AMap.Heatmap(map);
        test('Heatmap', heatmapLayer);

        test('Heatmap#setMap', heatmapLayer.setMap(map));

        test('Heatmap#setOptions', heatmapLayer.setOptions());
        test('Heatmap#setOptions({})', heatmapLayer.setOptions({}));
        test('Heatmap#setOptions(options)', heatmapLayer.setOptions({
            radius: 30,
            gradient: {
                '0.4': 'rgb(0, 255, 255)',
                '0.65': 'rgb(0, 110, 255)',
                '0.85': 'rgb(100, 0, 255)',
                '1.0': 'rgb(100, 0, 255)'
            },
            opacity: [0, 0.5],
            zooms: [1, 18]
        }));

        test('Heatmap#setDataSet', heatmapLayer.setDataSet({
            data: [
                {
                    lng: 114.08594700023525,
                    lat: 22.54699999968279,
                    count: 1
                }
            ],
            max: 1
        }));
        test('Heatmap#setDataSet', heatmapLayer.setDataSet({
            data: [
                {
                    lng: 114.08594700023525,
                    lat: 22.54699999968279,
                    count: 1
                }
            ]
        }));

        test('Heatmap#addDataPoint', heatmapLayer.addDataPoint(113.97745701000088, 22.733317403521422, 1));

        test('Heatmap#hide', heatmapLayer.hide());

        test('Heatmap#show', heatmapLayer.show());

        test('Heatmap#getMap', heatmapLayer.getMap());

        test('Heatmap#getOptions', heatmapLayer.getOptions());

        test('Heatmap#getDataSet', heatmapLayer.getDataSet());
    });
});