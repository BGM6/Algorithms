/*
This function accepts an array and a value, loop through the array and check if
the current array element is equal to the value. If it is, return the index
at which the element is found. If the value is never found, return -1;
 */

const nums = [22,5,88,99,100,239,123,81];

const linSearch = (arr, val) => {
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(num === val) return i;

  }
  return - 1;
}

console.log(linSearch(nums, 5))