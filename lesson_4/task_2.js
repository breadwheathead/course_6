// 2. Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.

function getTotal(basket) {	
	var total = 0;
	for (el = 0; el < basket.length; el++) {		
		total += basket[el].price;
	}
	return total;
}

var basket = {
	products: 
	[
		{name: 'хот-дог', price: 99},
		{name: 'гамбургер', price: 299},
		{name: 'чизбургер', price: 329},
		{name: 'фри', price: 99},
		{name: 'кола', price: 101},
	],
	total: function getTotal() {
		var total = 0;
		for (num in this.products) {
			total += this.products[num].price;
		}
		return total;
	},
};

console.log(basket.total());