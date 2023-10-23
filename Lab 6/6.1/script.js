/** @format */
"use strict";

const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let finalString = `...${arr[0]}°C in 1 day`;
  for (let i = 1; i < arr.length; i++) {
    finalString += `...${arr[i]}°C in ${i + 1} days`;
  }
  console.log(`${finalString}...`);
};

printForecast(arr1);
printForecast(arr2);
