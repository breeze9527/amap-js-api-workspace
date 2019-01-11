testPluginWrapper('AMap.Autocomplete', () => {
    const autocomplete = new AMap.Autocomplete({
        type: '050000',
        city: '深圳',
        datatype: 'all',
        citylimit: true,
        input: 'input',
        output: 'output',
        outPutDirAuto: true
    });
    const autocomplete2 = new AMap.Autocomplete();

    test('new Autocomplete()', autocomplete2);

    test('new Autocomplete({})', new AMap.Autocomplete());

    test('new Autocomplete(options)', autocomplete);

    test('Autocomplete@complete', autocomplete.on('complete', event => {
        test('Autocomplete@complete$event', event);
    }));

    test('Autocomplete@error', autocomplete.on('error', event => {
        test('Autocomplete@error$event', event);
    }));

    test('Autocomplete@select', autocomplete.on('select', event => {
        test('Autocomplete@select$event', event);
    }));

    test('Autocomplete@choose', autocomplete.on('choose', event => {
        test('Autocomplete@choose$event', event);
    }));

    test('Autocomplete#search', autocomplete.search('华强', (status, result) => {
        test('Autocomplete#search$callback$status', status);
        test('Autocomplete#search$callback$status', result);
    }));

    test('Autocomplete#setType', autocomplete.setType('050000'));

    test('Autocomplete#setCity', autocomplete.setCity('北京'));

    test('Autocomplete#setCityLimit', autocomplete.setCityLimit(true));

    return {
        autocomplete,
        autocomplete2
    }
});
