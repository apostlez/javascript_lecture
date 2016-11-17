function ProgressBar(parent, width, height){
	width = width || 300;
	height = height || 20;
	
	this.div = document.createElement('div');
	this.span = document.createElement('span');
	this.div_div = document.createElement('div');
	this.div_span = document.createElement('span');
	this.div.appendChild(this.span);
	this.div.appendChild(this.div_div);
	this.div_div.appendChild(this.div_span);
	
	parent = document.getElementById(parent);
	parent = parent || document.body;
	this.div.className = "progress";
	this.setSize(width, height);
	this.setPercent(0);
	parent.appendChild(this.div);
}
ProgressBar.prototype.setPercent = function(v){
	this.span.textContent = v + "%";
	this.div_span.textContent = v + "%";
	this.div_div.style.width = v + '%';
}
ProgressBar.prototype.setWidth = function(w=300){
	this.div.style.width = w + 'px';
}
ProgressBar.prototype.setHeight = function(h=20){
	this.div.style.height = h + 'px';
}
ProgressBar.prototype.setSize = function(w=300, h=20){
	this.setWidth(w);
	this.setHeight(h);
}