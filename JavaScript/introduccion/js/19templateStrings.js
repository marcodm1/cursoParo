const producto = "tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function textoF() {
   return "Texto desde la fn"
}

// manera mala
console.log( producto + " " + precio + "€ euros, Marca: " + marca);
// manera buena
console.log( `${producto} ${precio}€ euros, Marca: ${marca}, ${textoF()}`);