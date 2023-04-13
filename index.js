




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



//imagen 1 animación

const miElemento = document.querySelector('.primer-img');

const callback = function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInRight'); // Agrega la clase de animación
      observer.unobserve(entry.target); // Deja de observar el elemento después de la animación
    }
  });
};

const options = {
  threshold: 0.2 // Porcentaje de visibilidad del elemento en la ventana para activar la animación
};

const observer = new IntersectionObserver(callback, options);

observer.observe(primer-img); // Comienza a observar el elemento
