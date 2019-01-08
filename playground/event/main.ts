testWrapper(() => {
    const div = document.getElementById('test')!;
    const map = new AMap.Map('map');

    test('event#addDomListener', AMap.event.addDomListener(div, 'click', function (event) {
        test('event$event', event);
        test('event$this', this);
    }, { test: 1 }))

    AMap.event.addListener(map, 'click', event => {
        test('event$this', event);
    });
});