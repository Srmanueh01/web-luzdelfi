document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.getElementById('hero');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroServicesList = document.getElementById('hero-services-list');
    const heroOverlay = document.querySelector('.hero-overlay'); // Selecciona el overlay para la animación

    // Array de imágenes, textos y SERVICIOS para el carrusel
    const backgrounds = [
        {
            image: 'url("https://via.placeholder.com/1920x1080/0178c1/FFFFFF?text=SEGURIDAD_ACCESOS")',
            title: 'Seguridad y Profesionalidad en Cada Acceso',
            subtitle: 'Expertos en control de accesos para:',
            services: ['Hoteles', 'Colegios', 'Eventos', 'Parking']
        },
        {
            image: 'url("https://via.placeholder.com/1920x1080/28a745/FFFFFF?text=MONITOREO_AVANZADO")',
            title: 'Monitoreo Avanzado y Soluciones Integrales',
            subtitle: 'Nos encargamos de la seguridad en:',
            services: ['Comunidades de Propietarios', 'Fincas', 'Control de Accesos General']
        },
        {
            image: 'url("https://via.placeholder.com/1920x1080/ffc107/FFFFFF?text=SERVICIOS_COMPLEMENTARIOS")',
            title: 'Servicios Complementarios para tu Tranquilidad',
            subtitle: 'Además, te ofrecemos:',
            services: ['Amplio servicio de limpieza', 'Personal altamente cualificado']
        }
    ];

    let currentIndex = 0;

    function changeHeroContent() {
        const currentData = backgrounds[currentIndex];

        // Añade una clase para iniciar la animación de salida (opcional, pero mejora el efecto)
        // heroOverlay.classList.remove('fade-in'); // Descomentar si se quiere un fade-out antes de fade-in
        // heroOverlay.style.opacity = '0'; // Forzar opacidad a 0 antes de cambiar contenido

        // Retrasa el cambio de contenido y la animación de entrada
        setTimeout(() => {
            // Cambia la imagen de fondo
            heroSection.style.backgroundImage = currentData.image;

            // Cambia el texto
            heroTitle.textContent = currentData.title;
            heroSubtitle.textContent = currentData.subtitle;

            // Limpia la lista de servicios actual
            heroServicesList.innerHTML = '';

            // Añade los nuevos servicios a la lista
            currentData.services.forEach(service => {
                const listItem = document.createElement('li');
                listItem.textContent = service;
                heroServicesList.appendChild(listItem);
            });

            // Añade la clase para la animación de entrada
            heroOverlay.classList.add('fade-in');

            // Asegura que la clase se elimine después de la transición para permitir la siguiente
            setTimeout(() => {
                heroOverlay.classList.remove('fade-in');
            }, 1000); // Duración de la transición (0.5s) + un pequeño margen
        }, 100); // Pequeño retraso para asegurar que la clase se remueva antes de añadirla

        // Avanza al siguiente índice, o vuelve al principio si llega al final
        currentIndex = (currentIndex + 1) % backgrounds.length;
    }

    // Llama a la función la primera vez al cargar la página
    changeHeroContent();

    // Configura el intervalo para cambiar el contenido cada 5 segundos (5000 ms)
    setInterval(changeHeroContent, 5000);
});