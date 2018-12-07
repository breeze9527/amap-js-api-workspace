var pixel = new AMap.Pixel(10, 20);
var pixel2 = new AMap.Pixel(10, 20);

// $ExpectType number
pixel.getX();

// $ExpectType number
pixel.getY();

// $ExpectType boolean
pixel.equals(pixel2);

// $ExpectType string
pixel.toString();

// $ExpectType Pixel
pixel.add({ x: 1, y: 2 });
// $ExpectType Pixel
pixel.add({ x: 1, y: 2 }, false);

// $ExpectType Pixel
pixel.round();

// $ExpectType Pixel
pixel.floor();

// $ExpectType number
pixel.length();

// $ExpectType number | null
pixel.direction();

// $ExpectType Pixel
pixel.toFixed();
// $ExpectType Pixel
pixel.toFixed(2);
