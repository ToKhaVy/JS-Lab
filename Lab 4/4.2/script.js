/** @format */
"use strict";

// Khai báo hàm
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
const percentOfCountry1 = percentageOfWorld1(population1);
const percentOfCountry2 = percentageOfWorld1(population2);
const percentOfCountry3 = percentageOfWorld1(population3);
console.log(
  `${country1} has ${population1} billion people, take ${percentOfCountry1.toFixed(
    2
  )}% of world.`
);
console.log(
  `${country2} has ${population2} billion people, take ${percentOfCountry2.toFixed(
    2
  )}% of world.`
);
console.log(
  `${country3} has ${population3} billion people, take ${percentOfCountry3.toFixed(
    2
  )}% of world.`
);

//
// Biểu thức hàm
const percentageOfWorld2 = function (population) {
  // const percent = (population / 7.9) * 100;
  // return percent;
  return (population / 7.9) * 100;
};
console.log(
  `${country1} has ${population1} billion people, take ${percentageOfWorld2(
    population1
  ).toFixed(2)}% of world.`
);
console.log(
  `${country2} has ${population2} billion people, take ${percentageOfWorld2(
    population2
  ).toFixed(2)}% of world.`
);
console.log(
  `${country3} has ${population3} billion people, take ${percentageOfWorld2(
    population3
  ).toFixed(2)}% of world.`
);
