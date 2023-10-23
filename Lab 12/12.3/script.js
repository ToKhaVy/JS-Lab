/** @format */
"use strict";

console.log("Lab 12.3 ==>");

const calcAverageHumanAge = (dogAge) =>
  (
    dogAge
      .map((ele) => (ele <= 2 ? 2 * ele : 16 + ele * 4)) // tính tuổi theo công thức
      .filter((ele) => ele > 18) // lọc những chú chó tuổi trên 18
      .reduce((preAge, curAge) => preAge + curAge) /
    dogAge
      .map((ele) => (ele <= 2 ? 2 * ele : 16 + ele * 4))
      .filter((ele) => ele > 18).length
  ) //
    .toFixed(2);

const dogAge = [5, 2, 4, 1, 15, 8, 3];

console.log(calcAverageHumanAge(dogAge));
dogAge.splice(0, dogAge.length, 16, 6, 10, 5, 6, 1, 4);
console.log(dogAge);
console.log(calcAverageHumanAge(dogAge));
