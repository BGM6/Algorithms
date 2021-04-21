'use strict';

/*
Sliding Window - minSubArrayLen

Write a function called minSubArrayLen which accepts two parameters - an array of
positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is
greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Example Input:
minSubArrayLen([2,3,1,2,4,3], 7) //2 [4, 3]
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) //1 [62]
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) //3
 */

function minSubArrayLen(arr, sum) {
  let minLen = Infinity;
  let left = 0;
  let right = 0;
  let total = 0;
  while (left < arr.length) {
	if (total < sum && right < arr.length) {
	  total += arr[right];
	  right++;
	} else if (total >= sum) {
	  minLen = Math.min(minLen, right - left);
	  total -= arr[left];
	  left++;
	} else break;

  }
  return minLen === Infinity ? 0 : minLen;
}

const res = minSubArrayLen([2, 3, 1, 2, 4, 3], 7); //2 [4, 3]
console.log(res);
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//
// 	let currentNumber = arr[i];
// 	let j = i - 1; // 1 - 1 = 0; on iteration 1
// 	//j is at 5 i is at 3
//
// 	while (j >= 0 && arr[j] > currentNumber) {
// 	  arr[j + 1] = arr[j];
//
// 	  //3 = 5
// 	  j = j - 1;
// 	  //0 - 1 = -1
// 	  // console.log(j);
// 	  //
// 	}
//
// 	arr[j + 1] = currentNumber;
//   }
//   return arr;
// }
//
// const res = insertionSort([5, 3, 1, 4, 6]);
// console.log(res);

/*
We loop through the arr starting at 1 through the length of the arr
Create a var called currentNumber equal to the value of the current iteration
Set j to equal i - 1 which places j right before i since i is set to 1 first iteration j = 0, i = 1;

Next we nest a while loop,
While loop will continue to run as long as j is more than or equal to 0
And the value of arr[j] is more than the currentNumber variable which is arr[i]

Then we set arr[j + 1] to equal arr[j]
Then we re assign j to be j - 1
Then we set arr[j+1] to equal currentNumber

Once the while loop is false we return the arr;
*/
