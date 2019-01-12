testPluginWrapper('AMap.StationSearch', () => {
    const stationSearch1 = new AMap.StationSearch();
    const stationSearch2 = new AMap.StationSearch({
        pageIndex: 1,
        pageSize: 10,
        city: '深圳'
    });

    test('new StationSearch()', stationSearch1);
    test('new StationSearch({})', new AMap.StationSearch({}));
    test('new StationSearch(options)', stationSearch2);

    stationSearch2.on('complete', event => {
        test('StationSearch@complete$event', event);
    });

    stationSearch2.on('error', event => {
        test('StationSearch@error$event', event);
    });

    test('StationSearch#searchById', stationSearch2.searchById('BV10243650', (status, result) => {
        test('StationSearch#searchById$callback$status', status);
        test('StationSearch#searchById$callback$result', result);
    }));

    test('StationSearch#search', stationSearch2.search('华强', (status, result) => {
        test('StationSearch#search$callback$status', status);
        test('StationSearch#search$callback$result', result);
    }));

    test('StationSearch#setPageIndex(numer)', stationSearch2.setPageIndex(10));
    test('StationSearch#setPageIndex()', stationSearch2.setPageIndex());

    test('StationSearch#setPageSize(numer)', stationSearch2.setPageSize(10));
    test('StationSearch#setPageSize()', stationSearch2.setPageSize());

    test('StationSearch#setCity(string)', stationSearch2.setCity('深圳'));
    test('StationSearch#setCity()', stationSearch2.setCity());

    return {
        stationSearch1,
        stationSearch2
    }
});
