//blackjack rules
//sum of cards < 21 - still in the game(Do you want to draw a new card? 🙂 )
//sum of cards = 21 - Wohoo! You've got Blackjack! 🥳
//sum of cards > 21 - You're out of the game! 😭

let player = {               //player object
    name: "Charith",         // create function inside the object, that's call methods
    chips: 150
}
let cards = []
let sum = 0;
let hasBlackJack = false
let isAlive = false
let message = ""
let msgEl = document.getElementById("msg")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")    // document.querySelector("#sum-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips       //player.name - this is dot notation     player["name"] - braket notation

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1  //Math.floor() - remove desimals ;  Math.random() - get number beteen 0 and 1(not get 1,only 0.99999)  
    // Math.random() * 13 - 13 means limit
    if (randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}                                                          
console.log(cards)

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20){
        message = ("Do you want to draw a new card?");
    }
    
    else if (sum === 21){
        message = ("You've got Blackjack!");
        hasBlackJack = true
    
    }
    
    else if (sum > 21){          // also we can use only - else(){}
        message = ("You're out of the game!");
        isAlive = false
    }
    
    msgEl.textContent=message
}

function newCard(){
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}
