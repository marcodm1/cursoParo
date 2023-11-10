<!DOCTYPE html>
<html>
<head>
    <title>Formulario HTML</title>
</head>
<body>
    <h2>Formulario de Registro</h2>

    <form method="post" action="procesar_formulario.php">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre"><br><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" name="email" id="email"><br><br>

        <input type="submit" value="Guardar Datos">
    </form>
</body>
</html>
