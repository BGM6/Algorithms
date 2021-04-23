//BUBBLE SORT
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

// console.log(bubbleSort([2, 1, 5, 4, 3]));

//==============================================

//INSERTION SORT
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
	let currentVal = arr[i];
	let j;
	for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
	  arr[j + 1] = arr[j];
	}
	arr[j + 1] = currentVal;
  }
  return arr;
};

// console.log(insertionSort([4, 2, 5, 3, 1]));

//SELECTION SORT

//==============================================

const selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
	let minIndex = i;
	for (let j = i + 1; j < arr.length; j++) {
	  if (arr[j] < arr[minIndex]) {
		minIndex = j;
	  }
	}
	//ES 6 SYNTAX FOR SWAP
	//[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	let temp = arr[i];
	console.log(arr[i], arr[minIndex]);
	arr[i] = arr[minIndex];
	arr[minIndex] = temp;
	console.log('SWAP');
	console.log(arr[i], arr[minIndex]);
	console.log('Next Iteration');
  }
  return arr;console.log(minIndex)
};

selectionSort([11, 10, 13, 14]);
/*
              i   j
*/