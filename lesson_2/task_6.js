// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

function addition () {
	x = arguments[0];
	y = arguments[1];
	return x + y;
}

function substraction(x, y) {
	return x - y
}

function division(x, y) {
	return x / y;
}

function multyplication(x, y) {
	return x * y;
}

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case '+':
			return addition(arg1, arg2);
		case '-':
			return substraction(arg1, arg2);
		case '/':
			return division(arg1, arg2);
		case '*':
			return multyplication(arg1, arg2);
		default:
			return NaN;
	}
}

var a, b;

a = Number(prompt("Введите a: "));
b = Number(prompt("Введите b: "));
operation = prompt("Введите знак операции (+, -, /, *): ");
console.log(mathOperation(a, b, operation))

