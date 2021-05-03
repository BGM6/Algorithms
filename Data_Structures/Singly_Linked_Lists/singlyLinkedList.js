'use strict';
//piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Creating a push method similar to the array push method/insert data at the tail
    push(val) {
        let newNode = new Node(val);
        //entering the first node in the list
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //if there is already something in the list this is how it is pushed
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //pop Method - remove the last node from the tail;
    pop() {
        //if there is no head return undefined
        if (!this.head) return undefined;
//need current to start at the head and tail to equal current
        let current = this.head;
        let newTail = current;
//while there is still a current;
        while (current) {
// newTail === current and current === current.next;
            newTail = current;
            current = current.next;
        }
//if the while loop ends
//set this.tail to newTail
        this.tail = newTail;
        //We need to remove the old tail by setting next tail to null/ this.tail.next === null
        this.tail.next = null;
        //then we need to decrement the length
        this.length--;
//check if the length is === 0 then set the head and the tail to null;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
//return current;
        return current;
    }

    //SHIFT METHOD REMOVING NODE FROM THE HEAD
    shift() {
        //if there is no nodes return undefined;
        if (!this.head) return undefined;
        //store the current head property in a variable
        let currentHead = this.head;
        //set the head property to be the current head's next property
        this.head = currentHead.next;
        //decrement hte length by 1
        this.length--;
        //check if the length is === 0 then set the tail to null;
        if (this.length === 0) {
            this.tail = null;
        }
        //return the value of the node removed;
        return currentHead;
    }

    //UNSHIFT INSERTING NODE TO THE HEAD
    //This function should accept a value
    unshift(val) {
        //Create a new node using the value passed to the function
        let newNode = new Node(val);
        //If there is no head property on the list, set the head and tail to be the newly created node
        //the head needs to be the newNode and tail needs to be the head;
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            //Otherwise set the newly created node's next property to be the current head property on the list
            newNode.next = this.head;
            //Set the head property on the list to be the newly created node
            this.head = newNode;
            //Increment the length of the list by 1
        }
        this.length++;
        //return the linked list
        return this;
    }

    get(index) {
        //this function should accept an index
        //If the index is less than zero or greater than or equal to the length of the list, return null;
        if (index < 0 || index >= this.length) return undefined;
        //loop through the list until you reach the index and return the node at the specific index
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    //SET METHOD
    //this function should accept a value and an index
    set(index, val) {
        //Use your get function to find the specific node
        let foundNode = this.get(index);
        //if the node is found, set the value of the node to be the value passed to the function and return true
        if (foundNode) {
            foundNode.val = val;
            return true;
        }         //if the node is not found, return false;
        return false;
    }

    //Insert inserts a node between two nodes
    insert(index, val) {
        //if the index is less than zero or greater than the length, return false
        if (index < 0 || index > this.length) return false;
        //if the index is the same as the length, push a new node to the end of the list
        if (index === this.length) return !!this.push(val);
        //If the index is 0; unshift a new node to the start of the list
        if (index === 0) return !!this.unshift(val);
        //Otherwise, using the get method, access the node at the index - 1
        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        //Set the next property on that node to be the new node
        //Set the next property on the new node to be the previous next
        let tempNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = tempNode;
        //increment the length
        this.length++;
        //return true
        return true;
    }

    //Remove method
    remove(index) {
        //If the index is less than zero or greater than the length, return undefined
        if (index < 0 || index >= this.length) return undefined;
        //if the index is the same as the length - 1, pop
        if (index === this.length - 1) return !!this.pop();
        //if the index is 0, shift
        if (index === 0) return !!this.shift();
        //otherwise, using the get method, access the node at the index - 1
        let prevNode = this.get(index - 1);
        //set the next property on that node to be the next of the next node
        let removed = prevNode.next;
        prevNode.next = removed.next;
        //decrement the length;
        this.length--;
        //return the value of the node removed
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next ;
        let prev = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new SinglyLinkedList();
list.push('firstNode');
list.push('secNode');
list.push('thirdNode');
list.push(46546);
list.push(564556);
list.set(0, 'Changed!');
// console.log(list.get(0));
// list.push('thirdNode');
// list.pop();
// list.pop();


//Not ideal way of doing this
// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you?')
