// Toggle nav menu mobile
const toggleNav = document.querySelector('#navbar #toggle-nav-menu')
toggleNav.addEventListener('click', function () {
    const navMenu = document.querySelector('#navbar #nav-menu')
    this.classList.toggle('active')
    navMenu.classList.toggle('show')
})

// Nav menu
const homeLink = document.querySelector('#home-link')
const aboutLink = document.querySelector('#about-link')
const skillLink = document.querySelector('#skill-link')
const portfolioLink = document.querySelector('#portfolio-link')
const contactLink = document.querySelector('#contact-link')
homeLink.addEventListener('click', function(e) {
    e.preventDefault()
    const home = document.querySelector('#home')
    this.classList.add('active')
    aboutLink.classList.remove('active')
    skillLink.classList.remove('active')
    portfolioLink.classList.remove('active')
    contactLink.classList.remove('active')
    home.scrollIntoView()
})

aboutLink.addEventListener('click', function(e) {
    e.preventDefault()
    const about = document.querySelector('#about')
    this.classList.add('active')
    homeLink.classList.remove('active')
    skillLink.classList.remove('active')
    portfolioLink.classList.remove('active')
    contactLink.classList.remove('active')
    about.scrollIntoView()
})

skillLink.addEventListener('click', function(e) {
    e.preventDefault()
    const skill = document.querySelector('#skill')
    this.classList.add('active')
    homeLink.classList.remove('active')
    aboutLink.classList.remove('active')
    portfolioLink.classList.remove('active')
    contactLink.classList.remove('active')
    skill.scrollIntoView()
})

portfolioLink.addEventListener('click', function(e) {
    e.preventDefault()
    const portfolio = document.querySelector('#portfolio')
    this.classList.add('active')
    homeLink.classList.remove('active')
    aboutLink.classList.remove('active')
    skillLink.classList.remove('active')
    contactLink.classList.remove('active')
    portfolio.scrollIntoView()
})

contactLink.addEventListener('click', function(e) {
    e.preventDefault()
    const contact = document.querySelector('#contact')
    this.classList.add('active')
    homeLink.classList.remove('active')
    aboutLink.classList.remove('active')
    skillLink.classList.remove('active')
    portfolioLink.classList.remove('active')
    contact.scrollIntoView()
})

// Back to top
const backTop = document.querySelector('#back-to-top')
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backTop.classList.add('flex')
        backTop.classList.remove('hidden')
    } else {
        backTop.classList.remove('flex')
        backTop.classList.add('hidden')
    }
}

backTop.addEventListener('click', () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    homeLink.classList.add('active')
    aboutLink.classList.remove('active')
    skillLink.classList.remove('active')
    portfolioLink.classList.remove('active')
    contactLink.classList.remove('active')
})

// Dark mode toggle
const sun = '<svg class="w-6 h-6" class="fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>'
const moon = '<svg class="h-6 w-6" class="fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>'

const darkToggle = document.querySelector('#darkMode-toggle')
const html = document.querySelector('html')
darkToggle.addEventListener('click', function () {
    html.classList.toggle('dark')

    if (html.classList.contains('dark')) {
        localStorage.theme = 'dark'
        this.innerHTML = sun
    } else {
        localStorage.theme = 'light'
        this.innerHTML = moon
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
    darkToggle.innerHTML = sun
} else {
    html.classList.remove('dark')
    darkToggle.innerHTML = moon
}