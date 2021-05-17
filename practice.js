//MaxBinaryHeap
//the parent element must always be larger than the child nodes
//two nodes per parent
//no particular order to follow
/*
                100
     50      60    40     70
    2  3  21   2  4  5  6     7
*/

// const solve = (k) => {
//   let parentArr = [];
//   let childArr = [];
//   let squareRoot = Math.sqrt(k);
//   for (let i = 1; i <= k; i++) {
// 	if (childArr.length < squareRoot) {
//      childArr.push(i);
// 	} else {
// 	  parentArr.push(childArr);
// 	  console.log(i);
// 	  childArr = [i]
// 	}
//   }
//   return [...parentArr, childArr]
// };


// class MaxBinaryHeap {
//     constructor() {
//         this.values = [];
//     }
//
//     insert(element) {
//         //pushes the element at the end of the list
//         this.values.push(element);
//         //bubbleUP function to place the element in the correct location
//         this.bubbleUp();
//     }
//
//     bubbleUp() {
//         //set index to be the length of the list
//         let index = this.values.length - 1;
//         const element = this.values[index];
//         while (index > 0) {
//             let parentIndex = Math.floor((index - 1) / 2);
//             let parentEl = this.values[parentIndex];
//             //we only swap if the element is greater than the parent
//             if(element <= parent) break;
//             //else swap the element with the parent
//             //parent spot swap with the element we pushed
//             this.values[parentIndex] = element;
//             //element index we pushed === parent index
//             this.values[index] = parentEl;
//             //this line moves the index which starts at the end of the list to where the
//             //parent is
//             index = parentIndex
//         }
//     }
// }
//
// //[41,39,33,18,27,12]
//
// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// console.log(heap);

// const binarySearch = (arr, n) => {
//     let left = 0;
//     let right = arr.length - 1;
//     let middle = Math.floor((left + right) / 2);
//     while (arr[middle] !== n && left <= right) {
//         if (arr[middle] > n) right = middle - 1;
//         else left = middle + 1;
//         middle = Math.floor((left + right) / 2);
//     }
//     return arr[middle] === n ? middle : -1;
// };

// const res = binarySearch([2, 4, 5, 10, 14, 15, 20, 33], 4);
// console.log(res);

// const rev = function(arr) {
//     let revArr = [];
//     for(let i = arr.length - 1; i >= 0; i--) {
//         let num = arr[i];
//         revArr.push(num);
//     }
//     return revArr;
// }

