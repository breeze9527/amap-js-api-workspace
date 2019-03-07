// $ExpectType Pixel
new AMap.Pixel(10, 20);
// $ExpectType Pixel
const testPixel = new AMap.Pixel(10, 20);

// $ExpectType number
testPixel.getX();

// $ExpectType number
testPixel.getY();

// $ExpectType boolean
testPixel.equals(testPixel);

// $ExpectType string
testPixel.toString();

// $ExpectType Pixel
testPixel.add({ x: 1, y: 2 });
// $ExpectType Pixel
testPixel.add({ x: 1, y: 2 }, false);

// $ExpectType Pixel
testPixel.round();

// $ExpectType Pixel
testPixel.floor();

// $ExpectType number
testPixel.length();

// $ExpectType number | null
testPixel.direction();

// $ExpectType Pixel
testPixel.toFixed();
// $ExpectType Pixel
testPixel.toFixed(2);
