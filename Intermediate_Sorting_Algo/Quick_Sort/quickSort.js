'use strict';

/*
-Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
-Works by selecting one element(called the pivot) and finding the index where the pivot should
end up in the sorted array.

The runtime of quick sort depends in part on how one selects the pivot.
Ideally, the pivot should be chosen so that it's roughly the median value in the data set
you are sorting.

BIG O COMPLEXITY
Worst case if the array is already sorted its o(n) decompositions , o(n) comparisons per decompositions, === O(N2)

*/

function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

//pivot([4,8,2,1,5,7,6,3]);