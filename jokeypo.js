const result = document.querySelector('.result')
const youScore = document.querySelector('.span-you')
const machineScore = document.querySelector('.span-machine')

const pYou = document.querySelector('.p-you')
const pMachine = document.querySelector('.p-machine')


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)


    if (human === machine) {
        if (human === 'rock') {
            pYou.innerHTML = "&#x1F44A"
            pMachine.innerHTML = "&#x1F44A"
        } else if (human === 'paper') {
            pYou.innerHTML = "&#x1f590";
            pMachine.innerHTML = "&#x1f590"
        } else {
            pYou.innerHTML = "&#x270c"
            pMachine.innerHTML = "&#x270c"
        }
        result.innerHTML = "Deu Empate"
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        if (human === 'rock' && machine === 'scissors') {
            pYou.innerHTML = "&#x1F44A"
            pMachine.innerHTML = "&#x270c"
        } else if (human === 'paper' && machine === 'rock') {
            pYou.innerHTML = "&#x1f590";
            pMachine.innerHTML = "&#x1F44A"
        } else {
            pYou.innerHTML = "&#x270c"
            pMachine.innerHTML = "&#x1f590"
        }
        humanScoreNumber++
        youScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você Ganhou"
    } else {
        if (human === 'rock' && machine === 'paper') {
            pYou.innerHTML = "&#x1F44A"
            pMachine.innerHTML = "&#x1f590"
        } else if (human === 'paper' && machine === 'scissors') {
            pYou.innerHTML = "&#x1f590";
            pMachine.innerHTML = "&#x270c"
        } else {
            pYou.innerHTML = "&#x270c"
            pMachine.innerHTML = "&#x1F44A"
        }
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você Perdeu para Alexa!"
    }
}