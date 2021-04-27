'use strict';
//str = 'heLLo woRLD'
//lowercase it then capitalize the first using higher order functions

const lowerCaseStr = function (str) {
    return str.toLowerCase();
};
const capitalizeFirst = function (str) {
    let lower = lowerCaseStr(str);
    console.log(lower.replace(lower[0], lower[0].toUpperCase()));


};


capitalizeFirst('heLLo woRLD');
