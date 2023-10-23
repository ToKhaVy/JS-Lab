/** @format */
"use strict";

const populations = [1.441, 0.09, 0.077, 0.01];
console.log(populations);
// console.log(typeof populations.length);
console.log(populations.length);
populations.length === 4 ? console.log("true") : console.log("false");
function percentageOfWorld1(population) {
  // const percent = (population / 7.9) * 100;
  // return percent;
  return (population / 7.9) * 100;
}
const percentages = [
  percentageOfWorld1(populations[0]).toFixed(2),
  percentageOfWorld1(populations[1]).toFixed(2),
  percentageOfWorld1(populations[2]).toFixed(2),
  percentageOfWorld1(populations[3]).toFixed(2),
];

console.log(percentages);
