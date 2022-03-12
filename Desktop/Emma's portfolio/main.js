'use strict'

//Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar')
const navbarHeight = navbar.getBoundingClientRect().height
window.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark')
  } else {
    navbar.classList.remove('navbar--dark')
  }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu')
const navbarMenuItem = document.querySelector('.navbar__menu__item')
navbarMenu.addEventListener('click', (event) => {
  const target = event.target
  const link = target.dataset.link
  if (link == null) {
    return
  }
  navbarMenu.classList.remove('open')
  scrollIntoView(link)
  selectNavItem(target)
})

// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn')
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open')
})

//Handle contact on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact')
homeContactBtn.addEventListener('click', () => {
  scrollIntoView('#contact')
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight
})

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible')
  } else {
    arrowUp.classList.remove('visible')
  }
})

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => scrollIntoView('#home'))

//scrollIntoView function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector)
  scrollTo.scrollIntoView({ behavior: 'smooth' })
  selectNavItem(navItems[sectionIds.indexOf(selector)])
}

// Projects
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter

  if (filter == null) {
    return
  }

  const active = document.querySelector('.category__btn.selected')
  const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode
  active.classList.remove('selected')
  target.classList.add('selected')

  projectContainer.classList.add('anim-out')
  setTimeout(() => {
    projects.forEach((project) => {
      const type = project.dataset.type
      if (filter === '*' || filter === type) {
        project.classList.remove('invisible')
      } else {
        project.classList.add('invisible')
      }
    })

    projectContainer.classList.remove('anim-out')
  }, 300)
})

//when scroll event evoke, active navbar menu items (Inersection Observer😆)

//1. make new array for sections and navbar menu items with sectionIds

const sectionIds = [
  '#home',
  '#about',
  '#skill',
  '#work',
  '#testimonials',
  '#contact',
]
const sections = sectionIds.map((id) => document.querySelector(id))
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="${id}"]`),
)

let selectedNavItem = navItems[0]
let selectedNavIndex = 0

function selectNavItem(selected) {
  selectedNavItem.classList.remove('active')
  selectedNavItem = selected
  selectedNavItem.classList.add('active')
}

//2. make intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
}

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting && entry.intersectionRatio > 0) {
      const index = sectionIds.indexOf(`#${entry.target.id}`)

      if (entry.boundingClientRect.y < 0) {
        selectedNavIndex = index + 1
      } else {
        selectedNavIndex = index - 1
      }
    }
  })
}

const observer = new IntersectionObserver(observerCallback, observerOptions)
sections.forEach((section) => observer.observe(section))

window.addEventListener('wheel', () => {
  if (window.scrollY === 0) {
    selectedNavIndex = 0
  } else if (
    window.scrollY + window.innerHeight ===
    document.body.clientHeight
  ) {
    selectedNavIndex = navItems.length - 1
  }
  selectNavItem(navItems[selectedNavIndex])
})
