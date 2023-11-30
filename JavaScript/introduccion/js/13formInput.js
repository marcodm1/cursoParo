// eventos del DOM inputs

const inputNombre = document.querySelector('.nombre');
// podemos modificar los atributos
inputNombre.type = "password"; // pone el input type password
inputNombre.placeholder = "Place holder desde js";

inputNombre.addEventListener('input', (evento) => {
      console.log(evento.target.value);
})

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', funcionPass);

function funcionPass() {
      inputPassword.type = 'text';

      setTimeout(() => {
            inputPassword.type = "password";
      }, 100);
}