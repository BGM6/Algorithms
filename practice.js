'use strict';
/*
Write a functional factorial which accepts a number and returns the factorial
of that number. A factorial is the product of an integer and all the integers
*/
// function factorial(num) {
//   let total = 1;
//   for(let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }
//
// console.log(factorial(3))

function factorial(num) {
    //Termination
    if (num <= 0) return;
    //Base case
    if (num === 1) return num;
    //recursion
    return num * factorial(num - 1);
}

// console.log(factorial(3));
let numsArr = [34, 1, 88, 44, 3, 5, 2, 1000];

function sortArr(num1, num2) {
    return num1 - num2;
}

console.log(numsArr.sort(sortArr));

function sumRange(num) {
    if (num === 1) return 1;
    return num * sumRange(num - 1);
}
console.log(sumRange(3))

