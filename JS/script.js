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

                // Change button icon based on current theme
                if (document.body.classList.contains('dark-theme')) {
                    themeToggle.textContent = '☀️'; // Sun icon for light mode
                } else {
                    themeToggle.textContent = '🌙'; // Moon icon for dark mode
                }
                
                // Optionally, update hero section image based on the current theme
                const heroImage = document.querySelector('.hero-section img');
                if (heroImage) {
                    heroImage.src = document.body.classList.contains('dark-theme')
                        ? 'path/to/dark-theme-hero-image.jpg'
                        : 'path/to/light-theme-hero-image.jpg';
                }
            });
        }

        // JavaScript for handling form submission and success message
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('success-message');

        if (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent default form submission

                // Display success message
                if (successMessage) {
                    successMessage.style.display = 'block';
                }

                // Optionally, reset the form fields after submission
                form.reset();
                
                // Scroll to the top of the page to show the success message
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                setTimeout(function () {
                    successMessage.style.display = 'none';
                }, 2000); // 2000 milliseconds = 2 seconds
            });
        }
    }
});
