// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
	if (pow === 0) {
		return 1;
	}
	else if (pow > 1) {
		val *= power(val, --pow);
	};
	return val;
};

debugger
result = power(2, 10);
console.log(result);