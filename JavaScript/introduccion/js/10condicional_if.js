// condicionales

const num1 = 2;
const num2 = "2";

// comparacion NO estricta
if (num1 == num2) {
      console.log("Son iguales");
} else {
      console.log("No son iguales");
} // muestra que son iguales

// comparador ESCRICTIVA compara valor y tipo de dato
if (num1 === num2) {
      console.log("Son iguales");
} else {
      console.log("No son iguales");
} // muestra NO son iguales

// usar la palabra String(num1) convierte a número
if (String(num1) === num2) {
      console.log("Son iguales");
} else {
      console.log("No son iguales");
}// muestra que son iguales

// usar la palabra Number(num1) convierte a número
if (num1 === Number(num2)) {
      console.log("Son iguales");
} else {
      console.log("No son iguales");
}// muestra que son iguales

const logeado = false;
// si es true se cumple, no es necesario los iguales
if (logeado) {
      console.log("Está logeado"); // No lo muestra
}
// ! convierte a negación
if (!logeado) {
  console.log("Está logeado !"); // Lo muestra
}

// otro ejemplo

const saldo = 600;
const pagar = 700;
const tarjeta = true;

if (saldo > pagar || tarjeta) {
      console.log("Puedes pagar");   
} else {
      console.log("No puedes pagard");
} // muestra "Puedes pagar"


// TERNARIOS

const verificado = true;
verificado ? console.log("si") : console.log("no"); // muestra si
!verificado ? console.log("si") : console.log("no"); // muestra no
// se pueden espaciar tabular o lo que sea para ordenarlo
verificado ? 
      console.log("si") : // muestra si
      console.log("no"); 

5 == 5 ? console.log("si 5") : console.log("no 5"); // muestra si 5


// doble ternario como los if else if
const coches = 4;
const motos = 3;
const garaje = true;
coches > motos ? console.log("Mas coches") : console.log("Mas motos"); // mas motos

coches < motos ? 
   console.log("Menos coches") : 
   garaje ? 
      console.log("Tiene garaje") : // Tiene garaje
      console.log("No tiene garaje"); 

