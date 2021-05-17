'use strict';
//BUBBLE SORT Time Complexity O(N2), Space Complexity O(1), best case Time Complexity O(n) when arr is nearly sorted
const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
	noSwaps = true;
	for (let j = 0; j < i - 1; j++) {
	  if (arr[j] > arr[j + 1]) {
		let temp = arr[j];
		arr[j] = arr[j + 1];
		arr[j + 1] = temp;
		noSwaps = false;
	  }
	}
	if (noSwaps) break;
  }
  return arr;
};
// console.log(bubbleSort([8, 1, 10, 2, 11, 12, 3, 4, 5, 6, 7]));

//SELECTION SORT, Time Complexity O(n2)
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
	let min = i;
	for (let j = i + 1; j < arr.length; j++) {
	  if (arr[j] < arr[min]) {
		min = j;
	  }
	}
	if (i !== arr[min]) {
	  let temp = arr[i];
	  arr[i] = arr[min];
	  arr[min] = temp;
	}
  }
  return arr;
};
console.log(selectionSort([8, 1, 4, 3]));

//BINARY SEARCH
const binarySearch = (arr, n) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== n && left <= right) {
	if (n > arr[middle]) left = middle + 1;
	else right = middle - 1;
	middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === n ? middle : -1;
};
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30, 35, 66, 78], 9));


//INSERTION SORT
const insertionSort = arr => {

};
// console.log(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]));


