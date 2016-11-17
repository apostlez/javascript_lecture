

var obj = new Object();
obj.name = 'lee';


Object.defineProperty(obj, 'age', {
						value : 27,
						writable : false,
						enumerable : false,
						configurable : true}); // obj.age = 27;
obj.age = 30;
console.log(obj.name, obj.age);
console.log(obj);

function Person(name, age){
	_name = name;
	Object.defineProperty(this, "name", {
							set:function(v){
								console.log('set:' + v);
								_name = v;
							},
							get:function(){
								console.log('get:');
								return _name;
							}
	});
}
var lee = new Person('lee');
lee.name = "kim";
console.log(lee.name);

