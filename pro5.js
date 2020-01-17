

class button {
	constructor(boxbutton){
	this.boxbutton = boxbutton;	
	//console.log("FFFF");
	this.boxbutton.addEventListener('click', this.onClick);
	//console.log("DSD");
	}

	
random() {
  console.log("RRR");
  return Math.floor( Math.random() * Math.floor(256) );
}


	
onClick(){
	//console.log("JJJ");
	var i = 0;
  	for ( i; i < 10; i++ ){
		console.log(i);
		const box = document.createElement('div');
		box.style.top = 650 + i * 10;
    		box.style.left = 650 + i * 10;
    		box.style.width = 400 - 10 * i * 2;
   		box.style.height = 400 - 10 * i * 2;
		var x = Math.floor( Math.random() * Math.floor(256));
		var y = Math.floor( Math.random() * Math.floor(256));
		var z = Math.floor( Math.random() * Math.floor(256));
   		box.style.backgroundColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    		const colorBox = document.querySelector('body');
   		colorBox.appendChild(box);
  	}
	
	//console.log("JJJ");
}


}


container = document.querySelector('button');
button1 = new button(container);

