// $ExpectType AmbientLight
export const ambientLight = new AMap.Lights.AmbientLight([0.1, 0, 0.1], 1);

// $ExpectType void
ambientLight.setColor([0.1, 1, 0.5]);

// $ExpectType void
ambientLight.setIntensity(1);

// $ExpectType DirectionLight
export const directionLight = new AMap.Lights.DirectionLight([1, 2, 3], [1, 2, 3], 1);

// $ExpectType void
directionLight.setColor([1, 2, 3]);

// $ExpectType void
directionLight.setIntensity(1);

// $ExpectType void
directionLight.setDirection([1, 2, 3]);
