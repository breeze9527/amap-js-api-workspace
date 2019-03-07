// $ExpectType Icon
new AMap.Icon();
// $ExpectType Icon
new AMap.Icon({});
// $ExpectType Icon
new AMap.Icon({
    size,
    imageOffset: pixel,
    image: 'image uri',
    imageSize: size
});
// $ExpectType Icon
const testIcon = new AMap.Icon({
    size: [1, 2],
    imageOffset: pixel,
    image: 'image uri',
    imageSize: [1, 2]
});

// $ExpectType Size
testIcon.getImageSize();

// $ExpectType void
testIcon.setImageSize(size);
// $ExpectType void
testIcon.setImageSize([1, 2]);
