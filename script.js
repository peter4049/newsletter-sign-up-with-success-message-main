const  containerE1 = document.getElementById("container")
const  leftE1 = document.getElementById("left")
const  rightE1 = document.getElementById("right")

const  userEmailE1 = document.getElementById("user-email")
const  vaildE1 = document.getElementById("vaild")
const  emailInput = document.getElementById("email-input")
const  submitbtnE1 = document.getElementById("submit-btn")


const  confirmMessageE1 = document.getElementById("confirm-message")
const  dissmissE1 = document.getElementById("dissmiss")


function formSuccess() {
    confirmMessageE1.classList.add('active')
    containerE1.classList.add('success')
    leftE1.style.display='none'
    rightE1.style.display='none'
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

submitbtnE1.addEventListener('click' , (e) => {
    e.preventDefault()
    const email = emailInput.value.trim()

    if(validateEmail(email)) {
        formSuccess()
        userEmailE1.innerText = email
        emailInput.value = ''

        vaildE1.classList.remove('active')
        emailInput.classList.remove('active')
    } else {
        vaildE1.classList.add('active')
        emailInput.classList.add('active')
    }
})


dissmissE1.addEventListener('click' , () => {
    leftE1.style.display = 'block'
    rightE1.style.display = 'block'
    containerE1.classList.remove('success')
    confirmMessageE1.classList.remove('active')
})