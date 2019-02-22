testWrapper(() => {
    const div = document.getElementById('map')!;
    const util = AMap.DomUtil;

    test('DomUtil.getViewport', util.getViewport(div));

    test('DomUtil.getViewportOffset', util.getViewportOffset(div));

    test('DomUtil.create(tagName)', util.create('a'));
    test('DomUtil.create(tagName, HTMLElement)', util.create('div', div));
    const innerDiv = util.create('div', div, 'test');
    test('DomUtil.create(tagName, HTMLElement, string)', innerDiv);

    test('DomUtil.setClass(HTMLElement)', util.setClass(div));
    test('DomUtil.setClass(HTMLElement, string)', util.setClass(div, 'test'));

    test('DomUtil.hasClass(HTMLElement, string)', util.hasClass(div, 'test'));

    test('DomUtil.addClass(HTMLElement, string)', util.addClass(div, 'test2'));

    test('DomUtil.removeClass(HTMLElement, string)', util.removeClass(div, 'test2'));

    test('DomUtil.setOpacity(HTMLElement, number)', util.setOpacity(div, 0.5));

    test('DomUtil.rotate(HTMLElement, number)', util.rotate(div, 90));

    test('DomUtil.rotate(HTMLElement, number)', util.rotate(div, 90, { x: 10, y: 10 }));

    test('DomUtil.setCss(HTMLElement, Style)', util.setCss(innerDiv, {padding: '10px'}));
    test('DomUtil.setCss(HTMLElement[], Style)', util.setCss([div, innerDiv], {border: '1px solid red'}));

    test('DomUtil.empty(HTMLElement)', util.empty(innerDiv));

    test('DomUtil.remove(HTMLElement)', util.remove(innerDiv));

    return {
        div,
        innerDiv
    }
});
