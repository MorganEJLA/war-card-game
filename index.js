let deckId
const cardsContainer = document.getElementById("cards");
const newDeck = document.getElementById("new-deck");
const drawCard = document.getElementById("draw-card");

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {console.log(data)
        deckId = data.deck_id
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
        })

})


// setTimeout(function(){
//     console.log("I finally ran")
// }, 2000)


