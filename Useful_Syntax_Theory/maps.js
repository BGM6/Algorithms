'use strict';
//Maps are datastructures that we can use to map values into keys
//Maps store key and value pairs like Objects
//Key difference is the keys in maps can have any type(arrays, objects, strings, numbers, floats, etc),
// in Objects keys can only be strings

const rest = new Map();
rest.set('name', 'Pho Saigon');
rest.set(1, 'Dublin, California');
rest.set(2, 'San Ramon, California');
rest.set([], {});
rest.set(1.234, `${2 + 3}`);
//You can chain adding sets
rest.set('Top 3 Dish', ['Fried Chicken', 'Spring Rolls', 'Boba'])
    .set('Rating', 5)
    .set('Type', 'Vietnamese Food')
    .set('isOpenOnWeekends', true)
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');
//You can extract values using keys by using .get
console.log(rest.get('Type'));
console.log(rest.get('Top 3 Dish'));
//Map has methods like .has, .delete, .size, .clear just like Sets
console.log(rest.has('Rating'));
console.log(rest.size)
// console.log(rest.clear)
// console.log(rest.delete('isOpenOnWeekends'))
//Example
const time = 21;
const isOpen = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(isOpen);
// console.log(rest);

//If you have to set a array as a key this is how you do it
const arr = [1,2];
rest.set(arr, 'This works');
console.log(rest.get(arr))
// rest.set([1,2], 'Key is stored in the heap aka memory')
//This will be Undefined because [1,2] here and [1,2] in the set point to different heap in memory
// console.log(rest.get([1,2]))
//A work around is declaring a variable to [1, 2]