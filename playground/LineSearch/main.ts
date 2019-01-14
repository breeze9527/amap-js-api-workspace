testPluginWrapper('AMap.LineSearch', () => {
    const lineSearch1 = new AMap.LineSearch();
    const lineSearch2 = new AMap.LineSearch({
        pageIndex: 1,
        pageSize: 2,
        city: '深圳',
        extensions: 'all'
    });

    test('new LineSearch()', lineSearch1);
    test('new LineSearch({})', new AMap.LineSearch());
    test('new LineSearch(options)', lineSearch2);

    lineSearch2.on('complete', event => {
        test('LineSearch@complete$event', event);
    });

    lineSearch2.on('error', event => {
        test('LineSearch@error$event', event);
    });

    test('LineSearch#searchById', lineSearch1.searchById('440300014317', (status, result) => {
        test('LineSearch#searchById$callback$status', status);
        test('LineSearch#searchById$callback$result', result);
    }));

    test('LineSearch#search', lineSearch2.search('华强', (status, result) => {
        test('LineSearch#search$callback$status', status);
        test('LineSearch#search$callback$result', result);
    }));

    test('LineSearch#setPageIndex()', lineSearch2.setPageIndex());
    test('LineSearch#setPageIndex(number)', lineSearch2.setPageIndex(1));

    test('LineSearch#setPageSize()', lineSearch2.setPageSize());
    test('LineSearch#setPageSize(number)', lineSearch2.setPageSize(2));

    test('LineSearch#setCity()', lineSearch2.setCity());
    test('LineSearch#setCity(number)', lineSearch2.setCity('深圳'));

    return {
        lineSearch1,
        lineSearch2
    }
});
