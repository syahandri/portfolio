"use strict"

document.addEventListener('DOMContentLoaded', () => {
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