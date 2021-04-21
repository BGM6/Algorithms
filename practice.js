// 'use strict';
// const insertionSort = arr => {
//   for (let i = 0; i < arr.length; i++) {
// 	let currentVal = arr[i];
// 	for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
// 	  arr[j + 1] = arr[j];
//
// 	}
// 	arr[j + 1] = currentVal;
//   }
//   return arr;
// };
//
// console.log(insertionSort([14, 33, 27, 10, 35, 19, 42, 44]));

function insertionSort(arr) {
  //We start at index 1 of the array
  for (let i = 1; i < arr.length; i++) {
	//Create a variable equal to arr[i]
	let val = arr[i];
	//define j to be the index before i;
	//first iteration j is at 0 and i is at 1
	let j = i - 1;
	//While loop if the condition to continue
	//as long as j is >= 0 and arr[j] is > than val
	while (j >= 0 && arr[j] > val) {
	  arr[j + 1] = arr[j];
	  j = j - 1;
	}
	arr[j + 1] = val;

  }
  return arr;
}

console.log(insertionSort([14, 33, 27, 10, 35, 19, 42, 44]));
                            j    i