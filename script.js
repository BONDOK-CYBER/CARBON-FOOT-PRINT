// Smooth Scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const nav = document.querySelector('nav');
const menuToggle = document.createElement('div');
menuToggle.innerHTML = '&#9776;'; // Hamburger icon
menuToggle.classList.add('menu-toggle');
document.body.insertBefore(menuToggle, nav);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close menu on link click (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
