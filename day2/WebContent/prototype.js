function P(){}


////////////////////////////////////
function F(){
	this.abc = 123;
}
F.prototype = new P();
var f = new F();
//////////////////////////////

var f = Object.create(new P(), {name:'abc', value:123});
//////////////////////////////////////////////////////
console.log(f.abc);
console.log(f.prototype, typeof f.prototype);
console.log( f instanceof Object);
console.log(f instanceof F);