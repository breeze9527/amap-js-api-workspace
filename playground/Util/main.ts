testWrapper(() => {
    const util = AMap.Util;

    test('Util.colorNameToHex', util.colorNameToHex('red'));
    test('Util.colorNameToHex', util.colorNameToHex('blue'));

    test('Util.rgbHex2Rgba', util.rgbHex2Rgba('ffffff'));
    test('Util.rgbHex2Rgba', util.rgbHex2Rgba('FFAA00'));

    test('Util.argbHex2Rgba', util.argbHex2Rgba('ffffffff'));
    test('Util.argbHex2Rgba', util.argbHex2Rgba('FFAA00FF'));

    test('Util.isEmpty', util.isEmpty({}));
    test('Util.isEmpty', util.isEmpty({ a: 1 }));

    test('Util.deleteItemFromArray', util.deleteItemFromArray([1, 2], 1));

    test('Util.deleteItemFromArrayByIndex', util.deleteItemFromArrayByIndex([1, 2], 1));

    test('Util.indexOf', util.indexOf([1, 2], 1));

    test('Util.format(number)', util.format(10));
    test('Util.format(number, number)', util.format(10.234, 2));

    test('Util.isArray', util.isArray([]));

    test('Util.isDOM', util.isDOM(1));

    test('Util.includes', util.includes([1, 2], 1));

    test('Util.requestIdleCallback(callback)', util.requestIdleCallback(() => {
        test('Util.requestIdleCallback(callback)$callback');
    }));
    test('Util.requestIdleCallback(callback, {})', util.requestIdleCallback(() => {
        test('Util.requestIdleCallback(callback, {})$callback');
    }, {}));
    test('Util.requestIdleCallback(callback, options)', util.requestIdleCallback(() => {
        test('Util.requestIdleCallback(callback, options)$callback');
    }, { timeout: 2000 }));

    const idleCallbackHandle = util.requestIdleCallback(() => {
        test('cancel Util.requestIdleCallback$callback');
    });
    test('Util.cancelIdleCallback', util.cancelIdleCallback(idleCallbackHandle));

    test('Util.requestAnimFrame(callback)', util.requestAnimFrame(function () {
        test('Util.requestAnimFrame(callback)$callback');
        test('Util.requestAnimFrame(callback)$this', this);
    }));
    test('Util.requestAnimFrame(callback, context)', util.requestAnimFrame(function () {
        test('Util.requestAnimFrame(callback)$callback');
        test('Util.requestAnimFrame(callback)$this', this);
    }, { a: 1 }));

    const animFrameHandle = util.requestAnimFrame(() => {
        test('cancel Util.cancelAnimFrame$callback');
    });
    test('Util.cancelAnimFrame', util.cancelAnimFrame(animFrameHandle));
});
