/*
    File: hw1.js
    Name: Demi Banjoko
    Date Created: 09-10-2025
    Date Last Edited: 09-26-2025
    Version: 1.0
    Purpose: MIS 3371 Homework 1 JS Patient Form 
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("feel");
let output = document.getElementById("feel-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};