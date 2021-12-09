// JavaScript Document
// De menuknop aanroepen
var deButton = document.querySelector("nav button:first-of-type");

// Als je op de menuknop klikt...
deButton.addEventListener("click", toggleMenu);

// ...wordt de class .toonMenu geactiveerd
function toggleMenu(event) {
  deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}