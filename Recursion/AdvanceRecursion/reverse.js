/*
Write a recursive function called reverse which accepts a string and returns a new string
in reverse.
 */

function reverse(str) {
  //base case
  if(str.length <= 1) return str;
  //recursion
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('cat'))
/*
'cat'
return reverse('at') + 'c' === tac;
	return reverse('t') + 'a' === ta
		return reverse('t') === t


 */

// let s = 'cat';
// console.log(s.slice(1))