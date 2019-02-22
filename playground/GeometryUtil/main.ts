testWrapper(() => {
    const util = AMap.GeometryUtil;
    const point1 = new AMap.LngLat(114.055735, 22.728884);
    const point1Tuple = toTuple(point1);
    const point2 = point1.offset(500, 0);
    const point2Tuple = toTuple(point2);
    const point3 = point1.offset(0, 500);
    const point3Tuple = toTuple(point3);
    const point4 = point3.offset(500, 0);
    const point4Tuple = toTuple(point4);
    const line1 = [point1.offset(500, -100), point1.offset(200, 200), point1.offset(100, 500)];
    const line1Tuple = toTuple(line1);
    const line2 = line1.map(coord => coord.offset(100, 100));
    const line2Tuple = toTuple(line2);
    const ring1 = [point1.offset(500, 0), point1.offset(0, 500), point1.offset(-500, 0), point1.offset(0, -500)];
    const ring1Tuple = toTuple(ring1);
    const ring2 = ring1.map(coord => coord.offset(100, 100));
    const ring2Tuple = toTuple(ring2);

    test('GeometryUtil.distance(LngLat, LngLat)', util.distance(point1, point2));
    test('GeometryUtil.distance(Tuple, Tuple)', util.distance(point1Tuple, point2Tuple));
    test('GeometryUtil.distance(LngLat, Tuple)', util.distance(point1, point2Tuple));
    test('GeometryUtil.distance(LngLat, LngLat[])', util.distance(point1, line1));
    test('GeometryUtil.distance(LngLat, Tuple[])', util.distance(point1, line1Tuple));

    test('GeometryUtil.ringArea(LngLat[])', util.ringArea(ring1));
    test('GeometryUtil.ringArea(Tuple[])', util.ringArea(ring1Tuple));

    test('GeometryUtil.isClockwise(LngLat[])', util.isClockwise(ring1));
    test('GeometryUtil.isClockwise(Tuple[])', util.isClockwise(ring1Tuple));


    test('GeometryUtil.distanceOfLine(LngLat[])', util.distanceOfLine(line1));
    test('GeometryUtil.distanceOfLine(Tuple[])', util.distanceOfLine(line1Tuple));

    test('GeometryUtil.ringRingClip(LngLat[], LngLat[])', util.ringRingClip(ring1, ring2));
    test('GeometryUtil.ringRingClip(Tuple[], Tuple[])', util.ringRingClip(ring1Tuple, ring2Tuple));

    test('GeometryUtil.doesRingRingIntersect(LngLat[], LngLat[])', util.doesRingRingIntersect(ring1, ring2));
    test('GeometryUtil.doesRingRingIntersect(Tuple[], Tuple[])', util.doesRingRingIntersect(ring1Tuple, ring2Tuple));

    test('GeometryUtil.doesLineRingIntersect(LngLat[], LngLat[])', util.doesLineRingIntersect(line1, ring1));
    test('GeometryUtil.doesLineRingIntersect(Tuple[], Tuple[])', util.doesLineRingIntersect(line1Tuple, ring1Tuple));

    test('GeometryUtil.doesLineLineIntersect(LngLat[], LngLat[])', util.doesLineLineIntersect(line1, line2));
    test('GeometryUtil.doesLineLineIntersect(Tuple[], Tuple[])', util.doesLineLineIntersect(line1Tuple, line2Tuple));

    test('GeometryUtil.doesSegmentPolygonIntersect(LngLat, LngLat, LngLat[][])', util.doesSegmentPolygonIntersect(point1, point2, [ring2, ring1]));
    test('GeometryUtil.doesSegmentPolygonIntersect(Tuple, Tuple, Tuple[][])', util.doesSegmentPolygonIntersect(point1Tuple, point2Tuple, [ring2Tuple, ring1Tuple]));

    test('GeometryUtil.doesSegmentRingIntersect(LngLat, LngLat, LngLat[])', util.doesSegmentRingIntersect(point1, point2, ring1));
    test('GeometryUtil.doesSegmentRingIntersect(Tuple, Tuple, Tuple[])', util.doesSegmentRingIntersect(point1Tuple, point2Tuple, ring1Tuple));

    test('GeometryUtil.doesSegmentLineIntersect(LngLat, LngLat, LngLat[])', util.doesSegmentLineIntersect(point1, point2, line1));
    test('GeometryUtil.doesSegmentLineIntersect(Tuple, Tuple, Tuple[])', util.doesSegmentLineIntersect(point1Tuple, point2Tuple, line1Tuple));

    test('GeometryUtil.doesSegmentsIntersect(LngLat, LngLat, LngLat, LngLat)', util.doesSegmentsIntersect(point1, point2, point3, point4));
    test('GeometryUtil.doesSegmentsIntersect(Tuple, Tuple, Tuple, Tuple)', util.doesSegmentsIntersect(point1Tuple, point2Tuple, point3Tuple, point4Tuple));

    test('GeometryUtil.isPointInRing(LngLat, LngLat[])', util.isPointInRing(point1, ring1));
    test('GeometryUtil.isPointInRing(Tuple, Tuple[])', util.isPointInRing(point1Tuple, ring1Tuple));

    test('GeometryUtil.isRingInRing(LngLat[], LngLat[])', util.isRingInRing(ring1, ring2));
    test('GeometryUtil.isRingInRing(Tuple[], Tuple[])', util.isRingInRing(ring1Tuple, ring2Tuple));

    test('GeometryUtil.isPointInPolygon(LngLat, LngLat[][])', util.isPointInPolygon(point1, [ring1, ring2]));
    test('GeometryUtil.isPointInPolygon(Tuple, Tuple[][])', util.isPointInPolygon(point1Tuple, [ring1Tuple, ring2Tuple]));

    test('GeometryUtil.makesureClockwise(Tuple[])', util.makesureClockwise(ring1Tuple));

    test('GeometryUtil.makesureAntiClockwise(Tuple[])', util.makesureClockwise(ring1Tuple));

    test('GeometryUtil.closestOnSegment(LngLat, LngLat, LngLat)', util.closestOnSegment(point1, point3, point4));
    test('GeometryUtil.closestOnSegment(Tuple, Tuple, Tuple)', util.closestOnSegment(point1Tuple, point3Tuple, point4Tuple));

    test('GeometryUtil.closestOnLine(LngLat, LngLat[])', util.closestOnLine(point1, line1));
    test('GeometryUtil.closestOnLine(Tuple, Tuple[])', util.closestOnLine(point1Tuple, line1Tuple));

    test('GeometryUtil.distanceToSegment(LngLat, LngLat, LngLat)', util.distanceToSegment(point1, point3, point4));
    test('GeometryUtil.distanceToSegment(Tuple, Tuple, Tuple)', util.distanceToSegment(point1Tuple, point3Tuple, point4Tuple));

    test('GeometryUtil.distanceToLine(LngLat, LngLat[])', util.distanceToLine(point1, line1));
    test('GeometryUtil.distanceToLine(Tuple, Tuple[])', util.distanceToLine(point1Tuple, line1Tuple));

    test('GeometryUtil.isPointOnSegment(LngLat, LngLat, LngLat)', util.isPointOnSegment(point1, point3, point4));
    test('GeometryUtil.isPointOnSegment(Tuple, Tuple, Tuple)', util.isPointOnSegment(point1Tuple, point3Tuple, point4Tuple));
    test('GeometryUtil.isPointOnSegment(LngLat, LngLat, LngLat, number)', util.isPointOnSegment(point1, point3, point4, 100));
    test('GeometryUtil.isPointOnSegment(Tuple, Tuple, Tuple, number)', util.isPointOnSegment(point1Tuple, point3Tuple, point4Tuple, 100));

    test('GeometryUtil.isPointOnLine(LngLat, LngLat[])', util.isPointOnLine(point1, line1));
    test('GeometryUtil.isPointOnLine(Tuple, Tuple[])', util.isPointOnLine(point1Tuple, line1Tuple));
    test('GeometryUtil.isPointOnLine(LngLat, LngLat[], number)', util.isPointOnLine(point1, line1, 100));
    test('GeometryUtil.isPointOnLine(Tuple, Tuple[], number)', util.isPointOnLine(point1Tuple, line1Tuple, 100));

    test('GeometryUtil.isPointOnRing(LngLat, LngLat[])', util.isPointOnRing(point1, ring1));
    test('GeometryUtil.isPointOnRing(Tuple, Tuple[])', util.isPointOnRing(point1Tuple, ring1Tuple));
    test('GeometryUtil.isPointOnRing(LngLat, LngLat[], number)', util.isPointOnRing(point1, ring1, 100));
    test('GeometryUtil.isPointOnRing(Tuple, Tuple[], number)', util.isPointOnRing(point1Tuple, ring1Tuple, 100));

    test('GeometryUtil.isPointOnPolygon(LngLat, LngLat[][])', util.isPointOnPolygon(point1, [ring1, ring2]));
    test('GeometryUtil.isPointOnPolygon(Tuple, Tuple[][])', util.isPointOnPolygon(point1Tuple, [ring1Tuple, ring2Tuple]));
    test('GeometryUtil.isPointOnPolygon(LngLat, LngLat[][], number)', util.isPointOnPolygon(point1, [ring1, ring2], 100));
    test('GeometryUtil.isPointOnPolygon(Tuple, Tuple[][], number)', util.isPointOnPolygon(point1Tuple, [ring1Tuple, ring2Tuple], 100))
});
