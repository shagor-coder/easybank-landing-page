const bodyActive = document.querySelector('body')
const mobileMenu = document.querySelector('.nav__menu')
const hamBurger = document.querySelector('.nav__toggle')
const overlay = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__menu__links')

hamBurger.addEventListener('click', () => {
  hamBurger.classList.toggle('active')
  overlay.classList.toggle('active')
  mobileMenu.classList.toggle('active')
  bodyActive.classList.toggle('active')
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      bodyActive.classList.remove('active')
      hamBurger.classList.remove('active')
      overlay.classList.remove('active')
      mobileMenu.classList.remove('active')
    })
  })
})

const mainHeader = document.querySelector('.header')
window.addEventListener('scroll', () => {
  mainHeader.classList.toggle('active', scrollY > 0)
})
//# sourceMappingURL=script.js.map
