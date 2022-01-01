// Modal

const button = document.querySelector('.card-btn')

const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

close.addEventListener('click', () => {
  popup.style.display = 'none'
})
popup.addEventListener('click', () => {
  popup.style.display = 'none'
})

// console.log(button)
