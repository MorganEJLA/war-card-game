

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}




document.getElementById("new-deck").addEventListener("click", handleClick)


// setTimeout(function(){
//     console.log("I finally ran")
// }, 2000)


function callback(){
    console.log("i finally ran")
}
setTimeout(callback, 2000)