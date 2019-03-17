// $ExpectType AmbientLight
const testAmbientLight = new AMap.Lights.AmbientLight([0.1, 0, 0.1], 1);

// $ExpectType void
testAmbientLight.setColor([0.1, 1, 0.5]);

// $ExpectType void
testAmbientLight.setIntensity(1);

// $ExpectType DirectionLight
const testDirectionLight = new AMap.Lights.DirectionLight([1, 2, 3], [1, 2, 3], 1);

// $ExpectType void
testDirectionLight.setColor([1, 2, 3]);

// $ExpectType void
testDirectionLight.setIntensity(1);

// $ExpectType void
testDirectionLight.setDirection([1, 2, 3]);
