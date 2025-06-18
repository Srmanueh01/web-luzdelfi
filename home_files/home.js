document.addEventListener('DOMContentLoaded', () => {
    // Elementos del menú para la funcionalidad de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const mainNavLinks = document.querySelectorAll('.main-nav ul li a');

    // Funcionalidad para el menú de hamburguesa
    if (menuToggle && mainNav) { // Asegurarse de que los elementos existan
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }

    // Cerrar el menú cuando se hace clic en un enlace (para mejorar la UX móvil)
    mainNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                if (menuToggle) {
                    menuToggle.classList.remove('open');
                }
            }
        });
    });

    // --- Toda la lógica del carrusel de hero ha sido eliminada de aquí ---
    // No hay necesidad de manejar la animación de texto o imágenes
    // ya que el hero ahora es estático con una imagen de fondo fija.
});