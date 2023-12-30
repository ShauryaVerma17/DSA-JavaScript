const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    let smallestIndex = 0;
    let temp;
    for(let i = 0; i < array.length; i ++ ){
        smallestIndex = i;
        for(let j = i + 1; j< array.length; j++){
            if(array[j] < array[smallestIndex]){
                smallestIndex = j;
            }
        }
        temp = array[i];
        array[i] = array[smallestIndex];
        array[smallestIndex] = temp;
    }

    return array
}

console.log(selectionSort(numbers));