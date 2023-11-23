// Los iteradores más utilizados son foreach y map
const colores = ["rojo", "azul", "verde", "amarillo", "negro"];

// foreach accede a cada elemento del array
colores.forEach(element => {
      console.log(element); // de esta manera podemos visualizar el contenido del array  
      // el return devuelve el valor segun se a iterando en ellos a la variable 
});

// map accede a cada elemento del array y puede crear o guardar un nuevo array
const arrayMap = colores.map((element) => {
//   console.log(element);
      return element;
});

console.log(arrayMap);