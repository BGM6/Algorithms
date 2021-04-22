const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

//SETTING DEFAULT VALUES
//Renaming the starterMenu to starter, Menu doesn't exist so we set a default of an empty array
const {menu = [], starterMenu: starter} = restaurant;
const {name: restaurantName, openingHours: hours, mainMenu: restaurantMenu} = restaurant;
console.log(restaurantName, hours, restaurantMenu);
//MUTATING VARIABLES
let a = 111;
let b = 999;
console.log(a, b);
const obj = {a: 23, b: 36, c: 28};
//SINCE a and b ARE ALREADY DECLARED ABOVE YOU HAVE TO WRAP IN PARENS
({a, b} = obj);
console.log(a, b);
//NESTED OBJECTS WORKING WITH THE openingHours OBJECT
const {fri: {open, close}} = openingHours;
console.log(open, close);
//YOU CAN ASSIGN DIFF VARIABLES ALSO
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);

