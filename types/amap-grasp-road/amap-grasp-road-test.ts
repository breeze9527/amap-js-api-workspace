const path = [
    { x: 116.478928, y: 39.997761, sp: 19, ag: 0, tm: 1478031031 },
    { x: 116.478907, y: 39.998422, sp: 10, ag: 0, tm: 2 },
    { x: 116.479384, y: 39.998546, sp: 10, ag: 110, tm: 3 },
    { x: 116.481053, y: 39.998204, sp: 10, ag: 120, tm: 4 },
    { x: 116.481793, y: 39.997868, sp: 10, ag: 120, tm: 5 },
    { x: 116.482898, y: 39.998217, sp: 10, ag: 30, tm: 6 },
    { x: 116.483789, y: 39.999063, sp: 10, ag: 30, tm: 7 },
    { x: 116.484674, y: 39.999844, sp: 10, ag: 30, tm: 8 }
];

// $ExpectType GraspRoad
const graspRoad = new AMap.GraspRoad();

graspRoad.driving(path, (err, result) => {
    if (err === null) {
        // $ExpectType GraspPath
        const data = result.data;
        {
            // $ExpectType number
            data.distance;
            // $ExpectType GraspPathPoint[]
            data.points;
            {
                const point = data.points[0];
                // $ExpectType number
                point.x;
                // $ExpectType number
                point.y;
            }
        }
        // $ExpectType number
        result.errcode;
        // $ExpectType any
        result.errdetail;
        // $ExpectType string
        result.errmsg;
        // $ExpectType any
        result.ext;
    } else {
        // $ExpectType ErrorStatus
        err;
        // $ExpectType string
        err.errmsg;
    }
});
