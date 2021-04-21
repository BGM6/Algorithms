/*
Given an array and a target average write a function to determine if there are a pair of numbers that
are equal to the averageTarget given. Return the pair in an array if there are no pairs found return -1;
*/

function averagePair(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let match = (arr[left] + arr[right]) / 2;
    if(targetSum === match) return [arr[left], arr[right]];
    else if(targetSum < left) left++;
    else right--;
  }
  return - 1;
}

const res = averagePair([1,2,3], 2.5);
console.log(res);