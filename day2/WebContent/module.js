var player = (function(){ 
	var cnt = 0;
	function play(){
		console.log("play..");
		increment();
	}
	function increment(){
		cnt++;
	}
	function getCount(){
		return cnt;
	}
	return { play : play, count :getCount};
})()
//////////////////////////////////////////
player.cnt = -2;
player.play();
player.play();
//player.increment();
//increment();
console.log(player.count());

