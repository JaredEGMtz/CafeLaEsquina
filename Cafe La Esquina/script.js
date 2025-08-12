        // JavaScript para manejar el menú desplegable en móvil
        const toggleButton = document.getElementById('toggle-button');
        const navbarLinks = document.getElementById('navbar-links');

        toggleButton.addEventListener('click', () => {
            // Alterna la clase 'active' para mostrar/ocultar los enlaces
            navbarLinks.classList.toggle('active');
        });
