document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    const mainNavLinks = document.querySelectorAll('.main-nav ul li a');

    const toggleMenu = () => {
        // Alternar la clase 'open' en el menú
        mainNav.classList.toggle('open');
        
        // Alternar la clase 'open' en el botón
        menuToggle.classList.toggle('open');
        
        // Cambiar icono entre hamburguesa y X
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('open')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    };

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    }

    // Cerrar menú al hacer clic en un enlace
    mainNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            if (mainNav.classList.contains('open')) {
                toggleMenu();
            }
        }
    });
});