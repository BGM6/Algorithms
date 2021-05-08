//The Call and Apply methods with THIS keyword
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`, name: name
        });
    }
};
lufthansa.book(143, 'Hayden Lafrades');
lufthansa.book(144, 'Emerson Lafrades');
console.log(lufthansa);

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

};

const book = lufthansa.book;
//This does not work
// book('123', 'Niko and Roady');
//USE THE CALL METHOD
book.call(euroWings, 123, 'Niko and Roady');
book.call(lufthansa, 444, 'Finn Gagui');

//OLD WAY OF DOING IT
const flightData = [777, 'Adriana Pantovich'];
book.apply(euroWings, flightData);
//WE CAN JUST USE CALL AND SPREAD THE ARRAY
book.call(lufthansa, ...flightData);

//BIND METHOD
const bookEw = book.bind(euroWings);
const bookLh = book.bind(lufthansa);

bookEw(134, 'Becca Ramos');
bookLh(87, 'Niko Guilas');

//You can preset params using bind also

const book23 = book.bind(euroWings, 23);
book23('Air Jordan');


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document
    .querySelector('.buy')
    .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
