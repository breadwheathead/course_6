// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3
// Почему код даёт именно такие результаты?

var a = 1, b = 1, c, d;
c = ++a; console.log(c); // c = 2, a = 2
d = b++; console.log(d); // d = 1, b = 2
c = (2 + ++a); console.log(c); // c = 5, a = 3
d = (2 + b++); console.log(d); // d = 4, b = 3
console.log('a == ' + a); // 3
console.log('b == ' + b); // 3