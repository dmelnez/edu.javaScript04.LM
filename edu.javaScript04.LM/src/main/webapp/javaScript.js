/**
 * 
 */

let array = ["PEPE", "JUAN", 9, 39,true]


function condicional(){

	let a = false;

		do{
		
		let i = prompt("Introduzca un valor");
				  
		if(i<=array.length){
			document.write(array[i]);
			a = true;
		}
		  

	  }  

		while(!a);

 }