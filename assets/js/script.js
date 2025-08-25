"use strict"

document.addEventListener('DOMContentLoaded', () => {
  // form contact
  const formContact = document.querySelector('#formContact')
  formContact.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = document.querySelector('#name')
    const instance = document.querySelector('#instance')
    const message = document.querySelector('#message')

    const text = `Halo%2Csaya%20${name.value}%20dari%20${instance.value}%0A${message.value}`
    const url = `https://wa.me/6287869984752?text=${text}`

    window.open(url, '_blank')

    formContact.reset()
  })
})

// hidden or show navbar when scroll
let prevScrollpos = window.pageYOffset
const navbar = document.querySelector('nav')
window.addEventListener('scroll', function () {
  let currentScrollPos = window.pageYOffset

  if (prevScrollpos < currentScrollPos) {
    navbar.classList.add('hidden')
  } else {
    navbar.classList.remove('hidden')
  }

  prevScrollpos = currentScrollPos

})