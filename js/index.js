let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBJ = false;
let isAlive = true;
let message = "";
const buttonStart = document.getElementById('start')
buttonStart.addEventListener('click', function(){
    console.log(message)
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
