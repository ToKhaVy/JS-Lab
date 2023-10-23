/** @format */
"use strict";

const myCountry = {
  country: "Viet Nam",
  capital: "Ha Noi",
  language: "Vietnamese",
  population: 90,
  neighbours: ["Laos", "Cambodia", "Thailand", "China"],

  describe() {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}`
    );
  },

  checkIsland() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    //myCountry.isIsland = !Boolean(myCountry.neighbours.length);
  },
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
