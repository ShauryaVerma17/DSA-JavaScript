// Method one of adding a base case to the recursive function
let counter = 0;
function inception(){
    // Base case
    if(counter > 3){
        return "done";
    }
    counter++;
    console.log("Not done yet");
    return inception(); // Returning is important :) 
}


console.log(inception());