/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
 */

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
  for(let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    if(alphabet.includes(letter)) {
      arr.push(alphabet.indexOf(letter) + 1)
	}
  }
  return arr.join(' ');
}
console.log(alphabetPosition('abcdZ'));