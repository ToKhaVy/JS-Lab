/** @format */
"use strict";
const dol1 = Number(prompt("Dolphins's 1st score:"));
const dol2 = Number(prompt("Dolphins's 2nd score:"));
const dol3 = Number(prompt("Dolphins's 3rd score:"));
const koa1 = Number(prompt("Koalas's 1st score:"));
const koa2 = Number(prompt("Koalas's 2nd score:"));
const koa3 = Number(prompt("Koalas's 3rd score:"));
const calcAverage = (a, b, c) => (a + b + c) / 3;
const avgDolphins = calcAverage(dol1, dol2, dol3);
const avgKoalas = calcAverage(koa1, koa2, koa3);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No one wins!");
  }
};
console.log(avgDolphins);
console.log(avgKoalas);
checkWinner(avgDolphins, avgKoalas);
// Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
// Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.
