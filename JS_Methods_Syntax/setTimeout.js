'use strict';

//SetTimeout
const ingredients = ['peperoni', 'olives'];

const pizzaTimer = setTimeout((ing1, ing2) => {
    console.log(`Here is your pizza with ${ing1} and ${ing2}.`);
}, 3000, ...ingredients);

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(() => {
    const now = new Date();
    console.log(now)
}, 5000);