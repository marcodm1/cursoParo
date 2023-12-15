// tipos de datos


// undefined:
console.log(cliente); // si no asignas valor es undefined.
 //typeof dato te devuelve el tipo de dato, en este caso undefined
console.log(typeof cliente);


// boolean:
const descuento = true;
console.log(descuento + "<br>"); // muestra true
console.log(typeof descuento + "<br>"); // devuelve boolean


// Number engloba (int, float, fracciones, con comas etc...)
const num1 = 20.20;
const num2 = 20;
const num3 = -20;
console.log(num1 + "<br>"); // muestra 20.20
console.log(num2 + "<br>"); // muestra 20
console.log(num3 + "<br>"); // muestra -20
console.log(typeof num1 + "<br>"); // muestra number 
console.log(typeof num2 + "<br>"); // muestra number
console.log(typeof num3 + "<br>"); // muestra number


// string (cadena de texto)
const alumno = "30";
console.log(alumno + "<br>"); // muestra 30
console.log(typeof alumno + "<br>"); // muestra string
// si sumamos 2 "numeros" se concatenan, no se suman
let numUno = "3";
let numDos = "3";
let sumaNumerosString = numUno + numDos;
console.log(sumaNumerosString + "<br>"); // muestra 33


// null (nulo o vacío)
const oferta = null;