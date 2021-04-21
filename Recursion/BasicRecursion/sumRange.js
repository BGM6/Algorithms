//This add the numbers in the range of the num 4 = 1 + 2 + 3 + 4 = 10;
function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3))
/*
sumRange(3)
return 3 + sumRange(2) = 3 + 3 = 6
            return 2 + sumRange(1) = 1
                    return 1 = 1
 */
