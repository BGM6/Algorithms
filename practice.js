'use strict';

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// const convertTitleCase = title => {
//     const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);
//     const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//     const titleCase = title
//         .toLowerCase()
//         .split(' ')
//         .map(word => exceptions.includes(word) ? word : capitalizeFirstLetter(word))
//         .join(' ');
//     return capitalizeFirstLetter(titleCase);
// };


// console.log(convertTitleCase('the cat in the hat')); //'The Cat in the Hat

//1. cal the sum of all deposits of all accounts
const allDeposits = accounts.flatMap(acc => acc.movements)
    .filter(mov => mov > 0);
console.log(allDeposits);
//2. search for how many deposits 1000 or more
const amt1000 = accounts.map(acc => acc.movements)
    .flat()
    .filter(mov => mov >= 1000);
// console.log(amt1000)
// 3. Create a new object with deposits and withdrawals
// const {d, w} = accounts.flatMap(acc => acc.movements)
//     .reduce((sums, currentNum) => {
//         if (currentNum > 0) sums.d += currentNum;
//         else sums.w += currentNum;
//         return sums;
//     }, {d: 0, w: 0});

// const {d, w} = accounts.flatMap(acc => acc['movements'])
//     .reduce((sums, currentNum) => {
//         currentNum > 0 ? (sums.d += currentNum) : (sums.w += currentNum);
//         return sums;
//     }, {w: 0, d: 0});

// const {d, w} = accounts.flatMap(acc => acc.movements)
//     .reduce((sums, currentNum) => {
//         sums[currentNum > 0 ? 'd' : 'w'] += currentNum;
//         return sums;
//     }, {d: 0, w: 0});
// console.log(d, w);

const convertTitleCase = title => {
    const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
    const caseTitle = title
        .toLowerCase()
        .split(' ')
        .map(word => exceptions.includes(word) ? word : capitalizeFirstLetter(word))
        .join(' ');
    return capitalizeFirstLetter(caseTitle);
};

console.log(convertTitleCase('the cat IN The hAt'));