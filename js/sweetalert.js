
document.addEventListener('DOMContentLoaded', function () {
    const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        const nombre = myForm.querySelector('[name="nombre"]').value;
        const email = myForm.querySelector('[name="email"]').value;
        const asunto = myForm.querySelector('[name="asunto"]').value;
        const mensaje = myForm.querySelector('[name="mensaje"]').value;

        if (!nombre || !email || !asunto || !mensaje) {
            // Si algún campo está vacío, muestra un mensaje de error
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario.',
                icon: 'error',
                confirmButtonText: 'OK',
                customClass: {
                    confirmButton: 'swal-confirm-button-error'
                }
            });
        } else {
            // Si todos los campos están llenos, muestra un mensaje de éxito
            Swal.fire({
                imageUrl: "img/logo-head.png",
                title: '¡Enviado!',
                text: 'Gracias por tu mensaje.',
                icon: 'success',
                confirmButtonText: 'OK',
                customClass: {
                    title: 'swal-title-success',
                    text:  'swal-text-success'
                }
            }).then(() => {
                // Después de hacer clic en OK, reinicia el formulario
                myForm.reset();
            });
        }
    });
});
