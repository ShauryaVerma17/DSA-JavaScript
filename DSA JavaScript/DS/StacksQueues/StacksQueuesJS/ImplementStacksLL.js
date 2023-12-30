class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // Add a node to the top
    push(value){
        let node = new Node(value);
        node.next = this.top;
        if(!this.top){
            this.top = node;
            this.bottom = this.top;
        }
        this.top = node;
        this.length++;
    }

    pop(){
        let value = this.top.data;
        this.top = this.top.next;
        if(!this.top){
            this.bottom = null;
        }
        this.length--;
        return value;
        
    }

    peek(){
        return this.top.data;
    }

    isEmpty(){
        if(this.top == null && this.bottom == null){
            return true;
        }
        return false;
    }
}


let myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(3);
console.log(myStack.isEmpty());
myStack.push(5);
console.log(myStack.peek());
console.log(myStack.top);
console.log(myStack.bottom);
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.isEmpty());