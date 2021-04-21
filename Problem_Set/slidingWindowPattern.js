/*
Write a function called maxSubarraySum which accepts an array
of integers and a number called n. The function should calculate
the maximum sum of n consecutive elements in the array.
 */

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
	// [([2], 6, 9), [3], 1, 8, 5, 6, 3]
	// From CURRENT tempSum [[(2, 6, 9)], 3...],
	// subtract the FIRST number [([2], 6, 9), 3...],
	// then add CURRENT number in the loop [(2, 6, 9), [3]...],
	// In arr[i - num] , you subtract the values of i and num first, then assign the corresponding value of that position, e.g.
	//
	// 	arr[3-3] = 2,
	//
	// 	arr[4-3] = 6,
	//
	// 	arr[5-3] = 9,
	//
	// 	arr[6-3] = 2, and so on.
	//
	// 	And, by the way, i increases in each loop by 1, and num is fixed.
	console.log(arr[i]);
    tempSum = tempSum - arr[i - num] + arr[i]; // 17 - 2 + 3
    if(tempSum > maxSum ) {
      maxSum = tempSum
	} //same as below shorthand
    // maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}
console.log(maxSubarraySum([2,6,9,3,1,8,5,6,3], 3));

//Brute force solution O(n2)
// function maxSubarraySum(arr, num) {
//   if(num > arr.length) {
//     return null;
//   }
//   let max = -Infinity;
//   for(let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for(let j = 0; j < num; j++) {
//       temp += arr[i + j];
// 	}
//     if (temp > max) {
//       max = temp;
// 	}
//   }
//   return max;
// }
// console.log(maxSubarraySum([2,6,9,3,1,8,5,6,3], 3));

