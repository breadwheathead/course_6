// 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

Tc = prompt('Inter the temperature: ');
Tf = (9 / 5) * Tc + 32;
alert("Result Fahrenheit: " + Tf);