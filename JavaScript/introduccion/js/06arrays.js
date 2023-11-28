// arrays
// aunque son arrays, en js se les considera de tipo object
// un array, es una variable cuyo contenido son varios datos en una lista separada por comas
const tech = [10, 20, "hola", true];
// const num1 = 123;
// console.log(tech[2]); // los corchetes [] eligen la posición con la que queremos trabajar
console.table(tech);
// console.log(tech.length); // método .length devuelve el tamaño
// console.log("letra".length); // del string
// console.log(num1.length); // devuelve undefined porque no puede el tamaño de un number.
// console.log(tech.toString()); // mimprime el array 10,20,hola,true


// Añadir elementos de la manera antigua
// cada vez se usa menos porque modifica el array original
// tech.push("push"); // lo añade al final
// tech.unshift("unshift"); // los añade al final

// Eliminar elementos de la manera antigua
// tech.pop(); // eliminada el ultimo elemento
// tech.shift() // elimina el primero
// tech.splice(2, 3) // elimina desde, nº de elementos y si no pones el nº, elimina hasta el final

// Modificar elementos de la manera antigua
// tech[0] = "Modificado";

// Añadir elementos sin modificar el original
// para que no se modifique el original usamos el spread operator
// const tech2 = [...tech, "al final"]; // lo añade al final del array copia
const tech2 = [, "al inicio", ...tech]; // lo añade al inicio del array copia
// console.tadble(tech2);

// Eliminar elementos sin modificar el original
// filter tiene una function() que hace que a cada elemento le aplique...
// si queremos un array de un valor en concreto
const tech3 = tech.filter( function(posicion) {
      // console.log("desde filter");
      return posicion === "hola"
})
// console.table(tech3);

// si queremos todos los valores menos uno en concreto
const tech4 = tech.filter(function (elemento) {
      //console.log("desde filter");
      return elemento !== "hola";
});
// console.table(tech4);

// Modificar elementos
const tech5 = tech.map(function(valor) {
      if (valor === "hola") {
            return "HolaMap";
      } else {
            return valor
      }
})
// console.table(tech5);

// entonces si queremos mostrar los elementos 
const tech6 = tech.map(function (valor) {
      // console.log(valor);
});

//Destructuring de arrays
const nombres = ["Marco", "Pedro", "Juan", "Vladimir"];
// con destructuring, usamos las posiciones del array
const [pos0, pedro, pos2, vla] = nombres;
console.log(pos0, pedro, pos2, vla);
// si solo queremos extraer por ejemplo la ultima
const [ , , , vladimir] = nombres;
console.log(vladimir); 





