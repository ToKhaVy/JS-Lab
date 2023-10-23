/** @format */
"use strict";
let language0 = prompt("What is language?");
const language = language0.charAt(0).toUpperCase() + language0.slice(1);
console.log(language);
switch (language) {
  case "Chinese":
    console.log(`${language}: 'MOST number of native speakers!'`);
    break;
  case "Mandarin":
    console.log(`${language}: 'MOST number of native speakers!'`);
    break;
  case "Spanish":
    console.log(`${language}: '2nd place in number of native speakers'`);
    break;
  case "English":
    console.log(`${language}: '3rd place'`);
    break;
  case "Hindi":
    console.log(`${language}: 'Number 4'`);
    break;
  case "Arabic":
    console.log(`${language}: '5th most spoken language'`);
    break;
  case "Vietnamese":
    console.log(`${language}: 'The best of language :p'`);
    break;
  default:
    console.log(`${language}: 'Great language too :D'`);
}
