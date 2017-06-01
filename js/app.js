// Cuando carga la página
window.addEventListener("load", function () {
     
	// Envío de To - Do
	var toDoForm = document.getElementById("to-do-form");
	toDoForm.addEventListener("submit", function (e) {
		e.preventDefault();
        
        
		// Obtenemos datos
		var contenedor = document.getElementById("posts");
		var mensajeContenedor = document.getElementById("message");
		var mensaje = mensajeContenedor.value;
         
        
		// Creamos elementos
		var postContenedor = document.createElement("article");
		var post = document.createElement("p");

		// Personalizamos elementos
		postContenedor.className = "jumbotron";
		post.textContent = mensaje;

		// Agregarlos al DOM
		postContenedor.appendChild(post);

		// Agregarlo a un elemento existente para visualizarlo
		contenedor.appendChild(postContenedor);

		// Borrar contenido de textarea
		mensajeContenedor.value = "";
        validar();
	});
    
});


// Función para que no publique texto vacío

var boton = document.getElementById("boton-agregar"); 
var mensajeVacio = document.getElementById("message");

    
   boton.setAttribute("disabled", "disabled"); 
   mensajeVacio.addEventListener ("keyup",validar); // se utiliza keyup ya que queremos que cuente los caracteres desde el momento en el que el usuario está escribiendo, keypress no funciona bien. 
    
function validar () {
       
       if (mensajeVacio.value.trim() != "") { // mensajeVacio puede ser sustituido por this, trim no cuenta los espacios
        boton.removeAttribute("disabled"); 
    } else {
        boton.setAttribute("disabled", "disabled")
    }
        
 }

// Contador de caracteres 

function contadorDeLetras () {
  numeroDeCaracteres = textoArea.value.length;
  var cantidadCaracteres = document.getElementById("cajaDeTexto");
  cantidadCaracteres.innerHTML = numeroDeCaracteres;
 }


/*
$(document).ready(function(){

     $('input[type="submit"]').attr('disabled','disabled');

    $('input[type="text"]').keypress(function(){

            if($(this).val() != ''){

               $('input[type="submit"]').removeAttr('disabled');

            }

     });

 });
*/



// 