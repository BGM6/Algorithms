//Given a string count the number of times a letter appears

let counter = str => {
  return str.split('').reduce((total, letter) => {
	total[letter] ? total[letter]++ : total[letter] = 1;
	return total;
  }, {});
};

const lettersNums = [...'abcdefhijklmnopqrstuvwxyz1234567890'];


console.log(counter2('jobelle'));