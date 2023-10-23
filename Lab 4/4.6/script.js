/** @format */
"use strict";

// Khai bao mang neighbours
const neighbours = ["Laos", "Cambodia", "Thailand", "China"];
console.log(neighbours);

// Them vao Utopia
neighbours.push("Utopia");
console.log(neighbours);

// Xoa bo Utopia
neighbours.pop();
console.log(neighbours);

// Kiem tra Germany
neighbours.includes("Germany")
  ? console.log("It has Germany")
  : console.log("Probably not a central European country :D");

// Thay doi 1 nuoc lang gieng
const index = neighbours.indexOf("China");
neighbours.splice(index, 1, "People's Repulic of China");
console.log(neighbours);
