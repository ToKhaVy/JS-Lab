/** @format */
"use strict";

const dol1 = Number(prompt("Dolphins's 1st score: "));
const dol2 = Number(prompt("Dolphins's 2nd score: "));
const dol3 = Number(prompt("Dolphins's 3rd score: "));
const koa1 = Number(prompt("Koalas's 1st score: "));
const koa2 = Number(prompt("Koalas's 2nd score: "));
const koa3 = Number(prompt("Koalas's 3rd score: "));

const dol_Average = (dol1 + dol2 + dol3) / 3;
const koa_Average = (koa1 + koa2 + koa3) / 3;
console.log(dol_Average);
console.log(koa_Average);

if (dol_Average < 100 && koa_Average < 100) {
  console.log("No one wins!");
} else if (dol_Average === koa_Average) {
  console.log("Both win the trophy!");
} else if (dol_Average > koa_Average) {
  console.log("Dolphins wins!");
} else {
  console.log("Koalas wins!");
}
