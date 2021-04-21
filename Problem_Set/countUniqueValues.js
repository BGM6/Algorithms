/*
Implement a function called countUniqueValues, which accepts
a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
 */

const countUniqueValues = (arr) => {
  let i = 0;
  for(let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
	}
  }
  return i + 1;
}
console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))

function countUniqueValues(arr) {
  const hashTable = {};
  for(let i = 0; i < arr.length; i++) {
    let value = arr[i];
    hashTable[value] ? hashTable[value]++ : hashTable[value] = 1;
  }
  return Object.keys(hashTable).length;
}

console.log(countUniqueValues([1,1,2,3,3,4,5,6,6,7]))