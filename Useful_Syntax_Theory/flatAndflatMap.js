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

//flat method
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
//removes the nested arrays one level deep
// console.log(arr.flat())
//super nested Arr/ you can provide a depth value 1 is default
const arrNested = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrNested.flat(2))

const accountMovements = accounts.map(acc => acc.movements);
const movArr = accountMovements.flat();
//====================================
const addAllDeposits =
    movArr.filter(mov => mov > 0)
        .map(mov => mov)
        .reduce((acc, mov) => acc + mov, 0);
// console.log(addAllDeposits);

const totalAccountDeposits = accounts
    .map(acc => acc.movements)
    .flat()
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0)
// console.log(totalAccountDeposits);

const totalAccountWithdraw = accounts
.map(acc => acc.movements)
.flat()
.filter(mov => mov < 0)
.reduce((acc, mov) => acc + mov, 0)

// console.log(totalAccountWithdraw)
//Using flatMap = it basically combines map method and flattens it but only goes 1 level deep
const totalBalance =
    accounts.flatMap(acc => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalBalance)