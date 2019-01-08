testWrapper(() => {
    const arrayBounds = new AMap.ArrayBounds([
        [1, 2],
        [1, 4],
        [2, 4]
    ])

    const arrayBounds2 = new AMap.ArrayBounds([
        new AMap.LngLat(1, 2),
        new AMap.LngLat(2, 3),
        new AMap.LngLat(3, 4)
    ])

    test('ArrayBounds(tuple)', arrayBounds);
    test('ArrayBounds(LngLat)', arrayBounds);

    test('ArrayBounds(tuple)#bounds', arrayBounds.bounds);
    test('ArrayBounds(LngLat)#bounds', arrayBounds2.bounds);

    test('ArrayBounds#contains', arrayBounds.contains([1, 2]));
    test('ArrayBounds#contains', arrayBounds.contains(new AMap.LngLat(1, 2)));

    test('ArrayBounds#toBounds', arrayBounds.toBounds());

    test('ArrayBounds#getCenter', arrayBounds.getCenter());
    return {
        arrayBounds,
        arrayBounds2,
    }
})