// all of these properties are placed somewhere in momory at random locations 
let user = {
    age : 23,
    name : "OoongaBoonga",
    magic : true,
    scream : function() {
        alert("Ahhhhhhhhhhhhhhhhhhhhhh");
    }
}

// but accessing is O(1)
user.scream();
console.log(user.age);

// Insertion also O(1)
user.spell = "oongi Boongi";
console.log(user.spell);

// Deletion is also O(1)
