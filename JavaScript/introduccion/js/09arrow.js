// arrow function
const suma = () => {
      return 3 + 2;
}
const resSuma = suma();
console.log(resSuma);

const nombres = ["Marco", "Pedro", "Juan", "Vladimir"];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// map 
//itera en cada uno de los elementos del array
const nuevoArray = nombres.map(function (valor) {
  console.log(valor);
});

// en version arrow
const multi = nombres.map((valor) => {
      return valor;
});
console.table(multi);
// en version corta
const multi2 = nombres.map((valor) => valor);
console.table(multi2);

// filter
// crea un array nuevo en base a una condición
const resta = nombres.filter((valor) => {
  // devuelveme todos los que...
  if (valor === "Juan") {
    return valor;
  }
});
console.table(resta);

// version corta
const resta2 = nombres.filter((valor) => valor === "Juan");// devuelveme todos los que...
console.table(resta2);
const numeros2 = numeros.filter((valor) => valor > 7);// devuelveme todos los que...
console.table(numeros2);


// foreach version arrow
// foreach solo itera en los elementos, en cambio los anteriores devuelven
numeros2.forEach(num => console.log(num));

// si le añadimos al foreach un segundo parámetro (opcional), obtendremos el index
numeros2.forEach((num, index) => console.log("pos " + index + " valor: " + num));












