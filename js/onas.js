document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const id = this.getAttribute('href').substring(1);
            const element = document.getElementById(id);

            window.scrollTo({
                top: element.offsetTop - parseFloat(window.getComputedStyle(element).marginTop),
                behavior: 'smooth'
            });
        });
    });
});