'use strict';

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

    //Push Method
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        // console.log(this)
        return this;
    }

    //Pop Method

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
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
//return current;
        return current;

    }
}


let list = new SinglyLinkedList();
list.push('firstNode');
list.push('secNode');
list.push('thirdNode');
list.pop()
list.pop()
list.pop()

console.log(list);