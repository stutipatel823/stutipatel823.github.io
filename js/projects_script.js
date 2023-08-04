const cardSets = document.querySelectorAll(".card-set-container");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const pages = document.querySelectorAll(".page-tab");

let activeCardSetIndex = 0;

leftButton.addEventListener("click", (e) => {
    cardSets[activeCardSetIndex].classList.remove("active");
    pages[activeCardSetIndex].classList.remove("active");
    
    activeCardSetIndex = (activeCardSetIndex - 1 + cardSets.length) % cardSets.length;
    
    cardSets[activeCardSetIndex].classList.add("active");
    pages[activeCardSetIndex].classList.add("active");

});

rightButton.addEventListener('click', (e) => {
  cardSets[activeCardSetIndex].classList.remove("active");
  pages[activeCardSetIndex].classList.remove("active");

  activeCardSetIndex = (activeCardSetIndex + 1) % cardSets.length;

  cardSets[activeCardSetIndex].classList.add("active");
  pages[activeCardSetIndex].classList.add("active");
});

