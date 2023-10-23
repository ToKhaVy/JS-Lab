"use strict";

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUs() {
    return this.speed / 1.6;
  }

  set speedUs(speed1) {
    this.speed = speed1 * 1.6;
  }

  accelerate() {
    this.speed += 10;
    console.log(
      `Tốc độ mới ${this.make} sau khi tăng 10km/h là: ${this.speed}`
    );
  }

  brake() {
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi giảm 5km/h là: ${this.speed}`);
  }
}

console.log("Dữ liệu 1: BMW đi với 120km/h ==>");
const data1 = new CarCl("BMW", 120);
data1.accelerate();
data1.brake();
data1.accelerate();
console.log(data1.speedUs);
data1.speedUs = 100;
console.log(data1);

console.log("Dữ liệu 2: Mercedes đi với 95km/h ==>");
const data2 = new CarCl("Mercedes", 95);
data2.accelerate();
data2.brake();
data2.accelerate();
console.log(data2.speedUs);
data2.speedUs = 100;
console.log(data2);
