/*
Write a function called power which accepts a ase and an exponent. THe function should
return the power of the base to the exponent. This function should mimic the functionality of
Math.pow(). Don't worry about negative bases and exponents
 */


function power(base, exponent) {
  if(exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

const res = power(2,4);
console.log(res)

/*

return 2  * power(2, 3) 2 * 8 = 16
	return 2 * power(2, 2) 2 * 4 = 8
		return 2 * power(2, 1) 2 * 2 = 4
			returns 2 * power(2,0) 2 * 1 = 2
				return 1
 */


//Non recursive way
// function power(base, exp){
//   powerBase = 0;
//   for(let i = 1; i <= exp; i++) {
// 	//console.log(base ** i)
// 	powerBase = Math.max(powerBase, base ** i)
//   }
//   return powerBase;
// }
//
// console.log(power(2, 4));