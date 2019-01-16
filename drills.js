'use strict';

/* ==== URLify a string ==== */
// const urlify = url => {
//   let urlified = '';
//   for(let i=0; i <url.length; i++){
//     if( url[i] === ' '){
//       urlified += '%20';
//     } else {
//       urlified += url[i];
//     }
//   }
//   return urlified;
// };

// console.log(urlify('i love dogs'));

/* ==== Filtering an array ==== */
//Input: [2, 3, 5, 8, 9, 10];
//Output: [5, 8, 9, 10 ];
// const filter = arr => {
//   let result = [];
//   arr.forEach( i => {
//     if(i >= 5 ){
//       result.push(i);
//     }
//   });
//   return result;
// };

// console.log(filter([2, 3, 5, 8, 9, 10]));

/* ==== Max sum in the array ==== */
// Input: [4,6,-3,5,-2,1]
// Output: 12
// function maxSum(array) {
//   const reducer = (total, sum) => total + sum; 
//   return array.reduce(reducer);  
// }
// console.log(maxSum([4,6,-3,5,-2,1]));

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


// const sum = 
// const maxSum = 


/* ==== Merge Arrays ==== */
//Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// const merging = (arr1, arr2) => {
//   const newArray = [...arr1, ...arr2];
//   return newArray.sort((a,b)=> {return a-b;});
// };

// console.log(merging([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]));

/* ==== Remove Characters ==== */
// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

// const remove = (str, params) => {
//   // const strPrim = new String(params);
//   // const primStr = strPrim.valueOf();
//   // const regForm = new RegExp(primStr, 'gi');
//   // const newReg = new RegExp(\{'+strPrim+'\}', 'gi'); 
//   const reg = new RegExp(params, 'gi');

//   const res = new String(reg);
//   const result = str.replace(/res/gi, '');
//   return result;  
// };

// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));


// const remove = (str, params) => {
//   const strPrim = new String(params);
//   const primStr = strPrim.valueOf();
//   const regForm = new RegExp(params, 'gi'); 

//   const result = str.replace(regForm, '');
//   return result;  
// };

// console.log(remove('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
// 1. filter everything besides params

/* ==== Products ==== */
//Input:[1, 3, 9, 4]
//Output:[108, 36, 12, 27]

const products = arr => {
  const results = [];

  const sorted = arr.sort();
  for(let i =0; i < sorted.length; i++){
    for(let j=1; j < sorted.length-2; j++){
      let result = sorted[i]*(sorted[j] * sorted[j+1]) * sorted[j+2]; 
      
      // console.log(result); 
      results.push(result); 

    }
  }
  return results;
};

console.log(products([1, 3, 9, 4]));

const _products = arr => {
  const results = [];
  const sorted = arr.sort();
  for(let i =0; i < sorted.length; i++){
    let product = 1;
    for(let j=0; j< sorted.length; j++){
      if(i!==j){
        product *= sorted[j];
      }
    }
    results.push(product);
  }
  return results;
};

console.log('from _products:',_products([1, 3, 9, 4]));


/* ==== 2D array ==== */





/* ==== String rotation ==== */