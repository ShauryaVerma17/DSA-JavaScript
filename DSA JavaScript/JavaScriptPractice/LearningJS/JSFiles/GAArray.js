let fruits = new Array("Mango", "Lolba", "poopy");
let fruits2 = ["Lolu", "molu", 2, true];
let br = "<br/>";

document.write(fruits + br);
document.write(fruits2 + br);
document.write(fruits[0] + br);
fruits[0] = "ohmagoitchanged";
document.write(fruits[0] + br);
document.write(fruits.length + br);

// Use comma separated string to make array 

let sentence = "poo,poopy,potty";
sentence = sentence.split(",");

document.write(sentence + br);
document.write(sentence[1]);

