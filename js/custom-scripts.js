const navbar = document.querySelector('.navbar');
const hero = document.querySelector('.hero');

function toggleNavbar() {
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', toggleNavbar);
window.addEventListener('resize', toggleNavbar);


(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})()