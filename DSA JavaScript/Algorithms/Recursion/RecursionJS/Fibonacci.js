function fibonacci(num){
    if(num == 0){
        return 0;
    }
    else if(num == 1 || num == 2){
        return 1;
    }
    else{
        return fibonacci(num-1) + fibonacci(num-2)
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));

