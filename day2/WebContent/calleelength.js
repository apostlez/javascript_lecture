function f(x,y,z) {
	var actual = arguments.length;
	var expected = arguments.callee.length; // f.length
	if(actual !== expected) throw new Error("invalid parameter count.");
	else console.log("invoke sucess:", x, y, z);
}

//f(); //err
//f(1,2); //err
//f(1,2,3,4); // err
f(1,2,3); // success