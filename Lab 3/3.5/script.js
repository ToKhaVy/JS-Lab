/** @format */
"use strict";
const country = prompt("What is this country?");
const population = Number(prompt("How many people in this country?"));
population < 33
  ? console.log(`${country}'s population is below average`)
  : console.log(`${country}'s population is above average`);
