'use strict';

const revArr = arr =>
    arr.reduceRight((result, num) => {
        result.push(num);
        return result;
    }, []);


console.log(revArr([1, 2, 3, 4, 5]));