let firstCard = 6
let secondCard = 11
let thirdCard;
let sum = firstCard + secondCard
let hasBJ = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl= document.getElementById('card-el')



const buttonStart = document.getElementById('start')
buttonStart.addEventListener('click', startGame)

function startGame(){
    renderGame()
}

function renderGame(){
    sumEl.innerText = `Sum: ${sum}`
    if(thirdCard === undefined){
        cardEl.innerText = `Cards: ${firstCard}  ${secondCard}`
    }else {
        cardEl.innerText = `Cards: ${firstCard}  ${secondCard}  ${thirdCard}`
    }

    if(sum <= 20){
        message = 'Do you want to draw a new card?';
    }else if(sum === 21){
        message = 'BJ !';
        hasBJ = true;
    }else {
        message = 'You\'re out of the game!';
        isAlive = false
    }

    messageEl.innerText= message;

}

const buttonCard = document.getElementById('newCard')
buttonCard.addEventListener('click', newCard)


function newCard(){
    thirdCard = 2
    sum += thirdCard
    renderGame()
}


