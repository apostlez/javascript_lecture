function Customer(name, age){
	//var lee = new Object();
	this.name = name;
	this.age = age;
	this.discount = function(){
		return this.age * 0.1
	}
	//return this;
}

var lee = new Customer("lee", 27);
/*var lee = new Object();
lee.name = "lee";
lee.age = 27;
lee.discount = function(){
	return this.age * 0.1
}*/
var kim = new Customer("kim", 23);
/*var kim = new Object();
kim.nema = "kim";
kim.age = 23;
kim.discount = function(){
	return this.age * 0.2
}*/


var arr = [lee, kim];

arr.forEach(function(el, idx){
	console.log(idx, el.name, el.age, el.discount());
	console.log(typeof el);
	console.log(el instanceof Customer, el instanceof Object);
});

