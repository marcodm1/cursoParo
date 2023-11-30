

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', evento => {
      // vamos a quitar la accion del action del form por defecto, para no necesitar un back
      // y hacer el comportamiento deseado
      evento.preventDefault();

      const nombre = document.querySelector('.nombre').value;
      const pass = document.querySelector('.password').value;
      console.log(nombre);
      console.log(pass);

      if (nombre === '' || pass === '') {
            console.log("Todos los campos necesarios");
      } else {
            console.log("Todos los campos rellenados, Enviando");
      }

      console.log('Enviaste el formulario');
})