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
}

//add an item to the array
function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();
  arr.push(3); // Array { length: 1, ptr: 0 }
  arr.push(5);
  arr.push(15);
  arr.push(19); // pointer changing to relocate the new array 
  arr.push(45);
  arr.push(10); // Array { length: 6, ptr: 15 }
  arr.push(10);
  arr.push(10);
  arr.push(10);
  arr.push(10);
  arr.push(10);
  arr.push(10);
  arr.push(10);
  console.log(arr);
}

console.log(main());

module.exports = Array;