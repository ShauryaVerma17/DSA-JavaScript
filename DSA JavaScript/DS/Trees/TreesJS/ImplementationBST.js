class Node {
    constructor(value) {
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    lookup(value) {
        if (value == this.root.data) {
            return this.root;
        }
        else if (value < this.root.data) {
            return this.lookToTheLeft(this.root, value);
        }
        else {
            return this.lookToTheRight(this.root, value);
        }

        return node;
    }

    lookToTheLeft(parent, value) {
        if (parent.left == null) {
            return null;
        }
        if (value == parent.left.data) {
            return parent.left;
        }
        else if (value < parent.left.data) {
            return this.lookToTheLeft(parent.left, value)
        }
        else {
            return this.lookToTheRight(parent.left, value)
        }

    }

    lookToTheRight(parent, value) {
        if (parent.right == null) {
            return null;
        }
        if (value == parent.right.data) {
            return parent.right;
        }
        else if (value < parent.right.data) {
            return this.lookToTheLeft(parent.right, value)
        }
        else {
            return this.lookToTheRight(parent.right, value)
        }

    }

    insert(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        }
        else {
            if (value < this.root.data) {
                this.insertToTheLeft(this.root, node);
            }
            else {
                this.insertToTheRight(this.root, node);
            }
        }
    }

    insertToTheLeft(parent, child) {
        if (!parent.left) {
            parent.left = child;
        }
        else {
            if (child.data < parent.left.data) {
                this.insertToTheLeft(parent.left, child);
            }
            else {
                this.insertToTheRight(parent.left, child);
            }
        }
    }

    insertToTheRight(parent, child) {
        if (!parent.right) {
            parent.right = child;
        }
        else {
            if (child.data < parent.right.data) {
                this.insertToTheLeft(parent.right, child);
            }
            else {
                this.insertToTheRight(parent.right, child);
            }
        }
    }

    insert2(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        }
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return;
                    }
                    currentNode = currentNode.left;
                }
                else {
                    if (value > currentNode.data) {
                        if (!currentNode.right) {
                            currentNode.right = node;
                            return;
                        }
                        currentNode = currentNode.right;
                    }
                }

            }
        }
    }

    lookup2(value){
        let currentNode = this.root;
        while(currentNode){
            if(value == currentNode.data){
                return currentNode;
            }
            else if(value<currentNode.data){
                currentNode = currentNode.left;
            }
            else{
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    remove(value){
        let currentNode = this.root;
        let parentNode = null;
        while(currentNode){
            if(value< currentNode.data){
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if(value > currentNode.data){
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if(value == currentNode.data){
                // 3 options 

                // Option 1 : Current node has no right child 
                if(!currentNode.right){
                    // If root node is the match 
                    if(parentNode == null){
                        this.root = currentNode.left;
                    } 
                    else{
                        if(currentNode.data > parentNode.data){
                            parentNode.right = currentNode.left;
                        }else if(currentNode.data < parentNode. data){
                            parentNode.left = currentNode.left;
                        }
                    }
                }
                else if(currentNode.right.left == null){ // Has right child but right child doesn't have left child
                    // NAH too complicated
                }
            }

        }
        return false;
    }

}

let myBST = new BinarySearchTree();
myBST.insert2(9);
myBST.insert2(4);
myBST.insert2(20);
myBST.insert2(1);
myBST.insert2(6);
myBST.insert2(15);
myBST.insert2(170);
console.log(myBST);
console.log(myBST.lookup2(20));
console.log(myBST.lookup2(223456));
console.log(myBST.lookup2(-1));
console.log(myBST.lookup2(9));


// Insert() also works but insert2 is better
// Lookup also works but lookup2 is better

