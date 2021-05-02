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
}

let list = new SinglyLinkedList();
list.push('firstNode');
list.push('secNode');
list.shift();
// list.push('thirdNode');
// list.pop();
// list.pop();
console.log(list);

//Not ideal way of doing this
// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you?')

// console.log(first);