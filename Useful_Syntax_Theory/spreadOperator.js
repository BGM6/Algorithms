const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },


};

const arr = [4, 5, 6];
const naiveArrSolution = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(naiveArrSolution);

const useSpreadOperator = [1, 2, 3, ...arr];
// console.log(useSpreadOperator);
//CREATE SHALLOW COPIES OF ARRAYS
const starterMenuCopy = [...restaurant.starterMenu];
console.log('Original',restaurant.starterMenu);
console.log('Copy',starterMenuCopy);


//COMBINING ARRAYS
const mainMenuPlusStarterMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(mainMenuPlusStarterMenu);

