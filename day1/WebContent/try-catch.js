
// 제공자 provider
function plus(a, b) {
	if( a > 0 && b > 0) {
		return a + b;
	} else {
		var obj = new Error("parameter should not be negative");//{name:'NagativeErr', message:"parameter should not be negative"};
		throw obj; // error
	}
}



//////////////////////////////////////////////////////////////////
// 소비자 consumer
try {
var r = plus(10, -20);
//if( r != -1 ){
	var r2 = r * 12 / 365 * 6.5;
	console.log("result: " + r2);
}catch(e) {
//} else {
	console.log("error:" + e.message);
}
