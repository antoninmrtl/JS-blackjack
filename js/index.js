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
    messageEl.innerText= message;
    sumEl.innerText = `Sum: ${sum}`
    if(thirdCard === undefined){
        cardEl.innerText = `Cards: ${firstCard}  ${secondCard}`
    }else {
        cardEl.innerText = `Cards: ${firstCard}  ${secondCard}  ${thirdCard}`
    }

}

const buttonCard = document.getElementById('newCard')
buttonCard.addEventListener('click', function(){
    thirdCard = 2
    sum += thirdCard
    startGame()
})

if(sum <= 20){
    message = 'Do you want to draw a new card?';
}else if(sum === 21){
    message = 'BJ !';
    hasBJ = true;
}else {
    message = 'You\'re out of the game!';
    isAlive = false
}
