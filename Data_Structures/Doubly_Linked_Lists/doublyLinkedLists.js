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

            /*
                if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
             */
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

    unshift(val) {
        //create a new node with the value passed to the function
        let newNode = new Node(val);
        //if length is 0; set the head to be the new node, set the tail to be the new node
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            //otherwise; set the prev property on the head of the list to be the new node
            this.head.prev = newNode;
            //set the next property on the new node to be the head property
            newNode.next = this.head;
            //update the head to be the new node
            this.head = newNode;
        }
        //increment the length
        this.length++;
        //return the list
        return this;
    }

    get(index) {
        //If the index is less than 0 or greater or equal to the length, return null
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        //if the index is less than zero or greater than or equal to the length return false
        if (index < 0 || index > this.length) return false;
        //if the index is 0, unshift;
        if (index === 0) return !!this.unshift(val);
        //if the index is the same as the length, push
        if (index === this.length) return !!this.push(val);
        //use the get method to access the index - 1
        let newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        //set the next and prev properties on the correct nodes to link everything together
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        //increment the length
        this.length++;
        //return true;
        return true;
    }

    remove(index) {
        //if the index is less than zero or greater than or equal to the length return undefined
        if (index < 0 || index >= this.length) return false;
        //if the index is 0, shift
        if (index === 0) return this.shift();
        //if the index is the same as the length  - 1, pop
        if (index === this.length - 1) return this.pop();
        //use the get method to retrieve the item to be removed
        let removeNode = this.get(index);
        //update the next and prev properties ot remove the found node from the list
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        //set next and prev to null on the found node
        removeNode.next = null;
        removeNode.prev = null;
        //decrement the length
        this.length--;
        //return the removed node
        return removeNode;
    }

}

let list = new DoublyLinkedList();
list.push('Harry');
list.push('Ron');
list.push('Hermonie');
list.push('Hagrid');
list.insert(1, 'Malfoy');

console.log(list);