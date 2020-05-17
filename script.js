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


//merge sorted arrays 
mergeSortedArrays = (array1, array2) =>  {
    const mergedArray = [];
    let array1Item = array1[0]
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    //Check input 
    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array1
    }

    while(array1Item || array2Item){
      if(!array2Item || array1Item < array2Item){
          mergedArray.push(array1Item)
          array1Item = array1[i];
          i++;
      }  else {
          mergedArray.push(array2Item);
          array2Item = array2[j];
          j++
      }
    }

    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,21], [4,6,30]));

let user = {
    age: 54,
    name: 'Nikola',
    magic: true,
    scream: function() {
        console.log('ahhhh');
    }
}

user.age // 0(1)
user.spell = 'abra kadabra'
user.scream();

const a = new Map() // store value
const b = new Set() // store key


//implement HashTable
class HashTable {
    constructor(size){
      this.data = new Array(size);
      // this.data = [];
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  
    set(key, value) {
      let address = this._hash(key);
      if (!this.data[address]) {
        this.data[address] = [];
      }
      this.data[address].push([key, value]);
      return this.data;
    }
  
    get(key){
      const address = this._hash(key);
      const currentBucket = this.data[address]
      if (currentBucket) {
        for(let i = 0; i < currentBucket.length; i++){
          if(currentBucket[i][0] === key) {
            return currentBucket[i][1]
          }
        }
      }
      return undefined;
    }

    keys() {
        const keysArray = [];
        for(let i = 0; i < this.data.length; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0])
            }
        }
        return keysArray;
    }
  }
  
  const myHashTable = new HashTable(50);
  console.log(myHashTable.set('grapes', 10000))
  console.log(myHashTable.get('grapes'))
  console.log(myHashTable.set('apples', 9))
  console.log(myHashTable.get('apples'))


// first reccuring character

function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          return input[i];
        }
      }
    }
    return undefined
  }
  
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i]
      } else {
        map[input[i]] = i;
      }
    }
    return undefined
  }
  
console.log(firstRecurringCharacter2([1,5,5,1,3,4,6]))