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

