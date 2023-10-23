/** @format */
"use strict";
// let numNeighbors = prompt(
//   "How many neighbor countries does your country have?"
// );
// dung dau ==
// if (numNeighbors == 1) {
//   console.log(`Only 1 bor`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

//   dung dau ===
// let numNeighbors = Number(
//   prompt("How many neighbor countries does your country have?")
// );
// if (numNeighbors === 1) {
//   console.log(`Only 1 bor`);
// } else if (numNeighbors > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

let country = prompt("What is this country: ");
let language = prompt("What is language in this country?");
let population = Number(prompt("How many people in this country (million)?"));
let is_An_Island = prompt("Is this country an island? Y / N");

if (language === "English" && population < 50 && is_An_Island === "N") {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
