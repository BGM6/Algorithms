'use strict';
const airline = 'TAP Air Portugal';
const plane = 'A320';
//indexOf Method
console.log(airline.indexOf('T'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
//slice Method
console.log(airline.slice(4, 7));
console.log(airline.slice(4));
//Combining slice and indexOf
console.log(airline.slice(0, airline.indexOf(' ')));
//lastIndexOf
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//Using negative numbers
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

//Function to see if the seat is in the middle
const checkMiddleSeat = function (seat) {
    //B and E are middle seats
    // const s = seat.slice(-1);
    // if(s === 'B' || s === 'E') console.log('Middle Seat');
    // else console.log('Not a middle seat');
    if (seat.includes('B') || seat.includes('E')) console.log('Middle');
    else console.log('Not a middle');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//Trim && toLowerCase && toUpperCase
// const email = 'HaYden@arEYouHappy.COM';
// const normalizedEmail = email.toLowerCase().trim();
// const capitalizeFirst = normalizedEmail[0].toUpperCase() + normalizedEmail.slice(1);
// console.log(capitalizeFirst);

//bRyAn = Bryan
const normalizeString = function (str) {
    let normalized = str.toLowerCase().trim();
    let upperFirst = normalized[0].toUpperCase();
    return upperFirst + normalized.slice(1);
};

console.log(normalizeString('HellO World'));

//replace method
const priceGB = '399,215£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const hello = 'hello dude, hello dude';
//replaceAll is NOT READY YET can you regex
// hello.replaceAll('dude', 'world');
const newStr = hello.replace(/dude/g, 'world');
console.log(newStr);

//includes && startWith
const airPlane = 'Airbus A320neo';
console.log(airPlane.includes('bus'));
console.log(airPlane.startsWith('Air'));

//split method
//Returns the string in an array
const splitStr = 'a+very+nice+string';
console.log(splitStr.split('+'));
//join method
const [firstName, lastName] = 'Bryan Guilas'.split(' ');
// console.log(firstName, lastName)
const joinStr = ['Mr.', firstName.toLowerCase(), lastName.toUpperCase()].join(' ');
console.log(joinStr);

//padStart, padEnd
const padStartStr = '4567589';
console.log(padStartStr.padStart(20, '*'));
console.log(padStartStr.padEnd(20, '*'));
//Repeat
const repeatStr = 'Hello Everyone!';
console.log(repeatStr.repeat(5));

