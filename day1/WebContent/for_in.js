var obj = {name:'lee', age : 27, height:undefined};

console.log('name' in obj);

if('height' in obj){
	console.log(obj.height);
}


for(var key in obj){
	var value = obj[key];
	console.log(key, value );
}


var arr = [1,2,3]; // 사용 하지 마세요!!!!!!!
arr.age = 27;
arr.name = 'lee';
for(var idx in arr){
	console.log(idx, arr[idx]);
}

for(var i = 0; i<arr.length; i++){
	console.log(i, arr[i]);
}

arr.forEach(function(el, idx){
	console.log(idx, el);
});

