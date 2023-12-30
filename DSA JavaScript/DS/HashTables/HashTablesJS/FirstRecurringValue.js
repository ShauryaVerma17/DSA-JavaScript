function firstRecurringValue(array){
    // If array is empty or has only 1 character return undefined
    // check type of as well
    
    const arrayLength = array.length;
    let hashTable = {};
    hashTable[array[0].toString()] = 1;
    for(let i = 1; i < arrayLength; i++){
        if(hashTable[array[i].toString()] == 1){
            return array[i]
        }
        hashTable[array[i].toString()] = 1; 
    }
    return undefined;
}


console.log(firstRecurringValue([2,3,102323,4,5,6,7,7]));

