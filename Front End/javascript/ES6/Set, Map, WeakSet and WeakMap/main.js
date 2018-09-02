"use strict"

// Set

// let myArray=[11,22,34,65,34];
// let mySet= new Set(myArray);

// mySet.add('100');
// mySet.add({a:1,b:2});
// mySet.delete(22);
// // mySet.clear();
// mySet.add('100');
// mySet.add('200');

// console.log(mySet);

// mySet.forEach(function(val){
//     console.log(val);
// });

// Map

// let myMap =new Map([['a1','Hello'],['b2','Goodbye']]);
// myMap.set('c3','Foo');
// myMap.delete('a1');
// console.log(myMap.size);
// console.log(myMap);

// WeakSet

// let carWeakSet = new WeakSet();

// let car1={
//     make:'Honda',
//     model:'Civic'
// }
// carWeakSet.add(car1);

// let car2={
//     make:'Toyota',
//     model:'Camry'
// }
// carWeakSet.add(car2);

// carWeakSet.delete(car1);

// console.log(carWeakSet);

// WeakMap

let carWeakMap =new WeakMap();

let key1={
    id:1
}

let car1={
    make:'Honda',
    model:'Civic'
}

carWeakMap.set(key1,car1);

console.log(carWeakMap);