// Función para manejar el envío del formulario
document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("miFormulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;

        // Mostrar los valores en el div de resultados
        const nombreMostrado = document.getElementById("nombreMostrado");
        const correoMostrado = document.getElementById("correoMostrado");

        nombreMostrado.textContent = `Nombre: ${nombre}`;
        correoMostrado.textContent = `Correo Electrónico: ${correo}`;
    });
});
