export {};

// [1, 'user']
let user: [number, string];
user = [1, 'carlosOswaldo'];

console.log('user', user);
console.log('username', user[1]);
console.log('username.length', user[1].length);
console.log('id', user[0]);

// Tuplas con varios valores
// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'carlos', true];
console.log('userInfo', userInfo);

// Arreglo de Tuplas
let array: [number, string][] = [];
array.push([1, 'oswaldo']); // 0
array.push([2, 'carlos']); // 1
array.push([3, 'hola']); // 2
console.log('array', array);

// Uso de funciones Array
// lensQueen -> lensQueen001

array[2][1] = array[2][1].concat('001'); // lensQueen001
console.log('array', array);





