// selectores del DOM

//query selector hay 2 tipos
      // 1: .querySelector(); devuelve de 0 a máximo 1 elemento
      // 2: querySelectorAll(); devuelve todos los elementos que concuerden con el selector que has pasado

// entre los paréntesis se pone la etiqueta, clase, id. Como se escribe en css      



// USAMOS EL querySelector();


// con querySelector(); se puede acceder a las propiedades directamente
// se puede acceder con el nombre de la etiqueta
const titulo_1 = document.querySelector("h2");
console.log(titulo_1);

// se puede hacer con los hijos como css
const titulo_2 = document.querySelector(".DOM h2");
console.log(titulo_2);

// se puede hacer a una clase
const titulo_3 = document.querySelector(".heading");
console.log(titulo_3);

// se puede hacer a una clase
const titulo_4 = document.querySelector("#heading");
console.log(titulo_4);

// en las 4 opciones anteriores, siempre nos aparecerá el mismo resultado

// si queremos entrar mas en profundidad en el objeto titulo_
// mostramos el contenido
console.log(titulo_1.textContent);

// mostramos el tag name
console.log(titulo_1.tagName);

// mostramos las clases asociadas en forma de array (se puede agregar o eliminar clases)
console.log(titulo_1.classList);

// mostramos el id
console.log(titulo_1.id);



// USAMOS EL querySelectorAll();

// con querySelectorAll(); para acceder a las propiedades, hay que iterar en ellos
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);


// Vamos a manipular los datos del DOM de un elemento
const cambioH2 = document.querySelector("h2");
console.log(cambioH2);
cambioH2.textContent = "Gilipollas";

const inputNombre = document.querySelector("#nombre");
inputNombre.value = "hijo de puta";

// Vamos a manipular los datos del DOM de una lista
const enlaces2 = document.querySelectorAll(".navegacion a");
enlaces2[0].textContent = "Te cambio por otro";
console.log(enlaces2[0].textContent);
// ahora modifico todos
enlaces2.forEach(elemento => {
      // elemento.textContent = "Enlace a"; // asi cambia todos a "Enlaces a"
      console.log(elemento.textContent);
})
console.log(enlaces2[0].textContent);