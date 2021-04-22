/*
Shallow copies duplicate as little as possible. A shallow copy of a collection is a copy of the
collection structure, not the elements. With a shallow copy, two collections now share the individual elements.

Deep copies duplicate everything. A deep copy of a collection is two collections with all of the
elements in the original collection duplicated.
*/


//SHALLOW COPY
let employeeDetailsOriginal = {name: 'Manjula', age: 25, Profession: 'Software Engineer'};
//Let’s say you want to create a duplicate of this, so that even
// if you change the original values, you can always return to the original.
//I can do this:
let employeeDetailsDuplicate = employeeDetailsOriginal; //Shallow copy!
/*
If we change a value:
This statement will also change name from employeeDetailsOriginal, since
we have a shallow copy, or a reference to var employeeDetailsOriginal.
This means, you’re losing the original data as well. This points to the same memory in the computer.
 */
employeeDetailsDuplicate.name = 'NameChanged';
console.log(employeeDetailsOriginal);
console.log(employeeDetailsDuplicate);

//DEEP COPY
/*
But, creating a brand new variable by using the properties from the original
employeeDetailsOriginal variable, you can create a deep copy.
*/

let employeeDetailsDuplicateTwo = {
    name: employeeDetailsOriginal.name,
    age: employeeDetailsOriginal.age,
    Profession: employeeDetailsOriginal.Profession
}; //Deep copy!

//SOURCE https://blog.alexdevero.com/shallow-deep-copy-in-javascript/