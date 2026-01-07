'use strict';
let rollDice = 0

let activePlayer = 0
let scores = [0, 0]
let currentScore = 0;

let player1 = document.querySelector('.player--0')
let player2 = document.querySelector('.player--1')

let player1Score = document.querySelector('#score--0')
let player2Score = document.querySelector('#score--1')

let player1Current = document.querySelector('#current--0')
let player2Current = document.querySelector('#current--1')

let newGameBtn = document.querySelector('.btn--new')
let rollDiceBtn = document.querySelector('.btn--roll')
let holdScoreBtn = document.querySelector('.btn--hold')
let diceImg = document.querySelector('.dice')
let stillPlaying = true


diceImg.classList.add('hidden')
player1Score.textContent = 0
player2Score.textContent = 0



rollDiceBtn.addEventListener('click', function(){
    if (stillPlaying){
    let rollDice = Math.trunc((Math.random() * 6) + 1)

    if (rollDice !== 1){
        currentScore += rollDice
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        
    }
    else{
        currentScore = 0
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        activePlayer = activePlayer === 0 ? 1 : 0
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')
    }

    diceImg.src = `dice-${rollDice}.png`
    diceImg.classList.remove('hidden')
}
})



holdScoreBtn.addEventListener('click', function(){
    if (stillPlaying){
    if (activePlayer === 0){
        scores[0] += currentScore
        currentScore = 0
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[0]
        activePlayer = 1
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')
        if(scores[0] >= 100){
            player1.classList.add('player--winner')
            stillPlaying = false
            diceImg.classList.add('hidden')
    }
    }
    else{
        scores[1] += currentScore
        currentScore = 0
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[1]
        activePlayer = 0
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')
        if(scores[1] >= 100){
            player2.classList.add('player--winner')
            stillPlaying = false
            diceImg.classList.add('hidden')
    }
}
}})



newGameBtn.addEventListener('click', function(){
    currentScore = 0
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore
    activePlayer = 0
    scores = [0,0]
    diceImg.classList.add('hidden')
    player1Score.textContent = 0
    player2Score.textContent = 0
    stillPlaying = true
    player1.classList.remove('player--winner')
    player2.classList.remove('player--winner')
    player1.classList.add('player--active')
    player2.classList.remove('player--active')
})