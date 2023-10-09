
function enviarFormulario() {
    // Obtengo un array con los valores del formulario por cada class
    const nombres = document.getElementsByClassName("nombre");
    const emails = document.getElementsByClassName("email");
  
    // Obtengo el elemento de cada clase en la posicion deseada del array
    const nombre = nombres[0].value;
    const email = emails[0].value;

    // Creo un objeto con los resultados seleccionados
    const usuario = {
        nombre,
        email
    };

    // Para mostrar el objeto en el div class = resultado
    // 1º obtengo un array con los valores de la class "resultado"
    const resultados = document.getElementsByClassName("resultado");
    // indico que de todos, el que está en la posición deseada,
    // añado la etiqueta <pre> para darle un mejor estilo y usando la comila `` para poder añadir texto y variables
    resultados[0].innerHTML = `<pre>${JSON.stringify(usuario, null, 1)}</pre>`;
    // Desengloso esta línea.
        // resultados[0]: Obtenemos el primer elemento del array "resultados"
        // innerHTML: Permite obtener o establecer el contenido HTML dentro de ese elemento.
        // ``: Permiten la interpolación de variables dentro de la cadena de texto utilizando ${}
        // JSON.stringify(usuario, null, 1): Convierte el objeto usuario en una cadena JSON formateada.
            // 3 parámetros (x, x, x):
            // 1º: El objeto a convertir.
            // 2º: Los espacios en blanco que se utiliza para separar los elementos del objeto.
            // 3º: El número de espacios que se utilizan para indentar el objeto.
    // Esta línea de código toma el objeto usuario, lo convierte en una cadena JSON formateada y luego la inserta como contenido HTML en el primer elemento de la colección resultados

}