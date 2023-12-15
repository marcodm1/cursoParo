// usamos la pagina de https://jsonplaceholder.typicode.com/

const url = "https://jsonplaceholder.typicode.com/comments";

// function fetch
// primero un fetch, luego buscamos el valor de respuesta, ydespués el valor de resultado
// fetch(url)
//    .then(respuesta => respuesta.json())
//    .then(resultado => {
//       resultado.forEach((comentario) => {
//       console.log(comentario)
//    })
// })

// versión arrow
const consultarAPI = () => {
   fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
         resultado.forEach((comentario) => {
            console.log(comentario)
         })
      })
}
consultarAPI();