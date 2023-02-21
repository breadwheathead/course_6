// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе 
// объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function getObject(number) {
	
	if (number < 0 || number > 999) {
		return {};
	};

	numberObj = {
		units: 0,
		dozens: 0,
		hundreds: 0,
	};

	numberObj.hundreds = Math.floor(number / 100);
	var remainder = (number % 100);
	numberObj.dozens = Math.floor(remainder / 10);
	numberObj.units = remainder % 10;

	return numberObj;
};

num = Number(prompt("Введите число от 0 до 999: "));
console.log(getObject(num));
