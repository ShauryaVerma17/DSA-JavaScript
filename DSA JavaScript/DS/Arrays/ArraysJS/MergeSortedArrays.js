function mergeSortedArrays(array1,array2){
    // CHecking of inputs to be done here 

    // intialize final array
    let result = [];
    
    // Check first index of each array
    let array1first = true;
    if(array2[0]<array1[0]){
        array1first = false;
    }

    if(array1first){
        j = 0
        result.push(array1[0]);
        for(let i = 1; i < array1.length; i ++ ){
            while(array2[j] <= array1[i]){
                result.push(array2[j]);
                j++;
            }
            result.push(array1[i]);
        }
    }

    return result;
}

// Assuming array1 will always be smaller

console.log(mergeSortedArrays([1,5,6,9,100,120303],[2,3,4,33,103,1006]));