let deckId
const cardsContainer = document.getElementById("cards");
const newDeck = document.getElementById("new-deck");
const drawCard = document.getElementById("draw-card");

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {console.log(data)
        deckId = data.deck_id
        console.log(deckId)
     })
}



newDeck.addEventListener("click", handleClick)
drawCard.addEventListener("click", () =>{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
        .then(res =>res.json())
        .then(data => {
            cardsContainer.children[0].innerHTML = 
            `<img src = ${data.cards[0].image} class = "card" />`
            cardsContainer.children[1].innerHTML = 
             `<img src = ${data.cards[1].image} class = "card" />`
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            console.log(winnerText)

        })

})

function determineCardWinner(card1, card2){
    const valueOptions = ["2","3","4","5","6","7","8","9","10", "Jack", 
    "Queen", "King", "Ace"]
    const card1ValueIndex = valueOptions.indexOf(card1.value);
    const card2ValueIndex = valueOptions.indexOf(card2.value);
    // console.log("card1: ", card1ValueIndex);
    // console.log("card2: ", card2ValueIndex);

    if (card1ValueIndex > card2ValueIndex){
        return "player 1 wins!"
    }else if (card1ValueIndex < card2ValueIndex){
        return "player 2 wins!"
    }else{
        return "Its a tie"
    }
}

// const card1Obj = {
//     value: "7"
// }
// const card2Obj = {
//     value: "King"
// }

// determineCardWinner(card1Obj, card2Obj)
// setTimeout(function(){
//     console.log("I finally ran")
// }, 2000)


