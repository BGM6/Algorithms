//write a function that calculates the sum
//of all numbers from 1 up to and including some number n

function addUpTo(n) {
  let total = 0;
  for(let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}//O(n)

// console.log(addUpTo(10))

function AddUpTo2(n) {
  return n * (n+1) / 2;
} //O(1)

function logAtMost10(n) {
  for(let i = 1; i <= Math.min(n, 10); i++) {
    console.log(i)
  }
}

logAtMost10()

