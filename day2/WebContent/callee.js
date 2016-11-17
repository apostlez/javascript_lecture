function factorial(x){
	if(x <= 1) return 1;
	//else return x * factorial(x-1);
	else return x * arguments.callee(x-1);
}

var f = factorial;
factorial = 10;

//console.log(factorial(5));
console.log(f(5));


function f2(){
	console.log(f2 === arguments.callee);
}
f2();