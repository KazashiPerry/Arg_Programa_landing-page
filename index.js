// nav-var fixed top
 // Obtén la altura de la sección de la página de aterrizaje
 var landingSectionHeight = $('.landing-section').outerHeight();
 // Agrega un evento de desplazamiento (scroll) a la ventana del navegador
 $(window).on('scroll', function() {
   // Obtiene la posición vertical actual del desplazamiento
   var scrollPosition = $(this).scrollTop();
   // Comprueba si la posición vertical del desplazamiento ha pasado la altura de la sección de la página de aterrizaje
   if (scrollPosition > landingSectionHeight) {
     // Si ha pasado la sección de la página de aterrizaje, fija la barra de navegación
     $('#nav-var').addClass('fixed-top');
   } else {
     // Si no ha pasado la sección de la página de aterrizaje, quita la fijación de la barra de navegación
     $('#nav-var').removeClass('fixed-top');
   }
 });




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