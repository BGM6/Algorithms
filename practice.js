'use strict';
const solve = (strArg) => {
    const hash = {};
    for (let char of strArg) {
        hash[char] ? hash[char]++ : hash[char] = 1;
    }
    for (let val of Object.values(hash)) {
        if (val % 2 === 1) return false;
    }
    return true;
};

const res = solve('aabbccdd');
console.log(res);