// $ExpectType Vector3
const vector = new AMap.Vector3([1, 2, 3]);
// $ExpectType Vector3
new AMap.Vector3(vector);

// $ExpectType [number, number, number]
vector.elements;

// $ExpectType void
vector.set(1, 2, 3);

// $ExpectType number
vector.dot();

// $ExpectType Vector3
vector.clone();

// $ExpectType Vector3
vector.add(vector);
// $ExpectType Vector3
vector.add([1, 2, 3]);

// $ExpectType Vector3
vector.sub(vector);
// $ExpectType Vector3
vector.sub([1, 2, 3]);

// $ExpectType Vector3
vector.addVectors(vector, vector);

// $ExpectType Vector3
vector.subVectors(vector, vector);

// $ExpectType Vector3
vector.crossVectors(vector, vector);

// $ExpectType Vector3
vector.normalize();

// $ExpectType number
vector.length();

export default vector;
