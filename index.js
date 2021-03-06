let deckId
let computerScore = 0;
let yourScore = 0;

const cardsContainer = document.getElementById("cards");
const newDeck = document.getElementById("new-deck");
const drawCard = document.getElementById("draw-card");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const yourScoreEl = document.getElementById("your-score");

async function handleClick(){
   const res =  await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
   const data = await res.json ()
   remainingText.textContent = `Remaining cards ${data.remaining}`
    deckId = data.deck_id
    console.log(deckId)
    drawCard.disabled = false;
        
       
        
     }




newDeck.addEventListener("click", handleClick)


drawCard.addEventListener("click", async() =>{
    const res = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    const data = await res.json()
        remainingText.textContent = `Remaining cards ${data.remaining}`
        cardsContainer.children[0].innerHTML = 
        `<img src = ${data.cards[0].image} class = "card" />`
        cardsContainer.children[1].innerHTML = 
        `<img src = ${data.cards[1].image} class = "card" />`
        const winnerText = determineCardWinner(data.cards[0], data.cards[1])
            header.textContent = winnerText;

        if (data.remaining === 0){
            drawCard.disabled = true;
            if(computerScore > yourScore){
                header.textContent = "The Computer Won the Game!"
                    
            }else if(
                yourScore > computerScore){
                header.textContent = "You Won the Game!"
                   
            }else{
                    header.textContent = "It's a tie!"
            }
            resetGame();
        }

    });
            
            



    
function determineCardWinner(card1, card2){
    const valueOptions = ["2","3","4","5","6","7","8","9","10","JACK", 
    "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1.value)
    const card2ValueIndex = valueOptions.indexOf(card2.value)
    // console.log("card1: ", card1ValueIndex);
    // console.log("card2: ", card2ValueIndex);

    if (card1ValueIndex > card2ValueIndex){
        computerScore++
        computerScoreEl.textContent = `Computer score: ${computerScore}`
        return "Computer wins!"
    }else if (card1ValueIndex < card2ValueIndex){
        yourScore++
        yourScoreEl.textContent = `Your score: ${yourScore}`
        return "You win!"
    }else{
        return "War!"
    // messageEl.textContent = message;
    }
   
}

function resetGame(){
    yourScore = 0;
    computerScore = 0;
   

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


