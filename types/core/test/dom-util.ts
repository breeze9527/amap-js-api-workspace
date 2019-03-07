const domUtil = AMap.DomUtil;

// $ExpectType Size
domUtil.getViewport(div);

// $ExpectType Pixel
domUtil.getViewportOffset(div);

// $ExpectType HTMLDivElement
domUtil.create('div');
// $ExpectType HTMLAnchorElement
domUtil.create('a');
// $ExpectType HTMLDivElement
domUtil.create('div', div);
// $ExpectType HTMLDivElement
domUtil.create('div', div, 'className');

// $ExpectType void
domUtil.setClass(div);
// $ExpectType void
domUtil.setClass(div, 'className');

// $ExpectType boolean
domUtil.hasClass(div, 'className');

// $ExpectType void
domUtil.removeClass(div, 'className');

// $ExpectType void
domUtil.setOpacity(div, 1);

// $ExpectType void
domUtil.rotate(div, 10);
// $ExpectType void
domUtil.rotate(div, 10, { x: 10, y: 10 });

const util2: typeof AMap.DomUtil = domUtil.setCss(div, { textAlign: 'left' });
// $ExpectError
domUtil.setCss(div, { textAlign: 10 });

// $ExpectType void
domUtil.empty(div);

// $ExpectType void
domUtil.remove(div);
