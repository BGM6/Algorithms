'use strict';
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

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
// 	let val = arr[i];
//
// 	let j = i - 1;
// 	while (j >= 0 && arr[j] > val) {
// 	  arr[j + 1] = arr[j];
// 	  j = j - 1;
// 	}
// 	arr[j + 1] = val;
//   }
//   return arr;
// }
// insertionSort([14, 33, 27, 10, 35, 19, 42, 44]);

/*
first iteration
arr[j] 14 val 33 is 14 > 33 no
while loop does not run
we set arr[j + 1] = val so 0 + 1 = 1 arr[index 1] = val val is 33

*/

const insertionSort = (nums) => {
	for (let i = 1; i < nums.length; i++) {
		let j = i - 1
		let tmp = nums[i]
		while (j >= 0 && nums[j] > tmp) {
			nums[j + 1] = nums[j]
			j--
		}
		nums[j+1] = tmp
	}
	return nums
}

const res = insertionSort([14, 33, 27, 10, 35, 19, 42, 44]);
console.log(res)
