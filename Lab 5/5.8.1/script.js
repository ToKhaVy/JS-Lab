/** @format */
"use strict";

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(`${mark.calcBMI()}`);
console.log(`${john.calcBMI()}`);
mark.BMI < john.BMI
  ? console.log(
      `${mark.fullName}'s BMI (${mark.calcBMI().toFixed(1)}) is higher than ${
        john.fullName
      }'s (${john.calcBMI().toFixed(1)})`
    )
  : console.log(
      `${john.fullName}'s BMI (${john.calcBMI().toFixed(1)}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI().toFixed(1)})`
    );
