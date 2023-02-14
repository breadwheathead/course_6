// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function addition() {
	x = arguments[0]
	y = arguments[1]
	return x + y
}

function substraction(x, y) {
	return x - y;
}

function division(x, y) {
	return x / y;
}

function multyplication(x, y) {
	return x * y;
}

var a, b;

a = Number(prompt("Введите a: "));
b = Number(prompt("Введите b: "));

console.log(addition(a, b));
console.log(substraction(a, b));
console.log(division(a, b));
console.log(multyplication(a, b));