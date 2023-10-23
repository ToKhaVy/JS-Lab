/** @format */
"use strict";

console.log("Lab 12.2 ==>");
function calcAverageHumanAge(dogAge) {
  // Tạo mảng humanAgeArr bằng phương thức map
  const humanAge = dogAge.map((ele) => (ele <= 2 ? 2 * ele : 16 + ele * 4));
  // console.log(humanAge);
  // Tạo mảng newHumanAge chứa các giá trị trên 18 tuổi bằng phương thức filter
  const newHumanAge = humanAge.filter((ele) => ele > 18);
  // console.log(newHumanAge);
  // Tính trung bình bằng phương thức reduce
  return (
    newHumanAge.reduce((preAge, curAge) => preAge + curAge) / newHumanAge.length
  ).toFixed(2);
}

const dogAge = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(dogAge));
dogAge.splice(0, dogAge.length, 16, 6, 10, 5, 6, 1, 4);
console.log(dogAge);
console.log(calcAverageHumanAge(dogAge));
