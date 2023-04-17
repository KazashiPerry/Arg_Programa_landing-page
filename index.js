




 document.addEventListener('DOMContentLoaded', function() {
    // Agregar evento de clic a las imágenes
    var imagenes = document.getElementsByClassName('primer_img');
    for (var i = 0; i < imagenes.length; i++) {
      imagenes[i].addEventListener('click', function() {
        // Agregar o quitar la clase .ampliada al hacer clic en la imagen
        this.classList.toggle('ampliada');
      });
    }
  });




 // Esperar a que el DOM esté completamente cargado
 document.addEventListener('DOMContentLoaded', function() {
  // Obtener el formulario
  var form = document.querySelector('.needs-validation');

  // Agregar un event listener al formulario para el evento de submit
  form.addEventListener('submit', function(event) {
    // Verificar si el formulario es válido
    if (!form.checkValidity()) {
      event.preventDefault(); // Evitar el envío del formulario
      event.stopPropagation(); // Detener la propagación del evento
    }
    form.classList.add('was-validated'); // Agregar la clase 'was-validated' para mostrar los mensajes de validación
  });
});



