// Creating a class 

class Person{
    // Constructor
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    //A function for the class
    introduce(){
        console.log(`My name is ${this.name} and I am of type ${this.type}`);
    }
}

let player1 = new Person("ooga", "booga");
player1.introduce();

// Inheriting from a class 

class Wizard extends Person{
    // Constructor still has to be made
    constructor(name,type){
        super(name,type); // Calls the constructor of the Parent class
    }
    play(){
        console.log(`Humdidally scumdidally wizard ${this.name} is here`);
    }
}

let player2 = new Wizard("poopa", "poopy");
player2.introduce();
player2.play();