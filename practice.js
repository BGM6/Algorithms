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

const solve = (intArr, number) => {
  let tempSum = 0;
  let max = 0;
  for (let i = 0; i <= number; i++) {
	max += i;
  }
  tempSum = max;
  for (let j = number; j < intArr.length; j++) {
	tempSum = tempSum - intArr[j - number] + intArr[j];
	max = Math.max(max, tempSum);
  }
  return max;
};


const res = solve([1, 2, 3, 4, 5, 5], 2); //10
console.log(res);
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

