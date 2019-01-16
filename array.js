// import Memory from './memory';
'use strict';

const Memory = require('./memory');
const memory = new Memory();

// class Array {
//   constructor () {
//     this.length = 0;
//     this._capacity = 0;
//     this.ptr = memory.allocate(this.length);
//   }

//   push(value) {
//     this._resize(this.length + 1);
//     memory.set(this.ptr + this.length, value);
//     this.length++;
//   }

//   _resize(size) {
//     const oldPtr = this.ptr;
//     this.ptr = memory.allocate(size);
//     if (this.ptr === null) {
//       throw new Error('Out of memory');
//     }
//     memory.copy(this.ptr, oldPtr, this.length);
//     memory.free(oldPtr);
//   }
// }

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }
}

//add an item to the array
function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();
  // arr.push(3); // Array { length: 1, ptr: 0 }
  // arr.push(5);
  // arr.push(15);
  // arr.push(19); // pointer changing to relocate the new array 
  // arr.push(45);
  // arr.push(10); // Array { length: 6, ptr: 15 }
  // arr.push(10);
  // arr.push(10);
  // arr.pop();
  // arr.pop();
  // arr.pop();
  arr.push(3); // value prints b/c its a #
  arr.push('taylor'); // NaN b/c it's a string
  console.log(arr.get(1));
  // console.log(arr());
  // console.log(arr[3]); // how to print first value
}

// console.log(Array().arr);
main();

module.exports = Array;