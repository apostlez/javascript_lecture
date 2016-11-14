var i = 10;
ii = 100;

window.alert('hello');
function f(){
	var j = 20;
	jj = 200;
	i = 30;
	console.log( i +","+ ii + "," + j + "," + jj);
}
f();
//f2();
console.log( i +","+ ii );
//console.log( j );
console.log(jj);


delete window.i;
delete window.ii;
console.log(window.i);
console.log(window.ii);
