let person = {
    name: "John",
    age: 30,
    city: "New York",
    printName : function(){
        document.write("lolololol " + this.name);
    }
  };
  
  console.log(person);
  console.log(person.name + person.age + person.city);
  person.printName();
  