testPluginWrapper('AMap.Geocoder', () => {
    const map = new AMap.Map('map');
    type A = ((status: 'complete', result: string) => void) | ((status: 'no_data', result: {}) => void) | ((status: 'error', info: string) => void);

    const emptyGeocoder = new AMap.Geocoder();
    const geocoder = new AMap.Geocoder({
        city: '深圳',
        radius: 1e5,
        lang: 'zh_cn',
        batch: true,
        extensions: 'all'
    });

    test('new Geocoder()', emptyGeocoder);
    test('new Geocoder({})', new AMap.Geocoder({}));
    test('new Geocoder(options)', geocoder);

    test('Geocoder@error', geocoder.on('error', event => {
        test('Geocoder@error$event', event);
    }));

    test('Geocoder@complete', geocoder.on('complete', event => {
        test('Geocoder@complete$event', event);
    }));

    test('Geocoder#getLocation(name)', geocoder.getLocation('华强北', (status, data) => {
        test('Geocoder#getLocation(华强北)$status', status);
        test('Geocoder#getLocation(华强北)$data', data);
    }));
    test('Geocoder#getLocation(name[])', geocoder.getLocation(['华强北', '华强北'], (status, data) => {
        test('Geocoder#getLocation(华强北[])$status', status);
        test('Geocoder#getLocation(华强北[])$data', data);
    }));

    test('Geocoder#getLocation', geocoder.getLocation('不存在的啦啦啦', (status, data) => {
        test('Geocoder#getLocation(不存在的啦啦啦)$status', status);
        test('Geocoder#getLocation(不存在的啦啦啦)$data', data);
    }));

    test('Geocoder#setCity()', geocoder.setCity());
    test('Geocoder#setCity(string)', geocoder.setCity('深圳'));

    test('Geocoder#getAddress', geocoder.getAddress([113.857981, 22.774476], (status, data) => {
        test('Geocoder#getAddress([number, number])$status', status);
        test('Geocoder#getAddress([number, number])$data', data);
    }));

    test('Geocoder#getAddress', geocoder.getAddress(
        [[113.857981, 22.774476], [113.89506, 22.687079]],
        (status, data) => {
            test('Geocoder#getAddress([number, number][])$status', status);
            test('Geocoder#getAddress([number, number][])$data', data);
        })
    );

    test('convertForm([number, number])', AMap.convertFrom(
        [116.339303, 39.974898],
        'baidu',
        (status, result) => {
            test('convertForm([number, number])$status', status);
            test('convertForm([number, number])$status', result);
        }
    ));

    test('convertForm([number, number][])', AMap.convertFrom(
        [[116.339303, 39.974898]],
        'baidu',
        (status, result) => {
            test('convertForm([number, number][])$status', status);
            test('convertForm([number, number][])$status', result);
        }
    ));

    return {
        map,
        geocoder,
        emptyGeocoder
    }
});
