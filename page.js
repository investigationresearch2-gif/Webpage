
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const page = this.getAttribute('href');

        window.location.href = page;
    });
});
