/** @format */
"use strict";

const myCountry = {
  country: "Viet Nam",
  capital: "Ha Noi",
  language: "Vietnamese",
  population: 90,
  neighbours: ["Laos", "Cambodia", "Thailand", "China"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital} `
);

myCountry.population = myCountry.population + 2;
console.log(myCountry);
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry);
