// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// 1, 2, 3, 5, 7

var size = 100;
var el = 0;

console.log(el++);

label: while (el <= size) {
	var den = 2;
	while (den < el) {
		if (el % den == 0) {
			++el;
			continue label;
		}
		++den;
	};
	console.log(el;
	++el;
};
