// Write a function that takes in a non-empty array of unique integers,
// and an integer representing a target sum.
//   If any of the 2 numbers in the input array sum up to the target sum,
//   the function should return them in an Array in any order.
//   If no 2 numbers add up to the sum, it should return an empty Array.
//   Note that the target sum has to be obtained by summing 2 DIFFERENT integers in the array.
//   You can't add a single integer to itself in order to obtain the target sum.
// You can assume that at there will be at most one pair of numbers summing up to the target sum.
// Sample Input

// our two sum function which will return
// all pairs in the array that sum up to S
function twoSum(arr, S) {
  var sums = [];
  var hashTable = {};
  // check each element in array
  for (var i = 0; i < arr.length; i++) {
	// calculate S - current element
	var sumMinusElement = S - arr[i];
	// check if this number exists in hash table
	// if so then we found a pair of numbers that sum to S
	if (hashTable[sumMinusElement] !== undefined) {
	  sums.push([arr[i], sumMinusElement]);
	}
	// add the current number to the hash table
	hashTable[arr[i]] = arr[i];
  }
  // return all pairs of integers that sum to S
  return sums;
}
// twoSum([3, 5, 2, -4, 8, 11], 7);

const array = [ 3, 88, -4, 8, 11, 1 , -1, 6 ];
const addUpTo = (arr, targetSum) => {
  const hashTable = {};
  for(let i = 0; i < arr.length; i++) {
    let difference = targetSum - arr[i];
    if(hashTable[arr[i]]) {
      return [arr[i], difference];
	} else {
      hashTable[difference] = true;
	}
  }
  return [];
}

 console.log(addUpTo(array, 10))
//  {0:7, 1:7, 2:14, 3:2, 4:-1 }


//Refactored
const sumOfTwo = (arr, targetSum) => {
  if(typeof targetSum !== 'number') return 'targetSum must be a number.';
  if(!Array.isArray(arr)) return 'arr must be an array.';

  const hash = {};
  for(let num of arr) {
	const difference = targetSum - num;
	if(hash[num]) return [difference, num];
	else hash[difference] = true;
  }
  return [];
}

const array = [ 3, 88, -4, 8, 11, 1 , -1, 6 ];
const res = sumOfTwo(array, 10);
console.log(res);