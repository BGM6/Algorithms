'use strict';

function createPhoneNumber(arr) {
  let template = '(xxx) xxx-xxxx';
  for (let n of arr) {
    template = template.replace('x', n)
  }
  console.log(template);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9]));
