function subSequenceSum(arr) {
  let maxSum = 0;
  let currentNum = 0;

  arr.forEach(value => {
	currentNum = Math.max(value, currentNum + value);
	maxSum = Math.max(maxSum, currentNum);
  })
  return maxSum;
}



const res = subSequenceSum([1,2,10,3,5,6])
console.log(res);
