'use strict';

/*
-Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
-Works by selecting one element(called the pivot) and finding the index where the pivot should
end up in the sorted array.

The runtime of quick sort depends in part on how one selects the pivot.
Ideally, the pivot should be chosen so that it's roughly the median value in the data set
you are sorting.
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if( pivot > arr[i]) {
      swapIdx++;
    }
  }
}

//pivot([4,8,2,1,5,7,6,3]);