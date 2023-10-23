/** @format */
"use strict";
const population1 = 1.441;
const population2 = 0.09;
const population3 = 0.077;
const country1 = "China";
const country2 = "Viet Nam";
const country3 = "Korea";
const percentageOfWorld3 = (population) => (population / 7.9) * 100;
console.log(
  `${country1} has ${population1} billion people, take ${percentageOfWorld3(
    population1
  ).toFixed(2)}% of world.`
);
console.log(
  `${country2} has ${population2} billion people, take ${percentageOfWorld3(
    population2
  ).toFixed(2)}% of world.`
);
console.log(
  `${country3} has ${population3} billion people, take ${percentageOfWorld3(
    population3
  ).toFixed(2)}% of world.`
);
