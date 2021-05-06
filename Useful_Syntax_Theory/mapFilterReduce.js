'use strict';

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

console.log(description);