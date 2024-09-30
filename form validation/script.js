

// Get references to all input fields and error elements
const form = document.getElementById('registrationForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    
    let isValid = true; // Flag to track validation status

    // Validate Full Name (should be at least 5 characters)
    if (fullName.value.trim().length < 5) {
        nameError.textContent = "Full name must be at least 5 characters long.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email (should contain @)
    if (!email.value.includes('@')) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Phone Number (must be 10 digits and not '123456789')
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value) || phone.value === '1234567890') {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    // Validate Password (cannot be 'password', 'username', or less than 8 characters)
    if (password.value.length < 8 || password.value === 'password' || password.value === fullName.value) {
        passwordError.textContent = "Password must be at least 8 characters and cannot be 'password' or your name.";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Validate Confirm Password (must match password)
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Password and confirm password must be same.";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    document.getElementById('togglePassword').addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        this.textContent = type === 'password' ? '👁️' : '🙈';
    });
    

    // If form is valid, submit the form (say successful submission)
    if (isValid) {
        alert("Form submitted successfully!");
        form.reset(); // Reset form after submission
    }
});


