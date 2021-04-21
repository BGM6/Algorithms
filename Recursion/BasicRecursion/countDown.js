/*
Recursive functions invoke the same functions with a different input until you reach your base case

Two essential part of a recursive function.
 Base Case - The condition when the recursion ends.
 ***Different Input each call stack
 */

function countDown(num) {
  if(num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

/*
print 3
countDown(2)
print 2
countDown(1)
print 1
countDown(0) -- base case this is where it ends
 */

countDown(10)