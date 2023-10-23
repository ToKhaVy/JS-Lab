/** @format */

const country = "Viet Nam";
const continent = "Asian";
let population = 97;
console.log(country);
console.log(continent);
console.log(population);
const isIsland = false;
const language = "Vietnamese";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population / 2);
population = population + 1;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(description);

description = `${country} and its ${population} million people speak ${language}.`;
console.log(description);
