'use strict';
//Memoization
//Fiboncci sequence using memoized solution

function fib(num, memo = []) {
    if (memo[num] !== undefined) return memo[num];
    if (num <= 2) return 1;
    let res = fib(num - 1, memo) + fib(num - 2, memo);
    memo[num] = res;
    return res;
}

//Time Complexity === O(N)
//normal recursion without memoization was O(2n) which is way worst than O(n2)!
//Original recursion solution

// function fibTwo(num) {
//     if(num <= 2) return 1;
//     return fibTwo(num - 1) + fibTwo(num - 2);
// }
// console.log(fib(5));

//Tabulation
function fib_table(num) {
    if (num <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= num; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[num];
}

console.log(fib_table(300));

