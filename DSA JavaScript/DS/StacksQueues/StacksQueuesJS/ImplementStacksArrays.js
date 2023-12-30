class Stack{
    constructor(){
        this.data = []
    }

    push(value){
        this.data.push(value);
    }

    pop(){
        this.data.pop();
    }

    peek(){
        return this.data[this.data.length-1];
    }

    isEmpty(){
        if(this.data.length == 0){
            return true;
        }
        return false;
    }

    printStack(){
        console.log(this.data);
    }
}

let myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(3);
console.log(myStack.isEmpty());
myStack.push(5);
myStack.printStack();
console.log(myStack.peek());
myStack.pop();
myStack.printStack();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.isEmpty());