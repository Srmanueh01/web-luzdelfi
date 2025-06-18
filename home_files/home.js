document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const mainNavLinks = document.querySelectorAll('.main-nav ul li a');

    // Función para alternar el menú
    const toggleMenu = () => {
        mainNav.classList.toggle('open');
        menuToggle.classList.toggle('open');
        
        // Cambiar icono entre hamburguesa y X
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    };

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer clic en un enlace
    mainNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
});