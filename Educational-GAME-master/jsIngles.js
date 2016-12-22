

var i=1;
var puntos = 0;


function cambia_imagen(opcion) {      
						
   var image = document.getElementById('foto');
   
   if(i <= 5){
	   
		if(i == 1){
			
			var modal = document.getElementById('myModal1');
			var modal2 = document.getElementById('myModal2');
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			
			if(opcion == "opcion2"){
				//alert("Bien");
				modal.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
				mostrarPunto1();
				puntos++;
			}else{
				modal2.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal2.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal2) {
					modal2.style.display = "none";
				}
			}
			}
			i++;
			image.src = "placaB.jpg";
			document.getElementById("1").innerHTML = "MOTHER BOARD";
			document.getElementById("2").innerHTML = "RAM";
			document.getElementById("3").innerHTML = "GRAPHIC CARD";
			document.getElementById("4").innerHTML = "SOUND CARD";
		
		} else if(i == 2){
			
			
			
			var modal = document.getElementById('myModal1');
			var modal2 = document.getElementById('myModal2');
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			
			if(opcion == "opcion1"){
				modal.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			mostrarPunto2();
				puntos++;
			}else{
				modal2.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal2.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal2) {
					modal2.style.display = "none";
				}
			}
			}
			i++;
			image.src = "procesador.jpg";
			document.getElementById("1").innerHTML = "SOCKET";
			document.getElementById("2").innerHTML = "RAM";
			document.getElementById("3").innerHTML = "GRAPHIC CARD";
			document.getElementById("4").innerHTML = "CPU";
			
		}else if (i == 3){
			
			var modal = document.getElementById('myModal1');
			var modal2 = document.getElementById('myModal2');
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			
			if(opcion == "opcion4"){
				modal.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			mostrarPunto3();
				puntos++;
			}else{
				modal2.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal2.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal2) {
					modal2.style.display = "none";
				}
			}
			}
			i++;
			image.src = "discD.jpg";
			document.getElementById("1").innerHTML = "ROM";
			document.getElementById("2").innerHTML = "CPU";
			document.getElementById("3").innerHTML = "HARD DISC";
			document.getElementById("4").innerHTML = "CPU";
				
		}else if(i == 4){
			
			var modal = document.getElementById('myModal1');
			var modal2 = document.getElementById('myModal2');
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			
			if(opcion == "opcion3"){
				modal.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			mostrarPunto4();
				puntos++;
			}else{
				modal2.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal2.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal2) {
					modal2.style.display = "none";
				}
			}
			}
			i++;	
			image.src = "tarjG.jpg";
			document.getElementById("1").innerHTML = "RAM";
			document.getElementById("2").innerHTML = "CPU";
			document.getElementById("3").innerHTML = "GRAPHIC CARD";
			document.getElementById("4").innerHTML = "SOUND CARD";
					
		}else if(i == 5){
			
			var modal = document.getElementById('myModal1');
			var modal2 = document.getElementById('myModal2');
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];
			
			if(opcion == "opcion3"){
				modal.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}
			mostrarPunto5();
				puntos++;
			}else{
				modal2.style.display = "block";
				// When the user clicks on <span> (x), close the modal
				span.onclick = function() {
				modal2.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
				if (event.target == modal2) {
					modal2.style.display = "none";
				}
			}
		}
	if(i == 5 && puntos < 3){
		window.location = "Fin2.html";
	}else if(i == 5 && puntos < 5 && puntos >= 3){
		window.location = "Fin1.html";
	}else if(i == 5 && puntos == 5){
		window.location = "Fin3.html";
   }
	}
   
}
	

}
function mostrarPunto1(){
document.getElementById('lvl1').style.display = 'block';
}
function mostrarPunto2(){
document.getElementById('lvl2').style.display = 'block';
}
function mostrarPunto3(){
document.getElementById('lvl3').style.display = 'block';
}
function mostrarPunto4(){
document.getElementById('lvl4').style.display = 'block';
}
function mostrarPunto5(){
document.getElementById('lvl5').style.display = 'block';
}

