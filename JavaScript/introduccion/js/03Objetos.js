// objetos

// los objetos son variables que contienen distintos tipos de datos
// por un lado podemos tener 3 variables sueltas.
let nombre1 = "Marco";
let edad1 = 33;
let padre1 = true;
document.write(nombre1 + "<br>");
document.write(edad1 + "<br>");
document.write(padre1 + "<br>");

// Por otro lado podemos tener una variable objeto con todos los datos en uno.
let persona = {
      nombre: "Vladimir",
      edad: 40,
      padre: true
};
console.log(typeof persona); // imprime object.
console.log(persona);   // imprime {nombre: 'Vladimir', edad: 40, padre: true}
console.table(persona); // lo imprime de una manera mas cuadriculada.
document.write(persona.nombre + "<br>");
document.write(persona.edad + "<br>");
document.write(persona.padre + "<br>");


// Distructuring

// Un objeto es como una estructura y de esta manera la "desestructuramos"
// podemos crear variables de los valores de un objeto
const {nombre, edad, padre} = persona;
console.log(nombre + ", " + edad + ", " + padre);


//Destructuring con 2 o mas objetos

const moto = {
      ruedas: 2,
      color: "Rojo",
      pais: "España"
}
const quad = {
      ruedas: 4,
      color: "Rojo",
      pais: "España"
}
console.table(moto);
console.table(quad);

const { ruedas, color, pais} = moto;
const { ruedas: ruedasQuad, color: colorQuad, pais: paisQuad } = quad; // con ':' creamos pero con un "alias"
console.log(ruedas + "_" + color + "_" + pais);
console.log(ruedasQuad + "_" + colorQuad + "_" + paisQuad);



// Object Literal Enhacement

// destructuring "saca" una copia de los valores y OLE sirve para añadirlo al objeto
let autenticado = true;
let pass = 123;

let nuevaPersona = {
      autenticado,
      pass
}
console.table(nuevaPersona);


// Manipulación de los objetos:

// aunque el objeto sea const, se pueden manipular las propiedades.
const coche = {
      nombre: "Audi",
      año: 2022,
      nuevo: true,
};
coche.nombre = "Mercedes"; // Si la propiedad existe, la modifica.
coche.color = "Verde"; // Si no existe, nos la añadirá en el objeto.
delete coche.color; // si existe la elimine, pero si no, no da error.
console.table(coche);


Object.seal(coche) // te permite modificar solo propiedades existentes.
Object.freeze(coche);// No permite que se modifiquen las propiedades.

coche.nombre = "VW"; 
coche.color = "Rojo";
delete coche.color; 

console.table(coche); // sin cambios, el freeze no ha dejado qeu se puedan modificar


// Unir dos objetos o más en uno

const persona1 = {
      nombre: "Juan",
      año: 1990
};
const persona2 = {
      nombre: "Marco",
      altura: 181,
      padre: true
};

// algo importante es NO MODIFICAR los objetos iniciales
// para ello usamos el spread operator que se usa poniendo '...', es decir, hace una copia de
const copia1 = {...persona1};
console.log(copia1); // muestra {nombre: 'Juan', año: 1990}

const copia2 = {
      persona1: {...persona1},
      persona2: {...persona2}
}
console.log(copia2);