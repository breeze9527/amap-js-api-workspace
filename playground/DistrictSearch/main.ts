testPluginWrapper('AMap.DistrictSearch', () => {
    document.getElementById('map')!.style.display = 'none';

    const district1 = new AMap.DistrictSearch();
    const district2 = new AMap.DistrictSearch({
        level: 'city',
        showbiz: true,
        extensions: 'all',
        subdistrict: 1
    });

    test('new DistrictSearch()', district1);
    test('new DistrictSearch({})', new AMap.DistrictSearch({}));
    test('new DistrictSearch(options)', district2);

    test('DistrictSearch@error', district2.on('error', event => {
        test('DistrictSearch@error$event', event);
    }));

    test('DistrictSearch@complete', district2.on('complete', event => {
        test('DistrictSearch@complete$event', event);
    }));

    test('DistrictSearch#search', district2.search('深圳', (status, result) => {
        test('DistrictSearch#search$callback$status', status);
        test('DistrictSearch#search$callback$result', result);
    }));

    test('DistrictSearch#setLevel(level)', district2.setLevel('country'));
    test('DistrictSearch#setLevel()', district2.setLevel());

    test('DistrictSearch#setSubdistrict()', district2.setSubdistrict(2));

    return {
        district1,
        district2
    }
});
