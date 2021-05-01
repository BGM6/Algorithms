'use strict';

// function solve(str, k) {
//     let result = [];
//     for (let i = 1; i <= k; i++) {
//         result.push(str);
//     }
//     return result;
// }


const solve = (strArg, k) => {
    return Array(k).fill(strArg);
};
const res = solve('abc', 5);
console.log(res);

