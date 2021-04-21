/*
Given an array of integers and a number, write a function called maxSubarraySum,
which finds the maximum sum of a subarray with the length of the number passed to the function.
Note: that a subarray must consist of consecutive elements from the original array. In the first
example below, ([100, 200, 300, 400], 2);

maxSubarraySum([100, 200, 300, 400], 2) //700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) //39
maxSubarraySum([2,3], 3) //null
 */

const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
	maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
	tempSum = tempSum - arr[i - num] + arr[i];
	if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
};

const res = maxSubarraySum([100, 200, 300, 400], 2);
console.log(res);
