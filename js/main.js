(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    
})(jQuery);


// /// QUE APAREZCA EL BTN WHATSAPP CON SCROLL ////
const whatsappButton = document.querySelector('.whatsapp');

// Función para verificar si el usuario ha desplazado 150px hacia abajo
function checkScroll() {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= 150) {
    // Si el desplazamiento es mayor o igual a 150px, muestra el botón de WhatsApp
    whatsappButton.style.display = 'block';
  } else {
    // De lo contrario, oculta el botón de WhatsApp
    whatsappButton.style.display = 'none';
  }
}

// Agrega un detector de eventos para el evento de desplazamiento (scroll)
window.addEventListener('scroll', checkScroll);

// Llama a la función inicialmente para comprobar el estado al cargar la página
checkScroll();
