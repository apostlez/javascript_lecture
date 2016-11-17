name = "hello";

var obj = {name : 'goodbye'};

function f(a, b, c){
	console.log('this is f', a, b, c, this.name);
}

f(1,2,3);

f.apply(obj, [1, 2, 3]);
f.call(obj, 1, 2, 3);