var size = new AMap.Size(10, 20);

test('Size#getWidth', size.getWidth());
test('Size#getHeight', size.getHeight());
test('Size#toString', size.toString());

test('Size#contains', size.contains({ x: 10, y: 10 }));
