let instructions = document.getElementById(`instructions`)
let startButton = document.getElementById(`startButton`)
let numberBox = document.getElementById(`numberBox`)

let answerBox = document.getElementById(`answerBox`)
let answer = document.getElementById(`answer`)
let submitButton = document.getElementById(`submitButton`)

let resultBox = document.getElementById(`resultBox`)
let resultParagraph = document.getElementById(`resultParagraph`)
let playAgainButton = document.getElementById(`playAgainButton`)

let number
let count = 0
let intervalId

startButton.addEventListener(`click`, start)
submitButton.addEventListener(`click`, submit)
playAgainButton.addEventListener(`click`, start)

function start() {
  instructions.style.display = `none`
  startButton.style.display = `none`
  answerBox.style.display = `none`
  resultBox.style.display = `none`

  answer.value = ``
  answer.disabled = false
  submitButton.disabled = false

  numberBox.style.display = `block`

  number = Math.floor(Math.random() * 10)
  numberBox.innerHTML = number
  numberBox.style.color = `black`

  count = 0
  setTimeout(clear, 2000)
  intervalId = setInterval(changeNumber, 3000)
}

function clear() {
  numberBox.innerHTML = ``
}

function changeNumber() {
  if (count < 5) {
    count = count + 1

    let randomOperation = Math.floor(Math.random() * 2)
    let randomNumber = Math.floor(Math.random() * 10)

    if (randomOperation == 0) {
      number = number + randomNumber
      numberBox.innerHTML = `+${randomNumber}`
      numberBox.style.color = `green`
    }
    else if (randomOperation == 1) {
      number = number - randomNumber
      numberBox.innerHTML = `-${randomNumber}`
      numberBox.style.color = `red`
    }

    setTimeout(clear, 2000)
  }
  else {
    numberBox.style.display = `none`

    instructions.style.display = `block`
    instructions.innerHTML = `What is the number now?`

    answerBox.style.display = `block`

    clearInterval(intervalId)
  }
}

function submit() {
  let answerValue = answer.value.trim()

  if (answerValue == number) {
    resultParagraph.innerHTML = `Good job!`
  }
  else {
    resultParagraph.innerHTML = `Sorry, the number is ${number}`
  }

  answer.disabled = true
  submitButton.disabled = true
  resultBox.style.display = `block`
}