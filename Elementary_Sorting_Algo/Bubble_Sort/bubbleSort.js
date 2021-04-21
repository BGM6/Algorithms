/*
The idea behind bubble sort is that every pair of adjacent values is compared,
and then the two values swap positions if the first value is greater than the second.
This way during each pass through the array, the largest value “bubbles up” to the top,
and after each pass the elements furthest to the right are in the correct order. Here’s
an example: given the array [5,3,1,4,6] we can use bubble sort to sort the array in
ascending order. It’ll start by comparing the first pair of values, 5 & 3. 3 is smaller
than 5, so it’ll swap the two values and then move on to compare the next pair of values,
5 & 1. It’ll continue doing this over and over until the array is sorted:


let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};

Iteration 1: [5,3,1,4,6] → [3,5,1,4,6] → [3,1,5,4,6] → [3,1,4,5,6] → [3,1,4,5,6]
Iteration 2: [3,1,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6]
Iteration 3: [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6]

Start looping from a variable called i the end of the array towards the beginning
start an inner loop with a variable called j from the beginning until i  - 1
if arr[j is greater than arr[j+1], swap those two values
return the sorted array
 */

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
	for (let j = 0; j < i - 1; j++) {
	  if (arr[j] > arr[j + 1]) {
		let temp = arr[j];
		arr[j] = arr[j + 1];
		arr[j + 1] = temp;
	  }
	}
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
	[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
	for (let j = 0; j < i - 1; j++) {
	  if (arr[j] > arr[j + 1]) {
		swap(arr, j, j + 1);
	  }
	}
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

// Optimized BubbleSort with noSwaps
function bubbleSort(arr) {
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
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

//WITH CONSOLE LOGS
const bubbleSort = arr => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
	noSwaps = true;
	for (let j = 0; j < i - 1; j++) {
	  console.log(arr, arr[j], arr[j + 1]);
	  if (arr[j] > arr[j + 1]) {
		let temp = arr[j];
		console.log('TEMP:', temp)
		arr[j] = arr[j + 1];
		arr[j + 1] = temp;
		noSwaps = false;
	  }
	}
	if(noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([5, 4, 7, 3, 2, 1, 6]));

