let deckId

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(data => {console.log(data)
        deckId = data.deck_id
     })
}



document.getElementById("new-deck").addEventListener("click", handleClick)
document.getElementById("draw-card").addEventListener("click", () =>{
    console.log(deckId);
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=2`)
        .then(res =>res.json())
        .then(data => {
            console.log(data.cards)
            document.getElementById("cards").innerHTML = 
            `<img src = ${data.cards[0].image} />
             <img src = ${data.cards[1].image} />`
        })

})


// setTimeout(function(){
//     console.log("I finally ran")
// }, 2000)


