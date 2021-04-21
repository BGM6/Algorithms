/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.
If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
 */

// function arrayDiff(arr1, arr2) {
//   if(arr1.length === 0) return [];
//   let arr = [];
//
//   for(let i = 0; i < arr1.length; i++) {
//     if(arr2.indexOf(arr1[i] === -1)) {
//       arr.push(arr1[i]);
// 	}
//     for(let j = 0; j < arr2.length; j++) {
//       if(arr1.indexOf(arr2[j] === - 1)) {
//         arr.push(arr2[j])
// 	  }
// 	}
//   }
//   return arr;
// }


function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val));
}

console.log(arrayDiff([1,2,2],[1])) //[1,3]