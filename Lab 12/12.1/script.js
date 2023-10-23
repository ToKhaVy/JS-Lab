/** @format */
"use strict";

console.log("Lab 12.1 ==>");
function checkDogs(dogJulia, dogKate) {
  // Tạo bản sao của mảng dogJulia
  const copyDogJulia = dogJulia.slice(1, dogJulia.length - 1);
  console.log(copyDogJulia);

  // Tạo array dữ liệu của Julia (đã sửa) và Kate
  const dogData = [...copyDogJulia, ...dogKate];
  console.log(dogData);

  // In ra console chó trưởng thành và chó con
  dogData.forEach((ele, index) =>
    ele >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${ele} years old`
        )
      : console.log(`Dog number ${index + 1} is still puppy`)
  );
}

const dogJulia = [3, 5, 2, 12, 7];
const dogKate = [4, 1, 15, 8, 3];
checkDogs(dogJulia, dogKate);
dogJulia.splice(0, dogJulia.length, 9, 16, 6, 8, 3);
dogKate.splice(0, dogKate.length, 10, 5, 6, 1, 4);
checkDogs(dogJulia, dogKate);
