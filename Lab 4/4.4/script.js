/** @format */
"use strict";

const population1 = 1.441;
const population2 = 0.09;
const population3 = 0.077;
const country1 = "China";
const country2 = "Viet Nam";
const country3 = "Korea";
function percentageOfWorld1(population) {
  // const percent = (population / 7.9) * 100;
  // return percent;
  return (population / 7.9) * 100;
}
function describePopulation(country, population) {
  const percent = percentageOfWorld1(population);
  console.log(
    `${country} has ${
      population * 1000
    } million people, which is about ${percent.toFixed(2)}% of the world.`
  );
}

describePopulation(country1, population1);
describePopulation(country2, population2);
describePopulation(country3, population3);
