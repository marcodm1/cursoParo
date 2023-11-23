// Funciones - Declaracion de funciones

// parte del código que tiene que realizar una acción
// si primero llamamos y luego declaramos funciona, porque js primero lee las funciones y luego las ejecuta
// vamos a crear varios ejemplos de funciones que no devuelven nada, solo muestran
function cuatro() {
      console.log(2+2);
}
// llamamos a la function
cuatro();

function numero(num1) {// la funcion recibe 1 argumento, pero en la function se llama parámetro
      console.log(num1);
}
numero(1); // llamamos a la funcion y le mandamos 1 argumento

function suma(num1, num2) { 
      console.log(num1 + num2);
}
suma(1, 3); 

//creamos un ejemplo con 1 parámetro por default
function resta(num1, num2 = 5) {
  console.log(num1 - num2);
}
resta(1); 

// ahora vamos a crear funciones que devuelven (return) datos.
function multi(num1, num2 = 5) {
  return num1 * num2;
}
const multiplicacion = multi(3); 
console.log(multiplicacion);

// podemos devolver un array
function crearArray(num1, num2 = 5) {
  return ["posicion0", num1 * num2];
}
const nuevoArray = crearArray(3);
console.log(nuevoArray);

// ahora si usamos destructurin al array
function crearArray2(num1, num2 = 5) {
  return ["posicion0", num1 * num2];
}
const [posicion, resultado] = crearArray2(3);
console.log(posicion);
console.log(resultado);





