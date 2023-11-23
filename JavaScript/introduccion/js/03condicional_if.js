// iteradores
//if
let num1 = 3;
let num2 = 4;
let suma = num1 + num2; // muestra

if (num1 < num2) {
      console.log("El primero es menor");
}

// if else

if (num1 < num2) {
  console.log("El primero es menor");
} else if (num2 < suma) {
  console.log("El segundo es menor que la suma");
}else {
      console.log("El segundo es mayor que la suma");
}

// doble
if (num1 <= num2 && num2 < suma) {
      console.log("Cumple ambas");
}

if (num1 <= num2 || num2 < suma) {
  console.log("Cumple una u otra");
}