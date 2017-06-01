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


var boton = document.getElementById("boton-agregar"); 
var mensajeVacio = document.getElementById("message");

    
   boton.setAttribute("disabled", "disabled"); 
   mensajeVacio.addEventListener ("keypress",validar);
    
function validar () {
       
       if (mensajeVacio.value != "") {
        boton.removeAttribute("disabled"); 
    } else {
        boton.setAttribute("disabled", "disabled")
    }
       
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



