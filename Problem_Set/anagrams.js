/* Given two strings, write a function to determine if the
second string is an anagram of the first. An anagram is a word,
phrase, or name formed by rearranging the letters of another, such as
cinema, formed from iceman*/

//edge case no periods, no numbers, no spaces, no lowercase
//MY SOLUTION
//function to take two arguments
const isAnagram = (str1, str2) => {
  //if string length don't match return false
  if(str1.length !== str2.length) {
    return false;
  }
//create two hash tables
  let hash1 = {};
  let hash2 = {};
//loop over both arguments
  for(let val of str1) {
    hash1[val] = (hash1[val] || 0) + 1;
  }
  for(let val of str2) {
    hash2[val] = (hash2[val] || 0) + 1;
  }
  //loop over first hash to get keys
  for(let key in hash1) {
    //if hash1 key not in hash2 return false
    if(!(key in hash2)) {
      return false
    }
    //if hash1 vals !== to hash2 vals return false
    if(hash1[key] !== hash2[key]) {
      return false;
    }
  }
//return true
  return true;
}

// console.log(isAnagram('rat','car')) //false
// console.log(isAnagram('hello', 'olleh')) //true
// isAnagram('hello', 'world')

//COLTS SOLUTION

function validAnagram(first, second) {
  if(first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for(let letter of first) {
    lookup[letter] ? lookup[letter]++ : lookup[letter] = 1;
  }
  for(let letter of second) {
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}


console.log(validAnagram('aaaa', 'aaaa')) //true

function isAnagram(first, second) {
  if(first.length !== second.length) return false;
  if(typeof first !== 'string' || typeof second !== 'string') return undefined;
  const hash = {};

  for(let value of first) {
    let letter = value.toLowerCase();
    hash[letter] ? hash[letter]++ : hash[letter] = 1;
  }
  for(let value of second) {
    let letter = value.toLowerCase();
    if(!hash[letter]) {
      return false;
    } else {
      hash[letter] -= 1;
    }
  }
  return true;
}

console.log(isAnagram('hello', 'hEllo'));












