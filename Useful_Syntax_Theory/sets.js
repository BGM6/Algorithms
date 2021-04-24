//SETS
//Order of sets does not matter andy values must be unique, can not have duplicates
const orderSet = new Set([
    'Pizza',
    'Pasta',
    'Pasta',
    'Pizza',
    'Spam',
    'Hamburger',
    'Hamburger',
    'Risotto'
]);
console.log(orderSet);

//You can create a set of any iterables like strings
const str = new Set('bryanbryan');
console.log(str);

//Getting the size of the st
console.log(orderSet.size);
//Checking if the set contains a value using .has (returns a boolean)
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Rice'));
//You can also add values to a set
console.log(orderSet.add('Yogurt'));
//You can also delete values in a set
orderSet.delete('Yogurt');
console.log(orderSet);
//You can also clear as set by .clear
//orderSet.clear();

//Sets are also iterable
for (const order of orderSet) {
    console.log(order);
}

//Example of use case of Sets
//If you need to get rid of duplicates of values from an array you can use a set
//Then use the spread operator to create a new array minus the duplicates
const staff = ['Waiter', 'Chef', 'Manager', 'Host', 'Waiter', 'Waiter'];
//You can just directly unpack the set using the spread operator no need to create a new variable
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
// const uniqueArr = [...uniqueStaff];
// console.log(uniqueArr);