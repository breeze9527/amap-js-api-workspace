declare var size: AMap.Size;
declare var pixel: AMap.Pixel;
declare var icon: AMap.Icon;

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
new AMap.Icon({
    size: [1, 2],
    imageOffset: pixel,
    image: 'image uri',
    imageSize: [1, 2]
});

// $ExpectType Size
icon.getImageSize();

// $ExpectType void
icon.getImageSize(size);
// $ExpectType void
icon.getImageSize([1, 2]);
