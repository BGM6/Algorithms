/*
Write a recursive function called fib which accepts a number and returns the nth number in
the Fibonacci sequence. Recall that the fibonacci sequence is the sequence of whole
numbers 1, 1, 2, 3, 5, 8...which starts with 1 and 1, and where every number thereafter is
equal to the sum of the previous two numbers.
 */
function fib(num){
 let arr = [0,1];
 for(let i = 2; i < num + 1; i++) {
   arr.push(arr[i - 2] + arr[i -1])
 }
return arr[num];
}
console.log(fib(4));


// function fib(num) {
//   /*
//   1,1,2,3
//    */
//   //base case
//   if (num <= 2) return 1;
//   //recursion
//   return fib(num - 1) + fib(num - 2);
// }
//
// const res = fib(100)
// console.log(res)
