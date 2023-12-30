// To make things clearer we can use : 
class Node{
    constructor(value){
        this.data = value,
        this.next = null
    }
}


class MyLL{
    constructor(value){
        this.head = {
            data : value,
            next : null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        let node = {
            data : value, 
            next : null
        }

        let isLast = false;
        let currentNode = this.head;
        while(!isLast){
            if(currentNode.next == null){
                currentNode.next = node;
                this.tail = node;
                this.length++;
                isLast = true;

            }else{
                currentNode = currentNode.next;
            }
        }
    }

    // More optimized : AAAAAA why did you loop it's a linked list AAAAAAAAAAAAAAAAA
    append2(value){
        let node = {
            data : value, 
            next : null
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    prepend(value){
        let node = {
            data : value,
            next : this.head
        }

        this.head = node;
        this.length++;
    }

    insert(index, value){
        //Check for negative index and out of bounds also :)
        
        if(index == 0){
            this.prepend(value);
        }
        else if(index == this.length){
            this.append(value);
        }
        else{
            let node = new Node(value);
            let i = 0;
            let currentNode = this.head;
            let previousNode;
            while(i!=index){
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++;
            }
            node.next = currentNode;
            previousNode.next = node;
            this.length++;
        }

        
    }

    printLL(){
        const result = [];
        let currentNode = this.head;
        while(currentNode != null){
            result.push(currentNode.data);
            currentNode = currentNode.next
        }
        return result
    }

    remove(index){
        // If length is 1 then return the list 
        // 
        
        let i = 0;
        let currentNode = this.head;
        let previousNode;
        while(i!=index){
            previousNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        previousNode.next = currentNode.next;
        currentNode.next = null;
        this.length--;
    }

    reverseNewList(){
        let i = 0;
        let currentNode = this.head;
        let newList = new MyLL(this.head.data);
        
        // This method creates a new linked list which is reversec
        while(currentNode.next != null){
            newList.prepend(currentNode.next.data);
            currentNode = currentNode.next;
        }
        return newList
    }

    reverse(){
        let i = 0;
        let currentNode = this.head;
        let previousNode = null;
        let nextNode;

        while(i<this.length){
            nextNode = currentNode.next;
            currentNode.next = previousNode;            
            previousNode = currentNode;
            if(i == 0){
               this.tail = previousNode; 
            }
            if(i == this.length-1){
               this.head = currentNode;
            }
            currentNode = nextNode;
            i++;
        }
    }
}


let linkedList = new MyLL(10);

linkedList.append2(5);
linkedList.append2(16);
linkedList.prepend(21);
linkedList.append(15);
linkedList.append(54);
linkedList.insert(2,34);
linkedList.insert(5,6);
console.log(linkedList.printLL());
linkedList.remove(5);
console.log(linkedList.printLL());
linkedList.reverse();
console.log(linkedList.printLL());
//console.log(linkedList.reverseNewList());
