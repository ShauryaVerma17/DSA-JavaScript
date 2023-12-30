class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    get(key){
        let index = this._hash(key);
        if(this.data[index]){
            return this.data[index][1];
        }
        return undefined;
    }

    set(key,value){
        let index = this._hash(key);
        this.data[index] = [key,value];
    }

    // Hash function - Implies we only accept strings as input
    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
}

let hashTable = new HashTable(50);
hashTable.set("Ooga", "Booga");
hashTable.set("Oogli", "Boogli");

console.log(hashTable.get("Ooga"));
console.log(hashTable.get("Oogli"));

// This implementation does not check for collision

