function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
	let currentVal = arr[i];
	for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
	  arr[j+1] = arr[j];
	}
	arr[j+1] = currentVal;
  }
  return arr;
}

/*
We loop through the arr starting at 1 through the length of the arr
Create a var called currentNumber equal to the value of the current iteration
Set j to equal i - 1 which places j right before i since i is set to 1 first iteration j = 0, i = 1;

Next we nest a while loop,
While loop will continue to run as long as j is more than or equal to 0
And the value of arr[j] is more than the currentNumber variable which is arr[i]

Then we set arr[j + 1] to equal arr[j]
Then we re assign j to be j - 1
Then we set arr[j+1] to equal currentNumber

Once the while loop is false we return the arr;
*/

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//
// 	let key = arr[i];
// 	let j = i - 1;
//
// 	while (j >= 0 && arr[j] > key) {
// 	  arr[j + 1] = arr[j];
// 	  j = j - 1;
// 	}
// 	arr[j + 1] = key;
//   }
//   return arr;
// }
//
// const res = insertionSort([5, 3, 1, 4, 6]);

/*
[5, 3, 1, 4, 6]
 j  i
*/

console.log(res);
