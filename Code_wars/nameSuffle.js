// function nameShuffler(str) {
//     let arr = [];
//     let strArr = str.split(' ');
//     arr.push(strArr.pop());
//     arr.push(strArr);
//     return arr.join(' ');
// }


// function nameShuffler(str) {
//     let arr = [];
//     let string = str.split(' ');
//     for (let i = string.length - 1; i >= 0; i--) {
//         arr.push(string[i]);
//     }
//     return arr.join(' ');
// }

function nameShuffler(str) {
    return str.split(' ').reverse().join(' ');
}
const res = nameShuffler('Guilas Bryan');
console.log(res);
