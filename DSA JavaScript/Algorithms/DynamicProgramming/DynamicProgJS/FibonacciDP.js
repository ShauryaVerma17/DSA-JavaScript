function memoizedFib(){
    let cache = {};
    return function fib(n){
        if(n == 0){
            return 0;
        }
        else if(n == 1 || n == 2){
            return 1;
        }
        else if(cache[n]){
            return cache[n];
        }
        else{
            cache[n] =  fib(n-1) + fib(n-2);
            return cache[n];
        }
    }
}

// Bottom up approach
function fibonacciMaster2(n) {
    let answer = [0, 1];
    for (let i = 2; i <= n; i++) {
      answer.push(answer[i - 2] + answer[i - 1]);
    }
    return answer.pop();
  }

  

let memFib = memoizedFib();

console.log(memFib(0));
console.log(memFib(1));
console.log(memFib(2));
console.log(memFib(3));
console.log(memFib(4));
console.log(memFib(5));
console.log(memFib(6));
console.log(memFib(7));
console.log(memFib(8));