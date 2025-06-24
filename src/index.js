import getHome from "./home";
import getContactUs from "./contact";
import getMenu from "./menu";
import "./style.css";

// Buttons
const homeButton = document.getElementById("home");
const contactButton = document.getElementById("contact");
const menuButton = document.getElementById("menu");

// Link array
const links = [homeButton, contactButton, menuButton];

// Main content area
const main = document.querySelector(".main");

const switchPage = (e) => {
  e.preventDefault();
  const selection = e.target.id;

  // Clear main content
  main.innerHTML = "";

  // Remove 'tab' class from all buttons
  links.forEach((btn) => btn.classList.remove("tab"));

  // Add active class and load selected content
  switch (selection) {
    case "home":
      homeButton.classList.add("tab");
      main.appendChild(getHome());
      break;
    case "contact":
      contactButton.classList.add("tab");
      main.appendChild(getContactUs());
      break;
    case "menu":
      menuButton.classList.add("tab");
      main.appendChild(getMenu());
      break;
  }
};

// Add click listeners
links.forEach((element) => {
  element.addEventListener("click", switchPage);
});

// Initial load
main.appendChild(getHome());
homeButton.classList.add("tab");
