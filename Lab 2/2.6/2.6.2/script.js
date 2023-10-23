/** @format */

// LAB 2.6.2
// Dữ liệu 1: Mark nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m.
// Dữ liệu 2: Mark nặng 95 kg và cao 1.88 m. John nặng 85 kg và cao 1.76 m.
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${
      Math.round(markBMI * 100) / 100
    }) is higher than John's BMI (${Math.round(johnBMI * 100) / 100})`
  );
} else {
  console.log(
    `John's BMI (${
      Math.round(johnBMI * 100) / 100
    }) is higher than Mark's BMI (${Math.round(markBMI * 100) / 100})`
  );
}
