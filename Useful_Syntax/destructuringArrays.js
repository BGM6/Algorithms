'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
//DESTRUCTURING ARRAYS
const arr = [2, 4, 6];
const [a, b, c] = arr;

//DESTRUCTURING ARRAYS FROM THE RESTAURANT OBJECTS
const [first, second] = restaurant.categories;
//TO SKIP INDEX
const [firstEl, , thirdEl] = restaurant.categories;
// console.log(firstEl, thirdEl)
//SWAPPING ELEMENTS WITHOUT DESTRUCTURING
let [main, secondary] = restaurant.starterMenu;
console.log(main, secondary);
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//SWAPPING WITH DESTRUCTURING
[main, secondary] = [secondary, main];
console.log(main, secondary);

//CALLING THE ORDER FUNCTION CONTAINED IN THE OBJECT
const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

//DESTRUCTURING NESTED ARRAY
const nestedArr = [2, 4, [6, 8, 10]];
const [i, , j] = nestedArr;
console.log(i, j);
const [x, , [k, l, m]] = nestedArr;
console.log(x, k, l, m);

//DEFAULT VALUES FOR DESTRUCTURING ARRAY
const [p, q, r = 1] = [8, 9];
console.log(p,q,r);