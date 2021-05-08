'use strict';
// Data
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

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
}

createUsernames(accounts);

// console.log(accounts)

const movements = [200, 450, -400, 3000, -650, -130, 701, 1300];
//convert euro to us dollars
const euroToUsd = 1.1;

const res = movements.map(mov => {
    return mov * euroToUsd;
});

const description = movements.map((mov, i, arr) => {
    if (mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`;
    } else {
        return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
    }
});
// console.log(description);
//FILTER

const deposits = movements.filter(mov => {
    return mov > 0;
})

const withdrawals = movements.filter(mov => {
    return mov < 0;
})

// console.log(withdrawals)

//REDUCE
// The reduce Method
// console.log(movements);

// accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
// console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
    if (acc > mov) return acc;
    else return mov;
}, movements[0]);
// console.log(max);

//const movements = [200, 450, -400, 3000, -650, -130, 701, 1300];

const totalDeposits = movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0)

console.log(totalDeposits)
























