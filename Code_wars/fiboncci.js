function fib(num) {
  let arr = [0, 1, 1, 2];
  for(let i = 2; i < num + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num];
}

console.log(fib(5))

/*
value indexes
(2 - 1) + (2 - 2) === 1 + 0 === 1
(3 - 1) + (3 - 2) === 2 + 1 ===  2
(4 - 1) + (4 - 2) === 3 + 2 === 3
 */