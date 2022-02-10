const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(){

  if (lockBoard) return;
  if (this === firstCard) return;

   this.classList.add('flip');

   if (!hasFlippedCard){
       //first click 
       hasFlippedCard=true;
       firstCard=this;

       return;
   }
   
       //second click
       hasFlippedCard= false;
       secondCard=this;

       checkForMatch();

        
   }
 
function checkForMatch(){
    
       // do cards match
       let isMatch = firstCard.dataset.framework ===
       secondCard.dataset.framework;

       isMatch ?  disableCards() : unflipCards();
}
function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
     
    resetBoard();
}
  function unflipCards(){
        //not a match
        lockBoard = true;

        setTimeout(() => {
         firstCard.classList.remove('flip');
         secondCard.classList.remove('flip');
        
          lockBoard=false;
        }, 1500);
}
function resetBoard(){
    [hasFlippedCard, lockBoard]= false;
    [firstCard,secondCard] = [null,null];
}
(function shuffle(){
    cards.forEach(cards => {
        let randomPos = Math.floor(Math.random()*12);
        cards.style.order = randomPos;
    });

})();



cards.forEach(card => card.addEventListener('click',flipCard));
//the end 
//mohamedDev code!!