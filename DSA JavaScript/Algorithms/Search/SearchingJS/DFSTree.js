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

    insert(value) {
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

    lookup(value){
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

    DFSInorder(){
        return this.traverseInOrder(this.root, []);
    }

    traverseInOrder(node, list){
        if(node.left){
            this.traverseInOrder(node.left,list);
        }
        list.push(node.data);
        if(node.right){
            this.traverseInOrder(node.right,list);
        }

        return list;
    }

    DFSPreOrder(){
        return this.traversePreOrder(this.root, []);
    }

    traversePreOrder(node, list){
        list.push(node.data);
        if(node.left){
            this.traversePreOrder(node.left,list);
        }
        if(node.right){
            this.traversePreOrder(node.right,list);
        }
        return list;
    }

    DFSPostOrder(){
        return this.traversePostOrder(this.root, []);
    }

    traversePostOrder(node, list){
        if(node.left){
            this.traversePostOrder(node.left,list);
        }
        if(node.right){
            this.traversePostOrder(node.right,list);
        }
        list.push(node.data);
        
        return list;
    }


}

let myBST = new BinarySearchTree();
myBST.insert(9);
myBST.insert(4);
myBST.insert(20);
myBST.insert(1);
myBST.insert(6);
myBST.insert(15);
myBST.insert(170);
console.log(myBST);
console.log(myBST.lookup(20));
console.log(myBST.lookup(223456));
console.log(myBST.lookup(-1));
console.log(myBST.lookup(9));
console.log(myBST.DFSInorder()); 
console.log(myBST.DFSPreOrder());
console.log(myBST.DFSPostOrder());


