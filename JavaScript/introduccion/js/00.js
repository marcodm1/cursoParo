
let num1 = random();
let num2 = random();
let num3 = random();
let suma = sumar(num1, num2);
let resta = restar(num1, num2, num3);
let multi = multiplicar(num1, num2, num3);
let div = dividir(num1, num2, num3);
let saludo = saludar();

console.log(num1);
console.log(num2);
console.log(suma);
console.log(resta);
console.log(multi);
console.log(div);
console.log(saludo);


for (let i = num1; i < num2; i++) {
      console.log(i);
}


function random() {
      return Math.floor(Math.random() * 10);
}

function sumar(v1 = 0, v2 = 0, i = 0) {
      return v1 + v2 + i;
}

function restar(v1, v2) {
      return v1 - v2;
}

function multiplicar(v1, v2) {
      return v1 * v2;
}

function dividir(v1, v2) {
      if (v2 === 0) {
            return 1;
      } else {
            return Math.floor(v1 / v2);
      }
}

function saludar() {
      return "Hola mundo!";
}

// objeto con 4 atributos
let persona = {
      nombre: "Alvaro",
      edad: 22,
      hijos: true,
      idiomas: ["inglés", "español"] // array
}

console.table(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.hijos);
console.log(persona.idiomas[0]);










