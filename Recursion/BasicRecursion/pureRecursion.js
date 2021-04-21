/*
Pure Recursion Tips: For arrays, use methods like slice, the spread operator
and concat that make copies of arrays so you do not mutate them.
 */

function collectOddValues(arr) {
  let newArr = [];
  if(arr.length === 0) return newArr;
  if(arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
console.log(collectOddValues([1, 2, 3, 4, 5]));

// let arr = [1,2,3,4,5];
// let newArr = [];
//
// arr.splice(1)
// let spliceArr = newArr.concat(arr);
// console.log(spliceArr)