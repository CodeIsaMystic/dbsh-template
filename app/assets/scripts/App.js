import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

new RevealOnScroll(document.querySelectorAll(".service-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new RevealOnScroll(document.querySelectorAll(".btn--orange"), 50)


let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}