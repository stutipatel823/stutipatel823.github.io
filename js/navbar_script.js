
const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navExtended = document.querySelector(".extended-nav");

openMenuBtn.addEventListener('click', () => {
  navExtended.style.display = "block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener('click', () => {
  navExtended.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
});

// const navLinks = navExtended.querySelectorAll("a");
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navExtended.style.display = "none";
//     closeMenuBtn.style.display = "none";
//     openMenuBtn.style.display = "block";
//   });
// });
