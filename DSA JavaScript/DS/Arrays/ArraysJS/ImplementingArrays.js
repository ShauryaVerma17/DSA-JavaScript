class CustomArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
    }

    get(index){
        return this.data[index];
    }

    pop(){
        const removedItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return removedItem
    }

    delete(index){
        for(let i = index; i<this.length; i ++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

let customArray = new CustomArray();

customArray.push('lolba1');
customArray.push('lolba2');
customArray.push('lolba3');
customArray.push('lolba4');
customArray.push('lolba5');
customArray.push('lolba6');
customArray.pop();
customArray.delete(2);

console.log(customArray.data);
console.log(customArray.length);

