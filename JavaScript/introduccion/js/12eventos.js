// eventos del DOM clicks

const heading = document.querySelector(".heading");
// cuando seleccionas un elemento, tienes acceso a otro método
// addEventListener va a estar esperando a que suceda el evento que se desea
// parametro 1 = al evento, parametro 2 es una función callback, es decir, 
// cuando se seleccione el evento, que es lo que se va a ejecutar
heading.addEventListener("click", () => {
      heading.textContent = "Título aleatorio con clicks " + Math.floor(Math.random() * 100);
}) // math floor redondea hacia abajo, si le pasas 5.9 te devuelve 5
// otra manera de hacer lo mismo es por separado:
// heading.addEventListener("click", clickHeading);

// const clickHeading = () => {
//       console.log("Has hecho click en el heading");
// }

// si queremos hacer un evento click a multiples selectores
// necesitamos iterar en cada uno de ellos
const enlaces = document.querySelectorAll(".navegacion a");
enlaces.forEach( enlace => {
      enlace.addEventListener("click", () => {
            console.log("Diste click en un enlace");
      })
})
