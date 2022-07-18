// set
const myArray = [1, 2, 3, 4, 5, 5, 1];

// create a new set
const mySet = new Set(myArray);

// transforming to array
const uniqueArray = [...mySet];

// add element
mySet.add(6);
mySet.add({channelName: 'Javascript mastery'});
mySet.add([1, 2, 3]);

// delete element
mySet.delete(3);

// clear element
// mySet.clear();

// has element
// console.log(mySet.has(6));

// size
// console.log(mySet.size);

// map
// const myMap = new Map([ ['name', 'John'], ['surname', 'Doe'] ]);
// console.log(myMap);

// const myMap = new Map([[{}, 'a'], [{}, 'b']]);

// add
// myMap.set({}, 'c');

// delete
const myMap = new Map([[1, 'ONE'], [2, 'TWO']]);

// myMap.delete(1);

// clear
// myMap.clear();

// has
console.log(myMap.has(1));

// size
console.log(myMap.size);
