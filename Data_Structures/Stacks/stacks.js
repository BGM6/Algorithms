//Stack array implementation
//Last in first out -LIFO;
// let historyStack = [];
// historyStack.push('google.com');
// historyStack.push('ign.com')
// historyStack.push('gamespot.com');
// historyStack.pop();
// console.log(historyStack)

//Stacks implementation  using a singly linked list
class Node {
  constructor(value) {
	this.value = value;
	this.next = null;
  }
}

class Stack {
  constructor() {
	this.first = null;
	this.last = null;
	this.size = 0;
  }

  //Push method will work a little differently in a Stack
  frontPush(value) {
	//the function should accept a value
	//create a new node with the value
	let newNode = new Node(value);
	//if there are no nodes in the stack, set the first and last
	//property to be the newly created node
	if (!this.first) {
	  this.first = newNode;
	  this.last = newNode;
	} else {
	  //If there is at least one node, create a variable that stores the
	  //current first property on the stack
	  let currentFirst = this.first;
	  this.first = newNode;
	  this.first.next = currentFirst;
	}
	//reset the first property to be the newly created node
	//set the next property on the node to be the previously created variable
	//increment the size of the stack by 1
	return ++this.size;
  }

  frontPop() {
	//if there are no nodes in the stack, return null
	if (!this.first) return undefined;
	//create a temp var to store the first property on the stack
	//if there is only 1 node, set the first and last property to be null
	let currentFirst = this.first;
	if (this.first === this.last) {
	  this.last = null;
	}
	//if there is more than one node, set the first property to be
	// the next property on the current first
	this.first = this.first.next;
	//decrement size
	this.size--;
	//return currentFirst value;
	return currentFirst.value;

  }
}

let list = new Stack();
list.frontPush('first');//tail
list.frontPush('second');
list.frontPush('third');  //head
// console.log(list);
const res = list.frontPop();
console.log(res);
console.log(list);


