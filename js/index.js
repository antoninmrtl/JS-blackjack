let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBJ = false;
let isAlive = true;

if(sum <= 20){
    console.log('Do you want to draw a new card?')
}else if(sum === 21){
    console.log('BJ !')
    hasBJ = true;
}else {
    console.log("You\'re out of the game!")
    isAlive = false

}