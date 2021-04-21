/*
Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns
the length of the longest substring with all distinct characters.

 findLongestSubstring('') //0
 findLongestSubstring('rithmschool') //7
 findLongestSubstring('thisisawesome') //6
 findLongestSubstring('thecatinthehat') //7
 findLongestSubstring('bbbbbb') //1
 */

function findLongestSubstring(str) {
let maxSubstringLen = 0;
let left = 0;
let hash = {};

for(let right = 0; right < str.length; right++) {
  let char = str[right];
  if(hash[char]) {
    left = Math.max(left, hash[char]);
  }
  maxSubstringLen = Math.max(maxSubstringLen, right - left + 1);
  hash[char] = right + 1;
}
return maxSubstringLen;
}

const res = findLongestSubstring('thecatinthehat') //7
console.log(res);

//thecatinthehat

//Using new Set();
// function findLongestSubstring(str) {
//   let leftWindow = 0;
//   let rightWindow = 0;
//   let max = 0;
//
//   let  charSet = new Set();
//
//   while(leftWindow < str.length) {
//     if(!charSet.has(str.charAt(rightWindow))) {
//       charSet.add(str.charAt(rightWindow));
//       rightWindow++;
//       max = Math.max(charSet.size, max);
//     } else {
//       charSet.delete(str.charAt(leftWindow));
//       leftWindow++;
//     }
//   }
//   return max;
// }
//
// const res = findLongestSubstring('thecatinthehat') //7
// console.log(res);