function toggleCards() {
    console.log("Hitted!")
    var cards = document.getElementsByClassName("card__more");
    var button = document.getElementById("more__cards");
    for (var i=0;i<cards.length;i+=1){
        if (cards[i].style.display === "none") {
            cards[i].style.display = "flex";
            button.innerHTML = "View Less";
        } else {
            cards[i].style.display = "none";
            button.innerHTML = "View More";
        }
    }
}