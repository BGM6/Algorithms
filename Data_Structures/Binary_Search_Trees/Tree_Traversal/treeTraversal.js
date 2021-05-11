class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //INSERT
    insert(val) {
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (val === current.val) return undefined;
                if (val < current.val) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (val > current.val) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    //FIND returns the actual node
    find(val) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (val < current.val) {
                current = current.left;
            } else if (val > current.val) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false;
        return current;
    }

    //Contains returns true or false;
    contains(value) {
        if (this.root === null) return false;
        let current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    //Searching from horizontally
    //Using a queue First in first Out use pop and unshift.
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    //Depth first Search PreOrder
    //Start at the root, traverse the left until there is none. Then traverse the right side of the lefts
    //Then traverse the right side starting of the root and the the same thing until there is no node left.
    //This uses recursion
    DFSPreOrder() {
        let data = [];
        let current = this.root;

        function traverse(node) {
            data.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }

        traverse(current);
        return data;
    }

    //Depth first Search PostOrder
    //explores all children nodes before added the root
    //goes all the way to the left then all the way to the right. Adds on the way up
    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.val);
        }

        traverse(current);
        return data;
    }
    //
    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.val);
            if (node.right) traverse(node.right);

        }

        traverse(current);
        return data;
    }

}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

/*
         10
      6     15
   3   8       20
*/
console.log(tree.BFS())
// console.log(tree.DFSPostOrder());
// console.log(tree.DFSInOrder());
