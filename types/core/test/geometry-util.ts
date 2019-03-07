{
    const point = lnglat;
    const pointTuple = lnglatTuple;
    const line = [point];
    const lineTuple = [pointTuple];
    const ring = [point];
    const ringTuple = [pointTuple];
    const polygon = [ring];
    const polygonTuple = [ringTuple];
    const geometryUtil = AMap.GeometryUtil;

    // $ExpectType number
    geometryUtil.distance(point, point);
    // $ExpectType number
    geometryUtil.distance(pointTuple, pointTuple);
    // $ExpectType number
    geometryUtil.distance(point, line);
    // $ExpectType number
    geometryUtil.distance(pointTuple, lineTuple);

    // $ExpectType number
    geometryUtil.ringArea(ring);
    // $ExpectType number
    geometryUtil.ringArea(ringTuple);

    // $ExpectType boolean
    geometryUtil.isClockwise(ring);
    // $ExpectType boolean
    geometryUtil.isClockwise(ringTuple);

    // $ExpectType number
    geometryUtil.distanceOfLine(line);
    // $ExpectType number
    geometryUtil.distanceOfLine(lineTuple);

    // $ExpectType [number, number][]
    geometryUtil.ringRingClip(ring, ring);
    // $ExpectType [number, number][]
    geometryUtil.ringRingClip(ringTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesRingRingIntersect(ring, ring);
    // $ExpectType boolean
    geometryUtil.doesRingRingIntersect(ringTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesLineRingIntersect(line, ring);
    // $ExpectType boolean
    geometryUtil.doesLineRingIntersect(lineTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesLineLineIntersect(line, line);
    // $ExpectType boolean
    geometryUtil.doesLineLineIntersect(lineTuple, lineTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentPolygonIntersect(point, point, polygon);
    // $ExpectType boolean
    geometryUtil.doesSegmentPolygonIntersect(pointTuple, pointTuple, polygonTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentRingIntersect(point, point, ring);
    // $ExpectType boolean
    geometryUtil.doesSegmentRingIntersect(pointTuple, pointTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentLineIntersect(point, point, line);
    // $ExpectType boolean
    geometryUtil.doesSegmentLineIntersect(pointTuple, pointTuple, lineTuple);

    // $ExpectType boolean
    geometryUtil.doesSegmentsIntersect(point, point, point, point);
    // $ExpectType boolean
    geometryUtil.doesSegmentsIntersect(pointTuple, pointTuple, pointTuple, pointTuple);

    // $ExpectType boolean
    geometryUtil.isPointInRing(point, ring);
    // $ExpectType boolean
    geometryUtil.isPointInRing(pointTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.isRingInRing(ring, ring);
    // $ExpectType boolean
    geometryUtil.isRingInRing(ringTuple, ringTuple);

    // $ExpectType boolean
    geometryUtil.isPointInPolygon(point, polygon);
    // $ExpectType boolean
    geometryUtil.isPointInPolygon(pointTuple, polygonTuple);

    // $ExpectType [number, number][]
    geometryUtil.makesureClockwise(lineTuple);

    // $ExpectType [number, number][]
    geometryUtil.makesureAntiClockwise(lineTuple);

    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(point, point, point);
    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(pointTuple, pointTuple, pointTuple);

    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(point, point, point);
    // $ExpectType [number, number]
    geometryUtil.closestOnSegment(pointTuple, pointTuple, pointTuple);

    // $ExpectType [number, number]
    geometryUtil.closestOnLine(point, line);
    // $ExpectType [number, number]
    geometryUtil.closestOnLine(pointTuple, lineTuple);

    // $ExpectType number
    geometryUtil.distanceToSegment(point, point, point);
    // $ExpectType number
    geometryUtil.distanceToSegment(pointTuple, pointTuple, pointTuple);

    // $ExpectType number
    geometryUtil.distanceToLine(point, line);
    // $ExpectType number
    geometryUtil.distanceToLine(pointTuple, lineTuple);

    // $ExpectType boolean
    geometryUtil.isPointOnSegment(point, point, point);
    // $ExpectType boolean
    geometryUtil.isPointOnSegment(point, point, point, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnSegment(pointTuple, pointTuple, pointTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnSegment(pointTuple, pointTuple, pointTuple, 1);

    // $ExpectType boolean
    geometryUtil.isPointOnLine(point, line);
    // $ExpectType boolean
    geometryUtil.isPointOnLine(point, line, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnLine(pointTuple, lineTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnLine(pointTuple, lineTuple, 1);

    // $ExpectType boolean
    geometryUtil.isPointOnRing(point, ring);
    // $ExpectType boolean
    geometryUtil.isPointOnRing(point, ring, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnRing(pointTuple, ringTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnRing(pointTuple, ringTuple, 1);

    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(point, polygon);
    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(point, polygon, 1);
    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(pointTuple, polygonTuple);
    // $ExpectType boolean
    geometryUtil.isPointOnPolygon(pointTuple, polygonTuple, 1);
}
