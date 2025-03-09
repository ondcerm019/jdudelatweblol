document.addEventListener("DOMContentLoaded", () => {
    const requiredString = "Povinné pole";
    const emailCheckString = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let valid = true;

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (name === '') {
            document.getElementById('nameError').textContent = requiredString;
            valid = false;
        }

        if (email === '') {
            document.getElementById('emailError').textContent = requiredString;
            valid = false;
        } else if (!emailCheckString.test(email)) {
            document.getElementById('emailError').textContent = 'Zadejte platnou e-mailovou adresu';
            valid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = requiredString;
            valid = false;
        }

        if (valid) {
            alert('Zpráva odeslána');
            this.reset();
        }
    });
});