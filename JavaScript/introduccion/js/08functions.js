// Funciones

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

// funciones - function expression

const suma2 = function(num1, num2) {
  return num1 + num2;
}
const prueba = suma2(2, 5);
console.log(prueba);


// funciones - arrow function
// pasamos de la tradicional function expression
const suma3 = function () {
  console.log(numm1 + numm2);
}
// a la arrow function
const suma33 = (num1, num2) => {
  console.log(num1 + num2);
}
suma33(13, 13);
console.log(typeof suma33); // es de tipo function

// si lo que retornamos está en una linea, se puede simplificar el código
// se quitan las llaves, y se elimina la palabra return
const suma34 = (num1, num2) => num1 + num2;
const rest5 = suma34(15, 15);
console.log(rest5);

// si retornas mas de una linea se ponen las llaves
const suma345 = (num1, num2) => {
      return num1 + num2
}
const res345 = suma345(17, 17);
console.log(res345);

// si queremos enviar solo un parámetro, se puede eliminar el paréntesis
const suma6 = num1 => num1 + 59;
const rest6 = suma6(15);
console.log(rest6);

// si aplicamos esto con un return
// si retornas mas de una linea se ponen las llaves
const suma7 = num1 => {
      return num1 + 99
}
const res7 = suma7(17);
console.log(res7);

// la forma más correcta sería usando siempre los ( )
const suma8 = () => {
      return 11 + 110
}
const res8 = suma8();
console.log(res8);

// ó

const suma9 = () => 11 + 210
const res9 = suma9();
console.log(res9);
