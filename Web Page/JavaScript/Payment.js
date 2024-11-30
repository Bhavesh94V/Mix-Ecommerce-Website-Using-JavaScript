document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Hide all previous error messages
    document.querySelectorAll('.error').forEach(e => e.classList.remove('active'));

    let valid = true;

    // Validation checks...
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.classList.add('active');
        valid = false;
    }

    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    if (!phone.value || !/^\d{10}$/.test(phone.value)) {
        phoneError.textContent = 'Please enter a valid phone number (10 digits).';
        phoneError.classList.add('active');
        valid = false;
    }

    const cardNumber = document.getElementById('card-number');
    const cardNumberError = document.getElementById('cardNumberError');
    if (!cardNumber.value || !/^\d{16}$/.test(cardNumber.value)) {
        cardNumberError.textContent = 'Please enter a valid 16-digit card number.';
        cardNumberError.classList.add('active');
        valid = false;
    }

    const expDate = document.getElementById('exp-date');
    const expDateError = document.getElementById('expDateError');
    if (!expDate.value || !/^\d{2}\/\d{2}$/.test(expDate.value)) {
        expDateError.textContent = 'Please enter a valid expiration date (MM/YY).';
        expDateError.classList.add('active');
        valid = false;
    }

    const cvc = document.getElementById('cvc');
    const cvcError = document.getElementById('cvcError');
    if (!cvc.value || !/^\d{3}$/.test(cvc.value)) {
        cvcError.textContent = 'Please enter a valid 3-digit CVC.';
        cvcError.classList.add('active');
        valid = false;
    }

    const cardHolderName = document.getElementById('cardholder-name');
    const cardHolderNameError = document.getElementById('cardHolderNameError');
    if (!cardHolderName.value) {
        cardHolderNameError.textContent = 'Please enter the cardholder name.';
        cardHolderNameError.classList.add('active');
        valid = false;
    }

    const termsCheckbox = document.querySelector('input[type="checkbox"]');
    const termsError = document.getElementById('termsError');
    if (!termsCheckbox.checked) {
        termsError.textContent = 'You must agree to the terms.';
        termsError.classList.add('active');
        valid = false;
    }

    if (valid) {
        // Show loader
        const loader = document.createElement('div');
        loader.classList.add('loader');
        document.body.appendChild(loader);
        loader.style.display = 'block';

        // Show alert after 5 seconds
        setTimeout(() => {
            loader.style.display = 'none';

            const alert = document.createElement('div');
            alert.classList.add('alert');
            alert.textContent = `Payment successful!       
                    Thank you for your purchase. We are honored to have customers like you. Thank you for supporting our small business.`;
            document.body.appendChild(alert);
            alert.style.display = 'block';

            setTimeout(() => {
                alert.style.display = 'none';
            }, 5000);
        }, 3000);
    }
});