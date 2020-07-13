// Add your custom javascript here
console.log("Hi from Federalist");

// stickyfill js
// Grab list elements that have the sticky class attributed to them on the page
var elements = document.querySelectorAll('.sticky');

// Optional but makes use of this js in browsers that may have the css position: sticky; enabled
Stickyfill.forceSticky()

// Makes element sticky
Stickyfill.add(elements);

