/*
What is a binary heap?
Very similar to a binary search tree, but with some different rules!
In a MaxBinaryHeap = parent nodes are always larger tan child nodes.
In a MinBinaryHeap = parent nodes are always smaller than child nodes

*Each nodes can only have 2 child nodes
*There is no order with the left and right they are just smaller than the parent node

 *Storing Heaps

 */
//Finding child nodes
//For any index of an array n
//The left child is stored at 2n + 1;
//The right child is stored at 2n + 2;

//finding parent formula
//for any child at index n...
//its parent is at index (n-2)/2 must also floor to cut the decimal off

//MaxBinaryHeap
class MaxBinaryHeap {
  constructor() {
	this.values = [];
  }

  insert(element) {
	this.values.push(element);

  }
}




