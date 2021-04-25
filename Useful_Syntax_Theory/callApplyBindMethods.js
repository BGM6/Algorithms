//The Call and Apply methods with THIS keyword
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`, name: name
        })
    }
}
lufthansa.book(143, 'Hayden Lafrades');
lufthansa.book(144, 'Emerson Lafrades');
console.log(lufthansa)

const euroWings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],

}

const book = lufthansa.book;
//This does not work
// book('123', 'Niko and Roady');
//USE THE CALL METHOD
book.call(euroWings, 123, 'Niko and Roady')
book.call(lufthansa, 444, 'Finn Gagui')

//OLD WAY OF DOING IT
const flightData = [777, 'Adriana Pantovich'];
book.apply(euroWings, flightData)
//WE CAN JUST USE CALL AND SPREAD THE ARRAY
book.call(lufthansa, ...flightData)

//BIND METHOD