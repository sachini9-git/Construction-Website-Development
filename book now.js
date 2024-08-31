document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.querySelector('.book-now-form');

    bookingForm.addEventListener('submit', function (event) {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const contact_no = document.getElementById('contact').value;
        const time = document.getElementById('time').value;
        const date = document.getElementById('date').value;
        const services = document.querySelectorAll('.checkbox input[type="checkbox"]:checked');
        const reason = document.getElementById('reason').value;

        // Validation for username
        if (username.trim() === '') {
            alert('Username cannot be empty.');
            event.preventDefault();
            return;
        }

        // Validation for email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            event.preventDefault();
            return;
        }

        // Validation for contact number (10 digits, only numbers)
        const contactNoRegex = /^\d{10}$/;
        if (!contactNoRegex.test(contactNo)) {
            alert('Invalid phone number. It must be 10 digits and contain only numbers.');
            event.preventDefault();
            return;
        }

        // Validation for preferred time
        if (time.trim() === '') {
            alert('Preferred time cannot be empty.');
            event.preventDefault();
            return;
        }

        // Validation for preferred date
        if (date.trim() === '') {
            alert('Preferred date cannot be empty.');
            event.preventDefault();
            return;
        }

        // Validation for selected services
        if (services.length === 0) {
            alert('Select at least one service.');
            event.preventDefault();
            return;
        }

        // Validation for reason
        if (reason.trim() === '') {
            alert('Reason cannot be empty.');
            event.preventDefault();
            return;
        }
    });
});