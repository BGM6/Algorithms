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
}

let list = new SinglyLinkedList();
list.push('firstNode')
list.push('secNode')
console.log(list)

//Not ideal way of doing this
// let first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you?')

// console.log(first);