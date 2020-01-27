import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new Modal()

let stickyHeader = new StickyHeader()

new RevealOnScroll(document.querySelectorAll(".reveal-img1"), 50)
new RevealOnScroll(document.querySelectorAll(".reveal-img2"), 50)
new RevealOnScroll(document.querySelectorAll(".service-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)


let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}