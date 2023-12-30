class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first.data;
    }

    enqueue(value){
        let node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }
        this.last.next = node;
        this.last = node;
        this.length++;
    }

    dequeue(){
        let value = this.first.data;
        this.first = this.first.next;
        if(!this.first){
            this.last = null;
        }
        this.length--;
        return(value);
    }

    isEmpty(){
        if(!this.first){
            return true;
        }
        return false;
    }
}

let myQueue = new Queue();
console.log(myQueue.isEmpty());
myQueue.enqueue(3);
myQueue.enqueue(4);
myQueue.enqueue(5);
console.log(myQueue.isEmpty());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.isEmpty());


