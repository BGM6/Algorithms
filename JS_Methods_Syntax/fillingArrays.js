const x = new Array(7);
x.fill(1);
console.log(x);

//Array.from()
const y = Array.from({length: 10}, () => 7);
console.log(y);

const z = Array.from({length: 7}, (cur, i) => i + 1);
console.log(z);

const diceRollArr = Array.from({length: 25}, () => Math.trunc(Math.random() * 6) + 1);
const sortRoll =
    diceRollArr.sort((a, b) => a - b)
        .filter(roll => roll >= 3 || roll === 1)
        .reduce((acc, roll) => acc + roll, 0)
console.log(sortRoll);