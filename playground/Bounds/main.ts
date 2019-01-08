testWrapper(() => {
    const southWest = new AMap.LngLat(108, 26);
    const northEast = new AMap.LngLat(111, 28);

    const bounds = new AMap.Bounds(southWest, northEast);
    const boundCenter = bounds.getCenter();
    test('Bounds#contains', bounds.contains(boundCenter));
    test('Bounds#contains', bounds.contains([boundCenter.getLng(), boundCenter.getLat()]));

    test('Bounds#getCenter', boundCenter);
    test('Bounds#getSouthWest', bounds.getSouthWest());
    test('Bounds#getSouthEast', bounds.getSouthEast());
    test('Bounds#getNorthEast', bounds.getNorthEast());
    test('Bounds#getNorthWest', bounds.getNorthWest());
    test('Bounds#toString', bounds.toString());

    return {
        bounds
    }
});