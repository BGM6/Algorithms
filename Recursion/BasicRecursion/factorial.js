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


//Recursive way
function factorial(num) {
  //Termination
  if(num < 0) return;
  //Base case
  if(num === 1) return 1;
  //Recursion
  return num * factorial(num - 1);
}
console.log(factorial(3))

