let randomArray =
	Array.apply(null, {length: 10}).map(Function.call, Math.random );

console.log(randomArray);