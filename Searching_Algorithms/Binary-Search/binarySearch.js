// /*
// This Function accepts a sorted array and a value. Create a left pointer at the start
// of the array, and a right pointer at the end of the array. While the left pointer
// comes before the right pointer:
// 	Create a pointer in the middle
// 	If you find the value you, return the index
// 	If the value is too small, move the left pointer up
// 	If the value is too large, move the right pointer down
// 	If you never find the value, return -1
//
// 	binarySearch([1,2,3,4,5], 2) //1
// 	binarySearch([1,2,3,4,5], 3) //2
//  */
//
// // Original Solution
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
	if(elem < arr[middle]){
	  end = middle - 1;
	} else {
	  start = middle + 1;
	}
	middle = Math.floor((start + end) / 2);
  }
  if(arr[middle] === elem){
	return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while(arr[middle] !== elem && start <= end) {
	if(elem < arr[middle]) end = middle - 1;
	else start = middle + 1;
	middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// binarySearch([2,5,6,9,13,15,28,30], 103)