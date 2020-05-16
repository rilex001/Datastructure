const strings =['a', 'b', 'c', 'd']

//push add elements in array
strings.push('e');

//pop remove last elements in array
strings.pop(); // 0(1)

//unshift add element in the begining on the array
strings.unshift('n') // 0(n)

//shift remove first element
strings.shift()

//splice
strings.splice(2,0, 'alien') // 0(n/2)

console.log(strings)

//implementing array

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length
    }
    pop(){
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1];
        this.length--
        return lastItem
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index)
    }
    shiftItems(index) {
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push('hi')
newArray.push('zdravo')
newArray.pop()
console.log(newArray);

//reverse string 

const revString = string => {
//check input 
 if(!string || string.length < 2 || typeof string !== 'string'){
     return 'wrong input'
 }

 const backwards = [];
 const totalItems = string.length - 1;
 for( let i = totalItems; i >= 0; i--){
     backwards.push(string[i]);
 }
//  console.log(backwards)

 return backwards.join('')
}

const reverse2 = str => {
    return str.split('').reverse().join('')
}

console.log(revString('Aleksandar'))