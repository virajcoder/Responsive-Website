// wait until the dom is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    function loadHTML(selector, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                initEventListeners(); 
            })
            .catch(error => console.error('Error loading file:', error));
    }

    // Load external HTML files
    loadHTML('#header-placeholder', 'Pages/header.html');
    loadHTML('#main-placeholder', 'Pages/main.html');
    loadHTML('#footer-placeholder', 'Pages/footer.html');

    // initialize event listeners for theme toggle and other interactions
    function initEventListeners() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const themeToggle = document.getElementById('theme-toggle');

        // Toggle Navigation menu on Click
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function () {
                navLinks.classList.toggle('show');
            });

            // Close Navigation menu When scrolling
            window.addEventListener('scroll', function () {
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            });
        }

        // Toggle between Dark and Light themes
        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                document.body.classList.toggle('dark-theme');
                document.body.classList.toggle('light-theme');
                

                // Change Button icon based on current theme
                if (document.body.classList.contains('dark-theme')) {
                    themeToggle.textContent = '☀️'; // Light mode
                } else {
                    themeToggle.textContent = '🌙'; // dark mode
                }
                
                // Update Hero section Image 
                const heroImage = document.querySelector('.hero-section img');
                if (heroImage) {
                    heroImage.src = document.body.classList.contains('dark-theme')
                        ? 'path/to/dark-theme-hero-image.jpg'
                        : 'path/to/light-theme-hero-image.jpg';
                }
            });
        }

        // Handling submission and success Message
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');

        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                if (successMessage) {
                    successMessage.style.display = 'block';
                }
                form.reset();
                setTimeout(function () {
                    successMessage.style.display = 'none';
                }, 2000); 
            });
        }
    }
});
