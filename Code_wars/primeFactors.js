//check for a numbers prime factors
function primeFactors(n) {
  let factors = [];
  let divisor = 2;

  while(n > 2) {
	if(n % divisor === 0) {
	  // first time through divisor is 2, n = 10, 10 % 2 === 0 so push 2 into the array
	  factors.push(divisor);
	  //n is 10, set n to n / divisor, n = 10 / 2 next time through n = 5
	  n = n / divisor;
	} else {
	  divisor++;
	}
  }
  return factors;
}
//15 % 2 === 1 so else runs add 1 to the divisor
// 15 % 3 === 0 so we push the divisor to the array then 15 = 15 / 3 so n === 5
// 5 % 3 === 2 so else runs add 1 to the divisor
//5 % 4 ==== 1 so else runs add 1 to the divisor
//5 % 5 ===== 0 so we push the divisor to the array then 5 = 5/5 so n === 0 while loops ends since 0 < 2;

console.log(primeFactors(15));
