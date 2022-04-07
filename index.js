let deckId
const cardsContainer = document.getElementById("cards");
const newDeck = document.getElementById("new-deck");
const drawCard = document.getElementById("draw-card");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const yourScoreEl = document.getElementById("your-score");
function handleClick(){
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        
        .then(res => res.json())
        .then(data => {console.log(data)
        remainingText.textContent = `Remaining cards ${data.remaining}`
        deckId = data.deck_id
        console.log(deckId)
     })
}



newDeck.addEventListener("click", handleClick)
drawCard.addEventListener("click", () =>{
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
        .then(res =>res.json())
        .then(data => {
            remainingText.textContent = `Remaining cards ${data.remaining}`
            cardsContainer.children[0].innerHTML = 
            `<img src = ${data.cards[0].image} class = "card" />`
            cardsContainer.children[1].innerHTML = 
             `<img src = ${data.cards[1].image} class = "card" />`
            const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText;

            if (data.remaining === 0){
                drawCard.disabled = true;
            }

        })

})

function determineCardWinner(card1, card2){
    const valueOptions = ["2","3","4","5","6","7","8","9","10","JACK", 
    "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    // console.log("card1: ", card1ValueIndex);
    // console.log("card2: ", card2ValueIndex);

    if (card1ValueIndex > card2ValueIndex){
        return "Card 1 leads"
    }else if (card1ValueIndex < card2ValueIndex){
        return "Card 2 leads!"
    }else{
        return "War!"
    // messageEl.textContent = message;
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


