// Navbar functionality
const navbar = document.querySelector('.navbar');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
  navbarCollapse.classList.toggle('show');
  this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
});

document.addEventListener('click', function(event) {
  const isClickInside = navbar.contains(event.target);
  if (!isClickInside && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
    navbarToggler.setAttribute('aria-expanded', 'false');
  }
});

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  });
});