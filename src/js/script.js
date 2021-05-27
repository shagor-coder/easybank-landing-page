
const bodyActive = document.querySelector('body');

const mobileMenu = document.querySelector('.nav__menu');

const hamBurger = document.querySelector('.nav__toggle');

const overlay = document.querySelector('.nav');

const navLinks = document.querySelectorAll('.nav__menu__links');


function menuToggle() {
    hamBurger.classList.toggle('active');
    overlay.classList.toggle('active');
    mobileMenu.classList.toggle('active');
};

hamBurger.addEventListener ('click' , () =>  {
    if (hamBurger.classList.contains('active')) {
        bodyActive.classList.add('active');
    } else {
        bodyActive.classList.remove('active');
    }
})
// Scroll

const mainHeader = document.querySelector('.header');

window.addEventListener('scroll', () => {
    mainHeader.classList.toggle('active', scrollY > 0)
})