// This is not memoized so everytime we get the same i/p we have to re-calculate
function addTo80(n){
    return n + 80;
}

// Memoized version

let cache = {};

function memoizedAddTo80(n){
    if(cache[n]){
        console.log('from cache');
        return cache[n];
    }

    'Not in cache calculating'
    let answer = n + 80;
    cache[n] = answer;
    return answer;
}

console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(8));
console.log(memoizedAddTo80(8));
console.log(memoizedAddTo80(5));
console.log(memoizedAddTo80(1));
console.log(cache);