
    function validateForm() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        var usernameError = document.getElementById('usernameError');
        var emailError = document.getElementById('emailError');
        var passwordError = document.getElementById('passwordError');

        usernameError.innerHTML = '';
        emailError.innerHTML = '';
        passwordError.innerHTML = '';

        var isValid = true;

        if (username === '') {
            usernameError.innerHTML = 'Username is required';
            isValid = false;
        }

        if (email === '') {
            emailError.innerHTML = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(email)) {
            emailError.innerHTML = 'Invalid email address';
            isValid = false;
        }

        if (password === '') {
            passwordError.innerHTML = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            passwordError.innerHTML = 'Password must be at least 6 characters long';
            isValid = false;
        }

        return isValid;
    }

    function isValidEmail(email) {
        // Basic email validation regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }