'use strict';
//str = 'heLLo woRLD'
//lowercase it then capitalize the first using higher order functions

const greet = (greeting) => {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

greet('Hello')('Hayden');

