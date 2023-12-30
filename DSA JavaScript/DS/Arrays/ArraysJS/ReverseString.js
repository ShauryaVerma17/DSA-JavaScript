function reverseString(str){
    let reversedString = [];
    for(let i = str.length; i>=0; i--){
        reversedString.push(str[i]);
    }
    let result = reversedString.join('');
    return result;
}

function reverseString2(str){
    return str.split('').reverse().join('');
}

console.log(reverseString("hello my nam jj"));
console.log(reverseString2("hello my nam jj"));
