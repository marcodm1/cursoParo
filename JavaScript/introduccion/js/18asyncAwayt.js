

// API con 500 comentarios
const url = "https://jsonplaceholder.typicode.com/comments";
// API con 5000 fotos
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
   // await para el codigo hasta que no obtiene una respuesta
   const respuesta = await fetch(url)
   const resultado = await respuesta.json()
   // console.log(resultado);
   
   
};
consultarAPI();

// multiples llamadas
const consultarAPImulti = async () => {
   const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]); // Promise.all() arranca los fetch a la vez
   const resultado = await respuesta.json()
   const resultado2 = await respuesta2.json();
   console.log(resultado);
   console.log(resultado2);
   
};
consultarAPImulti();