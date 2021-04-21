let unSorted = [34,1,88,44,3,5,2, 1000];
// const res = unSorted.sort();
// console.log(res);
let unSortedStr = ['Bryan', 'Emerson', 'Beverley', 'Hayden', 'Roady', 'Jobelle', 'Niko', 'Beth'];
const strResult = unSortedStr.sort();
// console.log(strResult.sort());


//creating a function to handle sorting an array of nums from least to greatest
function sortNums(num1, num2) {
  return num1 - num2;
}
// console.log(unSorted.sort(sortNums));

//function to sort string in array by length
function compareByLen(str1, str2) {
  return str2.length - str1.length;
}
console.log(unSortedStr.sort(compareByLen))