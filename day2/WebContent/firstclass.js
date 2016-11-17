function a() {
	console.log("a()");
	function b(f) {
		console.log("a-->b()");
		f();
	}
	return b;
}
//////////////////////////////////////////
function b() {
	console.log("b()");
}

var c = a();
c(b);