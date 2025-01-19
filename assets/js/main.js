/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");


/*=============== MENU SHOW ===============*/
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}


/*=============== MENU HIDDEN ===============*/
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navMenu.classList.remove('show-menu');
  // When we click on each nav__link, we remove the show-menu class from the #nav-Menu...
}
navLink.forEach(n => n.addEventListener('click', linkAction)) // This forEach loop helps to run this code on each nav__link...


/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.querySelector('#header')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag...

  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.querySelector('#contact-form')
const contactMessage = document.querySelector('#contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  // serviceID - templateID - #form - publickey
  emailjs.sendForm('service_uwazbrb','template_ct2ku3z','#contact-form','prhO14aEVA3mYyuBd')
  .then(() =>{
    // Show sent message
    contactMessage.textContent = 'Message sent successfully ✅'

    // Remove message after 5 seconds
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000);

    // Clear input fields
    contactForm.reset()

  }, () => {
    // Show error message
    contactMessage.textContent = 'Message not sent (service error) ❌'
  })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scroll = document.querySelector('#scroll-up')
  // When the scroll is greater than 350 viewport height, add the show-scroll class to the a tag with the scrollup class...

  this.scrollY >= 350 ? scroll.classList.add('show-scroll')
                      : scroll.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]') // Select all sections with an 'id' attribute

const scrollActive = () => { // Define a function called scrollActive
  const scrollDown = window.scrollY // Get the current scroll position

  sections.forEach(current =>{ // Get the current scroll position
    const sectionHeigth  = current.offsetHeight // Get the height of the current section
    const sectionTop = current.offsetTop - 58  // Get the top position of the current section, adjusted by 58 pixels (offset)
    const sectionId = current.getAttribute('id') // Get the 'id' attribute of the current section
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') // Find the corresponding navigation link using the section's id

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeigth){  // Check if the current scroll position is within the bounds of the current section
      sectionsClass.classList.add('active-link') // Add the 'active-link' class to the corresponding navigation link
    } else {
      sectionsClass.classList.remove('active-link') // Remove the 'active-link' class from the corresponding navigation link
    }
  })
}
window.addEventListener('scroll', scrollActive) // Add an event listener to the window that triggers the scrollActive function on scroll


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector('#theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topics (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validation the dark-theme class.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose the topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark.
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button.
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme.
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  // We save the theme and the current icon that the user chose.
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 200,
  reset: true // Animations repeat
})

sr.reveal('.home__perfil, .about__image,.contact__mail', {origin: 'right'})

sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data', {origin: 'left'})

sr.reveal('.services__card, .projects__card', {interval: 100})