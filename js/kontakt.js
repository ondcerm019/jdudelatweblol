document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let valid = true;

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('messageError').textContent = '';

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            valid = false;
        }

        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            document.getElementById('emailError').textContent = 'Enter a valid email.';
            valid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Message cannot be empty.';
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
            this.reset();
        }
    });
});