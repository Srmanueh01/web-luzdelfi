document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');
    // Esta línea es la que necesita el ID del formulario para encontrar el botón
    const submitButton = document.querySelector('#contact-form button[type="submit"]'); 
    const contactForm = document.getElementById('contact-form'); // Asegúrate de que tu formulario tiene el ID 'contact-form'

    // Función para mostrar el banner
    function showCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.remove('hidden');
        }
    }

    // Función para ocultar el banner
    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.classList.add('hidden');
        }
    }

    // Función para gestionar el estado del botón de envío del formulario
    function manageFormSubmitButton(consent) {
        if (submitButton) { // Solo si el botón de envío existe
            if (consent === 'accepted') {
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Mensaje'; // Texto normal del botón
                // Opcional: Eliminar cualquier mensaje de advertencia si existiera
                const warningMsg = contactForm ? contactForm.querySelector('.form-cookie-warning') : null;
                if (warningMsg) {
                    warningMsg.remove();
                }
            } else {
                submitButton.disabled = true;
                submitButton.textContent = 'Acepte las cookies para enviar'; // Texto para indicar el motivo del bloqueo

                // Opcional: Añadir un mensaje de advertencia visible cerca del formulario
                if (contactForm && !contactForm.querySelector('.form-cookie-warning')) {
                    const warningMsg = document.createElement('p');
                    warningMsg.classList.add('form-cookie-warning');
                    warningMsg.style.color = '#e74c3c'; // Rojo para advertencia
                    warningMsg.style.marginTop = '10px';
                    warningMsg.textContent = 'Debe aceptar las cookies para poder enviar el formulario.';
                    submitButton.parentNode.insertBefore(warningMsg, submitButton.nextSibling);
                }
            }
        }
    }

    // Función para guardar la preferencia de cookies y actualizar el estado del formulario
    function setCookieConsent(consent) {
        localStorage.setItem('cookieConsent', consent);
        hideCookieBanner();
        manageFormSubmitButton(consent); // Actualiza el botón de envío inmediatamente
        
        // --- LÓGICA PARA CARGAR SCRIPTS ANALÍTICOS CONDICIONALMENTE (si aplica) ---
        if (consent === 'accepted') {
             // Por ejemplo: loadGoogleAnalyticsScripts();
        }
    }

    // Comprobar si el usuario ya ha dado su consentimiento al cargar la página
    const userConsent = localStorage.getItem('cookieConsent');

    if (!userConsent) {
        // Si no hay consentimiento previo, muestra el banner y deshabilita el botón
        showCookieBanner();
        manageFormSubmitButton(null); // No hay consentimiento, así que deshabilita
    } else {
        // Si ya hay consentimiento, oculta el banner y actualiza el botón según la preferencia
        hideCookieBanner();
        manageFormSubmitButton(userConsent);
        
        // Si el consentimiento fue aceptado previamente, puedes cargar los scripts aquí
        if (userConsent === 'accepted') {
            // Por ejemplo: loadGoogleAnalyticsScripts();
        }
    }

    // Event listeners para los botones del banner
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            setCookieConsent('accepted');
        });
    }

    if (rejectButton) {
        rejectButton.addEventListener('click', () => {
            setCookieConsent('rejected');
        });
    }
});

// EJEMPLO DE FUNCIÓN PARA CARGAR GOOGLE ANALYTICS (DEBERÍAS REEMPLAZAR CON TU PROPIO CÓDIGO GA)
// function loadGoogleAnalyticsScripts() {
//     // ... tu código de Google Analytics aquí ...
// }