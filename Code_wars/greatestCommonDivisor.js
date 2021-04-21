function greatestCommonDivisor(num1, num2) {
  let currentDivisor = 2;
  let greatestDivisor = 1;

  if(num1 < 2 || num2 < 2) return 1;

  while(num1 >= currentDivisor && num2 >= currentDivisor) {
    if(num1 % currentDivisor === 0 && num2 % currentDivisor === 0) {
      greatestDivisor = currentDivisor
	}
    currentDivisor++;
  }
  return greatestDivisor;
}

console.log(greatestCommonDivisor(14,21))