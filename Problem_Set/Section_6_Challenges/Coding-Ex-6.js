/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks
whether the characters in the first string form a subsequence of the characters
in the second string. In other words, the function should check whether the
characters in the first string appear somewhere in the second string,
without their order changing.
Example:
isSubsequence('hello', 'hello world') //true;
isSubsequence('sing', 'sting') //true;
isSubsequence('abc', 'acb') //false;
 */

function isSubsequence(first, second) {
  let i = 0;
  let j = 0;
  if(!first) return true;
  while(j < second.length) {
    if(second[j] === first[i]) ++i;
    if(i === first.length) return true;
    j++
  }
  return false;
}

const res = isSubsequence('sing', 'sting') //true;
console.log(res);