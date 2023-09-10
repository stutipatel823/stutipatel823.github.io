document.addEventListener("DOMContentLoaded", () => {
  const cardSetContainer = document.querySelector(".card-set-container");
  const rightArrow = document.querySelector(".right-arrow");
  const leftArrow = document.querySelector(".left-arrow");
  const cardPerPage = 3;
  let currentPage = 1;
  let projectsData = [];

  fetch("js/projects.json")
    .then((response) => response.json())
    .then((projects) => {
      projectsData = projects;
      const totalCards = projectsData.length;
      const totalPages = Math.ceil(totalCards / cardPerPage);

      function displayCards() {
        cardSetContainer.innerHTML = "";
        const startIndex = (currentPage - 1) * cardPerPage;
        const endIndex = Math.min(startIndex + cardPerPage, totalCards);
      
        for (let i = startIndex; i < endIndex; i++) {
          const project = projectsData[i];
          const card = document.createElement("div");
          card.classList.add("card-container");
          card.id = `card-${i + 1}`;
      
          // Check if the image is empty
          if (project.image) {
            card.innerHTML = `
              <div class="top"><img src="${project.image}"></div>
              <div class="bottom">
                <h1 class="project-heading">${project.title}</h1>
                <p>${project.skills}</p>
              </div>
              <div class="sources">
                <p>View More</p>
                <div class="source">
                  <a href="${project.sources.website || '#'}" target="_blank">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
                <div class="source">
                  <a href="${project.sources.github || '#'}" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
                <div class="source">
                  <a href="${project.sources.external || '#'}" target="_blank">
                    <i class="fas fa-globe"></i>
                  </a>
                </div>
              </div>
            `;
          } else {
            // Handle the case when the image is empty
            card.innerHTML = `
              <div class="top">
                <div class="placeholder-image">No Image Available</div>
              </div>
              <div class="bottom">
                <h1 class="project-heading">${project.title}</h1>
                <p>${project.skills}</p>
              </div>
              <div class="sources">
                <p>View More</p>
                <div class="source">
                  <a href="${project.sources.website || '#'}" target="_blank">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
                <div class="source">
                  <a href="${project.sources.github || '#'}" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
                <div class="source">
                  <a href="${project.sources.external || '#'}" target="_blank">
                    <i class="fas fa-globe"></i>
                  </a>
                </div>
              </div>
            `;
          }
      
          cardSetContainer.append(card);
        }
      }
      

      // Initial display
      displayCards();

      // Create page tabs
      const pageTabContainer = document.querySelector(".pages-tab-container");
      for (let i = 1; i <= totalPages; i++) {
        const pageTab = document.createElement("div");
        pageTab.classList.add("page-tab");
        pageTab.id = `page-${i}`;
        if (i === 1) {
          pageTab.classList.add("active");//Add "active" class to the first page
        }
        pageTab.addEventListener("click", () => {
          currentPage = i;
          displayCards();
          //Remove the "active" class from all page tabs
          const allPageTabs = document.querySelectorAll(".page-tab");
          allPageTabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          //Add the "active" class to the clicked page tab
          pageTab.classList.add("active");
        });

        pageTabContainer.appendChild(pageTab);
      }

      // Right arrow click event
      rightArrow.addEventListener("click", () => {
        if (currentPage < totalPages) {
          currentPage++;
        } else {
          currentPage = 1; //Wrap to the first page
        }
        displayCards(); 
        //Remove the "active" class from all page tabs
        const allPageTabs = document.querySelectorAll(".page-tab");
        allPageTabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        //Add the "active" class to the currentPage tab
        const pageTab = document.querySelector(`#page-${currentPage}`);
        pageTab.classList.add("active");
      });

      // Left arrow click event
      leftArrow.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
        } else {
          currentPage = totalPages;
        }
        displayCards();
        //Remove the "active" class from all page tabs
        const allPageTabs = document.querySelectorAll(".page-tab");
        allPageTabs.forEach((tab)=>{
          tab.classList.remove("active");
        });
        //Add the "active" class to the currentPage tab
        const pageTab = document.querySelector(`#page-${currentPage}`);
        pageTab.classList.add("active");
      });

    
    })
    .catch((error) => {
      console.error("Error loading project data:", error);
    });
});
//Optimized Code
/*
document.addEventListener("DOMContentLoaded", () => {
  // Select DOM elements
  const cardSetContainer = document.querySelector(".card-set-container");
  const rightArrow = document.querySelector(".right-arrow");
  const leftArrow = document.querySelector(".left-arrow");
  const cardPerPage = 3;
  let currentPage = 1;
  let projectsData = [];

  // Fetch project data from JSON
  fetch("projects.json")
    .then((response) => response.json())
    .then((projects) => {
      projectsData = projects;
      const totalCards = projectsData.length;
      const totalPages = Math.ceil(totalCards / cardPerPage);

      // Function to display project cards
      function displayCards() {
        cardSetContainer.innerHTML = "";
        const startIndex = (currentPage - 1) * cardPerPage;
        const endIndex = Math.min(startIndex + cardPerPage, totalCards);

        for (let i = startIndex; i < endIndex; i++) {
          const project = projectsData[i];
          const card = document.createElement("div");
          card.classList.add("card-container");
          card.id = `card-${i + 1}`;
          card.innerHTML = `
            <div class="top"><img src="${project.image}"></div>
            <div class="bottom">
              <h1 class="project-heading">${project.title}</h1>
              <p>${project.skills}</p>
            </div>
            <div class="sources">
              <p>View More</p>
              <div class="source"><a href="${project.sources.website}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i></a></div>
              <div class="source"><a href="${project.sources.github}" target="_blank"><i class="fab fa-github"></i></a></div>
              <div class="source"><a href="${project.sources.external}" target="_blank"><i class="fas fa-globe"></i></a></div>
            </div>
          `;
          cardSetContainer.appendChild(card);
        }
      }

      // Initial display 
      displayCards();

      // Create page tabs
      const pageTabContainer = document.querySelector(".pages-tab-container");
      for (let i = 1; i <= totalPages; i++) {
        const pageTab = document.createElement("div");
        pageTab.classList.add("page-tab");
        pageTab.id = `page-${i}`;
        if (i === 1) {
          pageTab.classList.add("active"); // Add "active" class to the first page
        }
        pageTab.addEventListener("click", () => {
          currentPage = i;
          displayCards();
          // Remove the "active" class from all page tabs
          document.querySelectorAll(".page-tab").forEach((tab) => {
            tab.classList.remove("active");
          });
          // Add the "active" class to the clicked page tab
          pageTab.classList.add("active");
        });

        pageTabContainer.appendChild(pageTab);
      }

      // Function to handle right arrow click event
      function handleRightArrowClick() {
        if (currentPage < totalPages) {
          currentPage++;
        } else {
          currentPage = 1; // Wrap to the first page
        }
        displayCards();
        updatePageTabStates();
      }

      // Function to handle left arrow click event
      function handleLeftArrowClick() {
        if (currentPage > 1) {
          currentPage--;
        } else {
          currentPage = totalPages;
        }
        displayCards();
        updatePageTabStates();
      }

      // Right arrow click event
      rightArrow.addEventListener("click", handleRightArrowClick);

      // Left arrow click event
      leftArrow.addEventListener("click", handleLeftArrowClick);

      // Function to update page tab states
      function updatePageTabStates() {
        // Remove the "active" class from all page tabs
        document.querySelectorAll(".page-tab").forEach((tab) => {
          tab.classList.remove("active");
        });
        // Add the "active" class to the currentPage tab
        document.querySelector(`#page-${currentPage}`).classList.add("active");
      }
    })
    .catch((error) => {
      console.error("Error loading project data:", error);
    });
});
*/