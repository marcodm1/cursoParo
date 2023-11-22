// tipos de datos


// undefined:

// si no asignas valor es = undefined.
let cliente; // undefined
document.write(cliente + "<br>"); // muestra undefined
document.write(typeof cliente + "<br>"); //typeof dato te devuelve el tipo de dato, en este caso undefined


// boolean:

const descuento = true;
document.write(descuento + "<br>"); // muestra true
document.write(typeof descuento + "<br>"); // devuelve boolean


// Number engloba (int, float, fracciones, con comas etc...)
const num1 = 20.20;
const num2 = 20;
const num3 = -20;
document.write(num1 + "<br>"); // muestra 20.20
document.write(num2 + "<br>"); // muestra 20
document.write(num3 + "<br>"); // muestra -20
document.write(typeof num1 + "<br>"); // muestra number 
document.write(typeof num2 + "<br>"); // muestra number
document.write(typeof num3 + "<br>"); // muestra number


// string (cadena de texto)
const alumno = "30";
document.write(alumno + "<br>"); // muestra 30
document.write(typeof alumno + "<br>"); // muestra string
// si sumamos 2 "numeros" se concatenan, no se suman
let numUno = "3";
let numDos = "3";
let sumaNumerosString = numUno + numDos;
document.write(sumaNumerosString + "<br>"); // muestra 33


// null (nulo o vacío)
const oferta = null;