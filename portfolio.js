const welcomeModal = document.querySelector('.welcome')
const container = document.querySelector('.container')
const body = document.querySelector('body')
const btn = document.querySelector('.btn')
const wrapper = document.querySelector('.wrappers')
const wrapContainer = document.querySelector('.main-wrapper')

btn.addEventListener('click', () => {
   wrapper.classList.toggle('show')
 })

let id = setTimeout(() => {
   welcomeModal.classList.add('show')
   welcomeModal.style.opacity = '1'
   container.style.opacity = '0.5'
},200)

setTimeout(() => {
   welcomeModal.classList.remove('show')
   container.style.opacity = '1'
   clearTimeout(id)
},4000)



