// eventos del DOM clicks

const heading = document.querySelector(".heading");
// cuando seleccionas un elemento, tienes acceso a otro método
// addEventListener va a estar esperando a que suceda el evento que se desea
// parametro 1 = al evento, parametro 2 es una función callback, es decir, cuando se
// seleccione el evento, que es lo que se va a ejecutar
heading.addEventListener("click", function() {
      console.log("Has hecho click en el heading")
})