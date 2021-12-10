// JavaScript Document
// De menuknop aanroepen
var deButton = document.querySelector("nav button:first-of-type");
var deNav = document.querySelector("nav");

// Als je op de menuknop klikt... 
deButton.addEventListener("click", toggleMenu);

// ...wordt de class .toonMenu geactiveerd
// deNav is een variabele en is de parent van de button
// Zaid's uitleg: node is element, voeg deze class aan de parent van de button
function toggleMenu(event) {
  //deNav = event.target.parentNode;
  deNav.classList.toggle("toonMenu");
}