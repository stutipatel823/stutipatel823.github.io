const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const navExtended = document.querySelector(".extended-nav");
const body = document.body;
openMenuBtn.addEventListener('click', () => {
  navExtended.style.display = "block";
  openMenuBtn.style.display = "none";
  closeMenuBtn.style.display = "block";
  body.style.overflow = "hidden";  // Hide scrollbars
  body.style.position = "fixed";   // Prevent scrolling
});

closeMenuBtn.addEventListener('click', () => {
  navExtended.style.display = "none";
  closeMenuBtn.style.display = "none";
  openMenuBtn.style.display = "block";
  body.style.overflow = "auto";    // Restore scrollbars
  body.style.position = "static";  // Restore scrolling
});

// const navLinks = navExtended.querySelector("active");
// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     navExtended.style.display = "none";
//     closeMenuBtn.style.display = "none";
//     openMenuBtn.style.display = "block";
//   });
// });
