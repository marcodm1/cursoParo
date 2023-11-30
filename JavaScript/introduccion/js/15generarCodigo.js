const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (evento) => {
   // vamos a quitar la accion del action del form por defecto, para no necesitar un back
   // y hacer el comportamiento deseado
   evento.preventDefault();

   const nombre = document.querySelector(".nombre").value;
   const pass = document.querySelector(".password").value;

   const alertaPrevia = document.querySelector(".alerta");
   // revisa si ya hay una alerta, y si si, la elimina
   if (alertaPrevia) {
      alertaPrevia.remove();
   }
   // createElement(lo que queremos crear) se recomienda en mayúsculas
   const alerta = document.createElement('DIV');
   // para agregar un id es facil
   alerta.id = 'alerta';
   // pero para agregar una clase
   alerta.classList.add('alerta', 'segundaClase');


   console.log(alerta);

   if (nombre === "" || pass === "") {
      alerta.textContent = "Todos los campos son necesarios";
      alerta.classList.add('error');
   } else {
      alerta.textContent = "Todo bien";
      alerta.classList.add("exito");
   }

   formulario.appendChild(alerta)
});