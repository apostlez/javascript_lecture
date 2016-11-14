//var arr = new Array();

var arr = ["BMW", "Bentz", "Audi"]
/*arr[0] = "BMW";
arr[1] = "Bentz";
arr[2] = "Audi";
*/
console.log("length:" + arr.length);
for(var i = 0; i < arr.length; i++){
	console.log(arr[i]);
}


var arr2 = new Array(1,2,3);
var arr3 = new Array(3);
var arr4 = [1,2,3];
var arr5 = [3];
arr5[2] = "abc";
arr5[100] = new Object();

console.log(arr2.length, arr3.length, arr4.length, arr5.length);
arr5.length = 20;
console.log(arr5.length)