testPluginWrapper('AMap.CitySearch', () => {
    const citySearch = new AMap.CitySearch();

    citySearch.on('complete', event => {
        test('CitySearch@complete$event', event);
    });

    citySearch.getLocalCity((status, result) => {
        test('CitySearch#getLocalCity$callback$status', status);
        test('CitySearch#getLocalCity$callback$result', result);
    });

    citySearch.getCityByIp('114.80.166.240', (status, result) => {
        test('CitySearch#getCityByIp$callback$status', status);
        test('CitySearch#getCityByIp$callback$result', result);
    });

    return {
        citySearch
    }
});
