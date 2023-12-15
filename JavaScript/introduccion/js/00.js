"use strict";

let peliculasArray = [
  "el señor de los añillos",
  "harry potter",
  "titanic",
  "stars wars",
  "spiderman",
  "tomates verdes fritos",
  "la roca",
  "el club de la lucha",
  "avatar"
];

for (let i = 0; i < peliculasArray.length; i++) {
   document.open();
   document.write("una de las mejores peliculas del mundo es: " + peliculasArray[i] + "<br/>"  );
}
