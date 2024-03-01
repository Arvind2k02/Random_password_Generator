document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('Copy-btn');
    const passwordField = document.getElementById('Password');
    const lengthField = document.getElementById('Length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');

    // Function to generate a random password
    function generatePassword() {
        const length = parseInt(lengthField.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

        let chars = '';

        if (includeUppercase) chars += uppercaseChars;
        if (includeLowercase) chars += lowercaseChars;
        if (includeNumbers) chars += numberChars;
        if (includeSymbols) chars += symbolChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        return password;
    }

    // Event listener for generate button
    generateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const newPassword = generatePassword();
        passwordField.value = newPassword;
    });

    // Event listener for copy button
    copyBtn.addEventListener('click', function(event) {
        event.preventDefault();
        passwordField.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });
});
