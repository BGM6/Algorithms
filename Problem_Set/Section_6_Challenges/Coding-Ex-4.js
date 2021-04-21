/*
areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number
of arguments, and checks whether there are any duplicates among the arguments
passed in. You can solve this using the frequency counter pattern OR the multiple
pointers pattern.
 */


function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
	collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
	if(collection[key] > 1) return true
  }
  return false;
}

console.log(areThereDuplicates(1,5,2,2)) //true


// function areThereDuplicates(...params) {
//   const hash = {};
//   for(let val of params) {
//     hash[val] ? hash[val]++ : hash[val] = 1;
// 	console.log(hash);
//   }
//   for(let key in hash) {
//     if(hash[key] > 1) {
//       return true;
// 	}
//   }
//   return false;
// }
//
// console.log(areThereDuplicates(1,5,2,2)) //true


// areThereDuplicates One Liner Solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

//mutliple pointers
function areThereDuplicates() {
  let sortedArr = Array.from(arguments).sort();
  console.log(sortedArr)
  let j = 1;
  for(let arg in arguments) {
	if(sortedArr[arg] === sortedArr[j]) return true;
	else j++;
  }
  return false;
}
console.log(areThereDuplicates(5,4,3,2,1)) //true