<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    
    $archivo = "datos.txt";
    $contenido = "Nombre: $nombre, Correo Electrónico: $email\n";
    
    if (file_put_contents($archivo, $contenido, FILE_APPEND)) {
        echo "Datos guardados con éxito. <a href='formulario.html'>Volver al formulario</a>";
    } else {
        echo "Error al guardar los datos. <a href='formulario.html'>Volver al formulario</a>";
    }
}
?>
