import {
    directionLight
} from '../preset';

// $ExpectType DirectionLight
new AMap.Lights.DirectionLight([1, 2, 3], [1, 2, 3], 1);

// $ExpectType void
directionLight.setColor([1, 2, 3]);

// $ExpectType void
directionLight.setIntensity(1);

// $ExpectType void
directionLight.setDirection([1, 2, 3]);
