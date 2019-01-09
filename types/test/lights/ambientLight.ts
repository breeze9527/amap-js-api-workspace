import {
    ambientLight
} from '../preset';

// $ExpectType AmbientLight
new AMap.Lights.AmbientLight([0.1, 0, 0.1], 1);

// $ExpectType void
ambientLight.setColor([0.1, 1, 0.5]);

// $ExpectType void
ambientLight.setIntensity(1);
