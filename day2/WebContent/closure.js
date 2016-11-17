//var window = new Object();
//window.alert = ...
//window.console......

//function main(window){
var x = "global"; //window.x = "global";
console.log(x); // window.x 

function f(){
// ?act = new Object();
// ?act.arugment = [....];
// ?act._parent = window
	debugger;
	var x = "local"; //?act.x = "local";
	var y = "yy";
	var w = "www";
	var z = "zzz";
	console.log(x); //  ?act.x --(fail) --> 2: ?act._parent.x 
	return function(){
		// ??act = new Object();
		// ??act.arugment.....
		// ??act._parent = ?act
		//var x = "local2"; // ??act.x = "local2";
		console.log(x, y);   // ??act.x -(fail)-> 2: ??act._parent.x --(fail) --> 3: ??act._parent._parent.x
	}
}
var local = f();
local();


//} // end of main