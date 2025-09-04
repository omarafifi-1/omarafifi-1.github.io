// Auto hide/show navbar on scroll
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

// Form validation
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

// Projects pagination
const pages = document.querySelectorAll('.project-page');
const pageLinks = document.querySelectorAll('.page-link');
  pageLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pageIndex = e.target.getAttribute('data-page');
      pages.forEach(p => p.classList.add('d-none'));
      pages[pageIndex].classList.remove('d-none');
      document.querySelectorAll('.page-item').forEach(li => li.classList.remove('active'));
      e.target.parentElement.classList.add('active');
    });
  });