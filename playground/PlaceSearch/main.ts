testPluginWrapper('AMap.PlaceSearch', () => {
    const map = new AMap.Map('map');
    const lnglat = map.getCenter();
    const bounds = map.getBounds();
    // const lnglat = new AMap.LngLat(114.085961, 22.545705);
    // const bounds = new AMap.Bounds(lnglat.offset(-1e4, -1e4), lnglat.offset(-1e4, -1e4));

    const placeSearch2 = new AMap.PlaceSearch();
    const placeSearch = new AMap.PlaceSearch({
        city: '深圳',
        citylimit: true,
        children: 1,
        type: '餐饮服务',
        lang: 'zh_cn',
        pageSize: 10,
        pageIndex: 10,
        extensions: 'all',
        map,
        panel: 'result',
        showCover: true,
        renderStyle: 'newpc',
        autoFitView: true
    });
    test('new PlaceSearch', placeSearch2);
    test('new PlaceSearch', new AMap.PlaceSearch({}));
    test('new PlaceSearch', placeSearch);

    test('PlaceSearch@complete', placeSearch.on('complete', event => {
        test('PlaceSearch@complete$event', event);
    }));

    test('PlaceSearch@selectChanged', placeSearch.on('selectChanged', event => {
        test('PlaceSearch@selectChanged$event', event);
    }));

    test('PlaceSearch@listElementClick', placeSearch.on('listElementClick', event => {
        test('PlaceSearch@listElementClick$event', event);
    }));

    test('PlaceSearch@markerClick', placeSearch.on('markerClick', event => {
        test('PlaceSearch@markerClick$event', event);
    }));

    test('PlaceSearch#search', placeSearch.search('火锅', (status, result) => {
        test('PlaceSearch#search$callback$status', status);
        test('PlaceSearch#search$callback$result', result);
    }));

    test('PlaceSearch#searchNearBy', placeSearch.searchNearBy('华强', lnglat, 1e5, (status, result) => {
        test('PlaceSearch#searchNearBy$callback$status', status);
        test('PlaceSearch#searchNearBy$callback$result', result);
    }));

    test('PlaceSearch#searchInBounds', placeSearch.searchInBounds('华强', bounds, (status, result) => {
        test('PlaceSearch#searchInBounds$callback$status', status);
        test('PlaceSearch#searchInBounds$callback$result', result);
    }));

    test('PlaceSearch#getDetails', placeSearch.getDetails('B0FFIG7VBK', (status, result) => {
        test('PlaceSearch#getDetails$callback$status', status);
        test('PlaceSearch#getDetails$callback$result', result);
    }));

    test('PlaceSearch#setType(string)', placeSearch.setType('生活服务'));
    test('PlaceSearch#setType()', placeSearch.setType());

    test('PlaceSearch#setCityLimit()', placeSearch.setCityLimit());

    test('PlaceSearch#setPageIndex(number)', placeSearch.setPageIndex(10));
    test('PlaceSearch#setPageIndex()', placeSearch.setPageIndex());

    test('PlaceSearch#setPageSize(number)', placeSearch.setPageSize(10));
    test('PlaceSearch#setPageSize()', placeSearch.setPageSize());

    test('PlaceSearch#setCity(string)', placeSearch.setCity('北京'));
    test('PlaceSearch#setCity()', placeSearch.setCity());

    test('PlaceSearch#setLang(Lang)', placeSearch.setLang('zh_cn'));
    test('PlaceSearch#setLang()', placeSearch.setLang());

    test('PlaceSearch#getLang', placeSearch.getLang());

    test('PlaceSearch#clear', placeSearch.clear());

    return {
        map,
        bounds,
        lnglat,
        placeSearch,
        placeSearch2
    }
});