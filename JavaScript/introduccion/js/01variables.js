// las variables en php se escriben:
// $nombre = "hola";

// las variables en js se escriben de 3 maneras
var nombreUno = "Marco"; // necesitan iniciarser,es global.
let nombreDos = "Marco"; // necesitan iniciarser,es local {}.
const nombreTres = "Marco"; // no necesitan iniciarser,es local {}.
// las variables se cran asi, pero se usan sin necesidad de la palabra let o const

// para imprimir en pantalla en php es:
// echo "Imprimimos";

// para imprimir en JS es:
document.write("Imprimimos <br>");

// Otra manrera de visualizar los datos es a traves del apartado "console". 
// De esta manera no afectará en nuestro código.
console.log("hola mundo");

// Ejemplos con var.
var nombreVAR = "nombreVAR";
var edadVAR = 13;
if (nombreVAR == "nombreVAR") {
      var dentroVAR = "Dentro var";
      edadVAR++;
}
// concatenación se hace con el +
document.write(nombreVAR + "<br>");
document.write(edadVAR + "<br>");
document.write(dentroVAR + "<br>"); // aunque se creó dentro de unas llaves, fuera se reconoce
console.log(nombreVAR);
console.log(edadVAR);

// si hacemos lo mismo con let
let nombreLET = "nombreLET";
let edadLET = 23;
if (nombreLET == "nombreLET") {
      let dentroLET = "Dentro let";
      edadLET++;
}

document.write(nombreLET + "<br>");
document.write(edadLET + "<br>");
//document.write(dentroLET + "<br>"); // como se creó dentro de unas llaves, fuera no se reconoce

// si hacemos lo mismo con const
const nombreCONST = "nombreCONST";
const edadCONST = 33;
if (nombreCONST == "nombreCONST") {
      const dentroCONST = "Dentro const";
      //edadCONST++; // como es una constante, no se puede modificar.
}
document.write(nombreCONST + "<br>");
document.write(edadCONST + "<br>");
//document.write(dentroCONST + "<br>"); // como se creó dentro de unas llaves, fuera no se reconoce


