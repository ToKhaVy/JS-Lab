"use strict";
function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Tốc độ mới sau khi tăng 10km/h là: ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`Tốc độ mới sau khi giảm 5km/h là: ${this.speed}`);
};

console.log("Dữ liệu 1: BMW đi với 120km/h ==>");
const data1 = new Car("BMW", 120);
data1.accelerate();
data1.brake();
data1.accelerate();
data1.brake();

console.log("Dữ liệu 2: Mercedes đi với 95km/h ==>");
const data2 = new Car("Mercedes", 95);
data2.accelerate();
data2.brake();
data2.accelerate();
data2.brake();

console.log(data1);
console.log(data2);
