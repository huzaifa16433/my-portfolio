/*============================ Toggle Menu ==================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/*============================ Sticky Navbar ==================================*/

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 100);
    }
});

/*============================ Typing Effect ==================================*/

var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*============================ Scroll Reveal ==================================*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});