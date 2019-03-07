// $ExpectType Size
const testSize = new AMap.Size(10, 20);

// $ExpectType number
testSize.getHeight();

// $ExpectType number
testSize.getWidth();

// $ExpectType string
testSize.toString();

// $ExpectType boolean
testSize.contains({ x: 10, y: 10 });
