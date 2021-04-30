'use strict';

<<<<<<< HEAD
function createPhoneNumber(arr) {
  let template = '(xxx) xxx-xxxx';
  for (let n of arr) {
    template = template.replace('x', n)
  }
  console.log(template);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
=======
const greet = (greeting) => {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

greet('Hello')('Hayden');

>>>>>>> 3715493e186e4b6eebd2e3339c001b97f2e554c2
