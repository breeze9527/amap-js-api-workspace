var pixel = new AMap.Pixel(10, 20);
var pixel2 = new AMap.Pixel(10, 20);

test('Pixel#getX', pixel.getX());
test('Pixel#getY', pixel.getY());
test('Pixel#equals', pixel.equals(pixel2));
test('Pixel#toString', pixel.toString());

test('Pixel#add', pixel.add({ x: 10, y: 10 }, true));
test('Pixel#round', pixel.round());
test('Pixel#floor', pixel.floor());
test('Pixel#length', pixel.length());
test('Pixel#direction', pixel.direction());
test('Pixel#toFixed', pixel.toFixed());
test('Pixel#toFixed(number)', pixel.toFixed(1));

