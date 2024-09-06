// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    function loadHTML(selector, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                initEventListeners(); // Initialize event listeners after loading HTML
            })
            .catch(error => console.error('Error loading file:', error));
    }

    // Load external HTML files
    loadHTML('#header-placeholder', 'Pages/header.html');
    loadHTML('#main-placeholder', 'Pages/main.html');
    loadHTML('#footer-placeholder', 'Pages/footer.html');

    // Initialize event listeners for theme toggle and other interactions
    function initEventListeners() {
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.querySelector('.nav-links');
        const themeToggle = document.getElementById('theme-toggle');

        // Toggle navigation menu on click
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', function () {
                navLinks.classList.toggle('show');
            });

            // Close navigation menu when scrolling
            window.addEventListener('scroll', function () {
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                }
            });
        }

        // Toggle between dark and light themes
        if (themeToggle) {
            themeToggle.addEventListener('click', function () {
                document.body.classList.toggle('dark-theme'); // Toggle dark theme
                document.body.classList.toggle('light-theme'); // Toggle light theme

                // Change button icon and hero section image based on current theme
                if (document.body.classList.contains('dark-theme')) {
                    themeToggle.textContent = '☀️'; // Sun icon for light mode
                } else {
                    themeToggle.textContent = '🌙'; // Moon icon for dark mode
                }
            });
        }
    }
});
