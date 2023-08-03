const buttons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Remove the "active" class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    // Add the "active" class to the clicked button
    button.classList.add("active");

    // Show the corresponding tab-panel and hide the others
    tabPanels.forEach((panel, panelIndex) => {
      panel.style.display = index === panelIndex ? "block" : "none";
    });
  });
});
