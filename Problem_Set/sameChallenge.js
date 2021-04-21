//Write a function called same, which accepts two arrays
//the function should return true if every value in the
//array has it's corresponding value squared in the second array
//The frequency of values must be the same


//O(n2) There is two for loops. Splice is a loop quadradic time
function same(arr1, arr2) {
  //if arr1 and arr2 length are not equal its auto false
  if (arr1.length !== arr2.length) {
	return false;
  }
  //loop through arri 1
  for (let i = 0; i < arr1.length; i++) {
	//check if arr1 squared value is in arr2
	const matched = arr2.indexOf(arr1[i] ** 2);
	// if there is no match return false
	//if there is no found value js returns -1
	if (matched === -1) {
	  return false;
	}
	//if there is a match remove arr2 value until there is nothing
	//resulting in a true
	arr2.splice(matched,1);
  }
  //return true
  return true;
}
// console.log(same([2,3,4],[4,9,16]));

//O(n) linear time much better than O(n2)
const same3 = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false;
  }
  const hash1 = {};
  const hash2 = {};
  for(let val of arr1) {
    hash1[val] ? hash1[val]++ : hash1[val] = 1;
  }
  for(let val of arr2) {
    hash2[val] ? hash2[val]++ : hash2[val] = 1;
  }
  for(let key in hash1) {
    if(!(key ** 2 in hash2)){
      return false;
	}
    if(hash2[key ** 2] !== hash1[key]) {
      return false;
	}
  }
  return true;
}
console.log(same3([2,3,4],[4,9,16]));











