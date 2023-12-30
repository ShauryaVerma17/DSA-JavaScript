let br = "<br/>";

function writeArray(){
    document.write(strings + br);
}

const strings = ['a', 'b', 'c', 'd'];
// 4*4 = 16 bytes of Storage/RAM (Assuming 32 bit computer)

document.write(strings[2] + br);
// Go to array, and grab 3rd item : O(1)

strings.push('e'); 
// Add item at the end : O(1) Since we are just adding at the end, not looping through anything

writeArray();

strings.pop(); // Removing last element : O(1)
strings.pop();

writeArray();

strings.unshift('lol');
// add string to beggining of the array : O(n) since we have to loop through everything and reassign indexes 

writeArray();

strings.splice(2,0,'poopa')

writeArray();