//Background tasks on your computer
//printing/task processing first one to be printed that will be the first one printed
//using an array
// let q = [];
// q.push('first');
// q.push('second');
// q.push('third');
// q.shift();
// q.shift();
// // console.log(q)
//
// //you can also use unshift and pop;
// let q2 = [];
// q2.unshift('first');
// q2.unshift('second');
// q2.unshift('third');
// console.log(q2);
// q2.pop();
// q2.pop();
// console.log(q2);

//add to end remove from the head
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

let q = new Queue();
q.enqueue('first')
q.enqueue('second')
q.enqueue('third')
console.log(q)
console.log(q.dequeue())