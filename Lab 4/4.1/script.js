/** @format */
"use strict";

function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people and its capital city is ${capitalCity}`
  );
}
const country1 = "Viet Nam";
const country2 = "Korea";
const country3 = "Portugal";
const population1 = 90;
const population2 = 77;
const population3 = 10;
const capitalCity1 = "Ha Noi";
const capitalCity2 = "Seoul";
const capitalCity3 = "Lisbon";
describeCountry(country1, population1, capitalCity1);
describeCountry(country2, population2, capitalCity2);
describeCountry(country3, population3, capitalCity3);
