// JavaScript

// 3 opciones para definir la function de enviarFormulario:
    // 1: Usando id
    // 2: Usando querySelector
    // 3: Usando getElementsByClassName

    
// opción 1: Usando id
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    /*
        document.getElementsByClassName selecciona todos los elementos que tienen la misma clase y devuelve una colección de elementos HTML (un NodeList).
        document.querySelector selecciona el primer elemento que coincide con el selector especificado y devuelve ese elemento único.
    */
    console.log(nombre, email);
    // Crear un objeto JSON utilizando sintaxis de objeto literal moderna
    const usuario = {
        nombre,
        email
    };

    // No se pone así, porque cuando el nombre es el mismo que el valor, vale con ponerlo solo una vez.
    // const usuario2 = {
    //     nombre: nombre,
    //     email: email
    // }

    // Mostrar el objeto JSON en el resultado
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<pre>${JSON.stringify(usuario, null, 2)}</pre>`;
}

// opción 2: Usando getElementsByClassName

function enviarFormulario() {
    const nombres = document.getElementsByClassName("nombre");
    const emails = document.getElementsByClassName("email");

    // Suponemos que solo hay un elemento con cada clase
    const nombre = nombres[0].value;
    const email = emails[0].value;

    // Crear un objeto JSON utilizando sintaxis de objeto literal moderna
    const usuario = {
        nombre,
        email
    };

    // Mostrar el objeto JSON en el resultado
    const resultados = document.getElementsByClassName("resultado");
    resultados[0].innerHTML = `<pre>${JSON.stringify(usuario, null, 2)}</pre>`;
}
