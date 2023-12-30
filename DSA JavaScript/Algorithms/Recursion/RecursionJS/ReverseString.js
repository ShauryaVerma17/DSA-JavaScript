function reverseString(data){
    if (str === "") {
        return "";
      } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
      }
}