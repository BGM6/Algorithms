//First-Class and Higher Order functions
/*
FIRST CLASS FUNCTIONS IS JUST A CONCEPT NOTHING IN PRACTICE
Javascript treats functions as first-class citizens
This means that functions are simply values.
Functions are just another "type" of objects
HIGHER ORDER FUNCTIONS
A function that receives another function as an argument
that returns a new function or both
This is only possible because of first-class functions
*/
const greet = () => console.log('Hello!');
//btn listener is a higher order function greet is the callback function
// btn.addEventListener('click', greet);

//EXAMPLE: 1
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    console.log(`Transformed Str: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}`)
}

transformer('javascript is an awesome language!', upperFirstWord);

//EXAMPLE: 2
const removeLastFour = function (ccNumber) {
    let numStr = String(ccNumber)
    return numStr.slice(0, numStr.length - 3).padEnd(numStr.length + 1, '*');
}

const padLastFour = function (ccNumber, fn) {
    console.log(`Original ccNum: ${ccNumber}`)
    console.log(`Padded last four: ${fn(ccNumber)}`)
}

padLastFour(12345678910111213, removeLastFour)