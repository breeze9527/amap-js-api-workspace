// $ExpectType Vector3
const testVector = new AMap.Vector3([1, 2, 3]);
// $ExpectType Vector3
new AMap.Vector3(testVector);

// $ExpectType [number, number, number]
testVector.elements;

// $ExpectType void
testVector.set(1, 2, 3);

// $ExpectType number
testVector.dot();

// $ExpectType Vector3
testVector.clone();

// $ExpectType Vector3
testVector.add(testVector);
// $ExpectType Vector3
testVector.add([1, 2, 3]);

// $ExpectType Vector3
testVector.sub(testVector);
// $ExpectType Vector3
testVector.sub([1, 2, 3]);

// $ExpectType Vector3
testVector.addVectors(testVector, testVector);

// $ExpectType Vector3
testVector.subVectors(testVector, testVector);

// $ExpectType Vector3
testVector.crossVectors(testVector, testVector);

// $ExpectType Vector3
testVector.normalize();

// $ExpectType number
testVector.length();
