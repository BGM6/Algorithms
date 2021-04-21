//Check for prime number
function isPrime(n) {
  let divisor = 2;
  while(n > divisor) {
	if(n % divisor === 0) {
	  return false;
	} else
	  divisor++;
  }
  return true;
}

console.log(isPrime(5));
/*
5 % 2 === 1 so else runs divisor + 1;
5 % 3 === 2 so else runs divisor + 1;
5 % 4 === 1 so else runs divisor + 1;
5 > 5 === false while loop stops return true;
*/
