function toggleForm() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
    var container = document.querySelector('.form-container');

    if (container.classList.contains('slide-left')) {
        container.classList.remove('slide-left');
        loginForm.style.transform = 'translateX(0)';
        registerForm.style.transform = 'translateX(100%)';
    } else {
        container.classList.add('slide-left');
        loginForm.style.transform = 'translateX(-100%)';
        registerForm.style.transform = 'translateX(0)';
    }
}
