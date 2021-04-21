/*
Frequency Counter -sameFrequency
Write a function called sameFrequency. Given two positive integers, find out
if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities
Time: O(N)
sameFrequency(182, 281)//true
sameFrequency(34, 14)//false
sameFrequency(3589578, 5879385)//true
sameFrequency(22, 222)//false
 */
// let n = 12345;
// let num = (''+n).split('');
// console.log(num);
// let num2 = num.join('');
// console.log(num2);

// const n = 123456;
// const digits = [...`${n}`];
// console.log(digits)

function sameFrequency(num1, num2) {
  const hash = {};
  const n1 = [...`${num1}`]
  const n2 = [...`${num2}`]
  if(n1.length !== n2.length) return false;
  for(let num of n1) {
    hash[num] ? hash[num]++ : hash[num] = 1;
  }
  for(let num of n2) {
	if(!hash[num]) {
	  return false;
	} else {
	  hash[num] -= 1;
	}
  }
  return true;
}

// console.log(sameFrequency(182, 111))//true
//
// let number = 12345;
// let arrNum = [...`${number}`];
// console.log(arrNum)

// sameFrequency Solution
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
//
//   let countNum1 = {};
//   let countNum2 = {};
//
//   for(let i = 0; i < strNum1.length; i++){
// 	countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
//
//   for(let j = 0; j < strNum1.length; j++){
// 	countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
//
//   for(let key in countNum1){
// 	if(countNum1[key] !== countNum2[key]) return false;
//   }
//
//   return true;
// }


