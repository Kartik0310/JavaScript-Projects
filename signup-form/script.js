const button = document.querySelector('.button');
const allInput = document.querySelectorAll('.input');

button.addEventListener('click', () => {
    allInput.forEach((input) => {
        const inputBox = input.closest('.input-box');
        const value = input.value.trim();
        const isEmail =  input.classList.contains('email');

        
        inputBox.classList.remove('error');

        if (value === '') {
            inputBox.classList.add('error');
        } else if (isEmail && !validateEmail(value)) {
            inputBox.classList.add('error');
        }
    });
});

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
