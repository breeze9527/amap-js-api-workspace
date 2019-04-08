testWrapper(() => {
    const southWest = new AMap.LngLat(108, 26);
    const northEast = new AMap.LngLat(111, 28);
    const southWestTuple = toTuple(southWest);
    const northEastTuple = toTuple(northEast);

    const bounds = new AMap.Bounds(southWest, northEast);
    const boundCenter = bounds.getCenter();

    test('new Bounds()', new AMap.Bounds());
    test('new Bounds([number, number, number, number])', new AMap.Bounds([southWestTuple[0], southWestTuple[1], northEastTuple[0], northEastTuple[1]]));
    test('new Bounds([LngLat, LngLat])', new AMap.Bounds(southWest, northEast));
    test('new Bounds([Tuple, Tuple])', new AMap.Bounds(southWestTuple, northEastTuple));
    test('new Bounds(number, number, number, number)', new AMap.Bounds(southWestTuple[0], southWestTuple[1], northEastTuple[0], northEastTuple[1]));

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