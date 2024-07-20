"use strict"

document.addEventListener('DOMContentLoaded', () => {
   // Menampilkan menu hamburge navbar
   const btnNavMenu = document.querySelector('#btn-nav-menu')
   const btnCloseNavMenu = document.querySelector('#btn-close')
   const smallNavMenu = document.querySelector('#small-nav-menu')
   btnNavMenu.addEventListener('click', () => {
      smallNavMenu.classList.add('active')
   })

   btnCloseNavMenu.addEventListener('click', () => {
      smallNavMenu.classList.remove('active')
   })

   // menambahkan class active ke nav link
   const navLink = document.querySelectorAll('.nav-link')
   navLink.forEach(nav => {
      nav.addEventListener('click', e => {
         const currentActive = document.querySelector('.active')
         currentActive.className = currentActive.className.replace(' active', '')
         nav.className += ' active'
      })
   })
})
