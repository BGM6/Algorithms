//return [1,2,3] === 1 * 2 * 3 = 6
//base case if(arr.length === 0) return 1
//recursion

function productOfArray (arr) {
  //Termination
  if(!Array.isArray(arr)) return null;
  //base case
  if(arr.length === 0) return 1;

 return arr[0] * productOfArray(arr.slice(1))
  /*
  [1,2,3]
  1 * productOfArray([2,3) = 1 * 6 = 6
  2 * productOfArray([3]) = 2 * 3 = 6
  3 * productOfArray([]) = 3 * 1 = 3
  return 1
  */
 }

const res = productOfArray([1,2,3]);
// console.log(res);
 let nums = [1];
 console.log(nums.slice(1));