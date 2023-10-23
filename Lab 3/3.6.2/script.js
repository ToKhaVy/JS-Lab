/** @format */
"use strict";

const bill = Number(prompt("How much is it"));
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`
);
