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

// function minSubArrayLen(arr, sum) {
//   let minLen = Infinity;
//   let windowLeft = 0;
//   let total = 0;
//   for(let i = 0; i < arr.length; i++) {
//     total += arr[i];
//     while(total >= sum) {
//       minLen = Math.min(minLen, i + 1 - windowLeft);
//       total -= arr[windowLeft];
//       windowLeft++;
// 	}
//   }
//   return minLen === Infinity ? 0 : minLen;
// }


// const minSubArrayLen = (arr, sum) => {
//   let minLen = Infinity;
//   let leftWindow = 0;
//   let rightWindow = 0;
//   let total = 0;
//
//   while(leftWindow < arr.length) {
//     if(total < sum && rightWindow < arr.length) {
//       total += arr[rightWindow];
//       rightWindow++;
// 	}
//     else if(total >= sum) {
//       minLen = Math.min(minLen, rightWindow - leftWindow)
// 	  total -= arr[leftWindow];
//       leftWindow++;
// 	} else {
//       break;
// 	}
//   }
//   return minLen === Infinity ? 0 : minLen;
// }

let res = minSubArrayLen([1,1,1,1,2,2,], 4) //1
console.log(res);

function minSubArrayLen(arr, sum) {
  if(!Array.isArray(arr)) return 'must pass in an array'
  if(isNaN(sum)) return 'sum has to be a integer'

  let minLen = Infinity;
  let total = 0;
  let left = 0;
  let right = 0;
  while(left < arr.length) {
	if(total < sum && right < arr.length) {
	  total += arr[right];
	  right++;
	} else if(total >= sum) {
	  minLen = Math.min(minLen, right - left)
	  total -= arr[left];
	  left++;
	} else {
	  break;
	}
  }
  return minLen === Infinity ? 0 : minLen
}


const res = minSubArrayLen([2,3,1,2,4,3], 7) //2 [4, 3]
console.log(res)