/*
Write a recursive function called isPalindrome which returns true if the string passed
to it is a palindrome (reads the same forward and backward). Otherwise return false.
 */

function isPalindrome(str) {
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false;
}


// function isPalindrome(str) {
//   let lowStr = str.toLowerCase();
//   for(let i = 0; i < lowStr.length / 2; i++) {
//     if(lowStr[i] !== lowStr[lowStr.length - 1 - i]) {
//       return false;
// 	}
//   }
//   return true
// }
//
// const res = isPalindrome('tacocat')
// console.log(res);


