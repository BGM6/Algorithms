'use strict';

const upperFirstWord = function(str) {
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others ].join(' ');
}

console.log(upperFirstWord('hello world'))