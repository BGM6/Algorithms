'use strict';

// const insertionSort = arr => {
//   for (let i = 1; i < arr.length; i++) {
//     let j;
//     //Remember this currentVal is always re assign when it re loops
// 	let currentVal = arr[i];
// 	//this loops backwards!
// 	for ( j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
// 	  arr[j + 1] = arr[j];
//
// 	}
// 	//insert the num
// 	arr[j + 1] = currentVal;
//   }
//   return arr;
// };
//
// console.log(insertionSort([2,1,9,76,4]));
/*
Loop through the arr like normal
we declare j as a variable
we declare currentValue to arr[i]
Then nest a for loop, set j to i - 1
set the condition of the look to run while j >= 0 && arr[j] > currentVal; j--
if that meets the condition swap arr[j+1] to === arr[j]
IF the condition is not meant set arr[j + 1] === currentVal;
*/


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


// const insertionSort = (nums) => {
// 	for (let i = 1; i < nums.length; i++) {
// 		let j = i - 1
// 		let tmp = nums[i]
// 		while (j >= 0 && nums[j] > tmp) {
// 			nums[j + 1] = nums[j]
// 			j--
// 		}
// 		nums[j+1] = tmp
// 	}
// 	return nums
// }
//
// const res = insertionSort([14, 33, 27, 10, 35, 19, 42, 44]);
// console.log(res)

//https://medium.com/dailyjs/insertion-sort-in-javascript-9c077844717a

// const niko = {
//     firstName: 'Niko',
//     lastName: 'Guilas',
//     birthYear: 2013,
//     color: ['black', 'white'],
//
//     calcAge: function () {
//         console.log(`${this.firstName} is ${2021 - this.birthYear} years old.`);
//
//         const isGenZ = () => {
//             console.log(this);
//             console.log(this.birthYear >= 1997 && this.birthYear <= 2015);
//         };
//         isGenZ();
//     },
// };
//
// niko.calcAge();


