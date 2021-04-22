'use strict';
//HOISTING
//
// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Bryan';
// let job = 'programmer';
// const year = 2021;

//function
// console.log('Declaration', addDeclarations(1, 1));
// console.log('Expression', addExpressions(1, 1));
// console.log('Arrow', addArrowFunc(1, 1));

// function addDeclarations(a, b) {
//     return a + b;
// }
//
// const addExpressions = function (a, b) {
//     return a + b;
// };
//
// const addArrowFunc = (a, b) => a + b;

//Example of pitfall of hoisting

// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// //let numProducts = 10;
//
// function deleteShoppingCart() {
//     console.log('All products deleted');
// }

//Scoping
// function calAge(birthYear) {
//     const age = 2021 - birthYear;
//     console.log(firstName);
//     return age;
// }
//
// // var lastName = 'Guilas';
// const firstName = 'bryan';
// calAge(1984);

//THIS KEYWORD
// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2021 - birthYear);
//     console.log(this);
// }
// // calcAge();
//
// const calcAgeArrow = (birthYear) => {
//     console.log(2021 - birthYear);
//     console.log(this);
// }
//
// calcAgeArrow(1984)
//
// const bryan = {
//     year: 1984,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// bryan.calcAge()
// console.log(bryan.year);
//
// const hayden = {
//     year: 2017
// }
// //Method borrowing syntax from objects so you don't have to write the method again in the object
// hayden.calcAge = bryan.calcAge;
// console.log(hayden.calcAge());

//PRIMITIVE VALUES
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//REFERENCE OR OBJECTS VALUES

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'

console.log('before lastName change', jessica);
console.log('after lastName change', marriedJessica);

//TO COPY AN OBJECT WE USE Object.assign();

const bekha = {
    firstName: 'Rebekha',
    lastName: 'Ramos',
    age: 24,
    family: ['Rachel', 'Mom']
}

//Object.assign is a shallow copy, will not copy nested object or arrays;
const bekhaMarried = Object.assign({}, bekha);
bekhaMarried.lastName = 'Guilas';
bekhaMarried.family.push('Hayden');
console.log(bekhaMarried);
console.log(bekha);


const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);
//
// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);