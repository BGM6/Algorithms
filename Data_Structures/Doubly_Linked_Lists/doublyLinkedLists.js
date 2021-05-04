class Node {
  constructor(val) {
	this.val = val;
	this.next = null;
	this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
	this.head = null;
	this.tail = null;
	this.length = 0;
  }

  push(val) {
	//create a new node with value passed to the function
	let newNode = new Node(val);
	//if the head property is null or length is 0 set the head and tail to be the newly created node
	if (this.length === 0) {
	  this.head = newNode;
	  this.tail = newNode;
	} else {
	  //If not, set the next property on the tail to be that node
	  this.tail.next = newNode;
	  //Set the previous property on the newly created node to be the tail
	  newNode.prev = this.tail;
	  //Set the tail to be the newly created node
	  this.tail = newNode;
	}
	//Increment the length
	this.length++;
	//Return the Doubly linked list
	return this;
  }

  pop() {
	//if there is no head, return undefined
	if (!this.head) return undefined;
	//Store the current tail in a variable to return later
	let poppedNode = this.tail;
	//If the length is 1, set the head and tail to be null
	if (this.length === 1) {
	  this.head = null;
	  this.tail = null;
	} else {
	  //Update the tail to be the previous Node
	  this.tail = poppedNode.prev;
	  //Set the newTail's next to null
	  this.tail.next = null;
	  //Sever the lingering connection of the node to prev
	  poppedNode.prev = null;

	}
	//Decrement the length
	this.length--;
	//return the value removed
	return poppedNode;
  }

  shift() {
	//if length is 0 return undefined
	if (!this.head) return undefined;
	//Store the current head property in a variable
	let oldHead = this.head;
	//if the length is one set the head to be null the tail to be null
	if (this.length === 1) {
	  this.head = null;
	  this.tail = null;
	} else {
	  //update the head to be the next of the old head
	  this.head = oldHead.next;
	  //set the old head's next to null/sever the bonds
	  this.head.prev = null;
	  oldHead.next = null;

	}
	//decrement the length
	this.length--;
	// return the old head variable;
	return oldHead;
  }
}

let list = new DoublyLinkedList();
list.push('firstNode');
list.push('secNode');
list.pop();
console.log(list);