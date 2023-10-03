const result = document.querySelector('.result')
const youScore = document.querySelector('.span-you')
const machineScore = document.querySelector('.span-machine')

const pYou = document.querySelector('.p-you')
const pMachine = document.querySelector('.p-machine')

const  GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}


const playTheGame = (human, machine) => {
    console.log('Humano: ' + human + " Maquina: " + machine)


    if (human === machine) {
        if (human === GAME_OPTIONS.ROCK) {
            pYou.innerHTML = "&#x1F44A"
            pMachine.innerHTML = "&#x1F44A"
        } else if (human === GAME_OPTIONS.PAPER) {
            pYou.innerHTML = "&#x1f590";
            pMachine.innerHTML = "&#x1f590"
        } else {
            pYou.innerHTML = "&#x270c"
            pMachine.innerHTML = "&#x270c"
        }
        result.innerHTML = "Deu Empate"
    } else if (
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)) {
        if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) {
            pYou.innerHTML = "&#x1F44A"
            pMachine.innerHTML = "&#x270c"
        } else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) {
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
        if (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.PAPER) {
            pYou.innerHTML = "&#x1F44A"
            pMachine.innerHTML = "&#x1f590"
        } else if (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.SCISSORS) {
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