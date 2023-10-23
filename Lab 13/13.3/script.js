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

const EV = function (make, speed, charge) {
  // Kế thừa class Car với this là this của EV
  Car.call(this, make, speed);
  // Thêm thuộc tính charge
  this.charge = charge;
};

// Kế thừa prototype của clas Car
EV.prototype = Object.create(Car.prototype);

// Tạo phương thức mới
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

// ghi đè phương thức accelerate
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

console.log("test kế thừa");
console.dir(EV);

const ev = new EV("Tesla", 120, 23);

ev.accelerate();
ev.chargeBattery(90);
console.log(`mức pin sau khi sạc: ${ev.charge}%`);
ev.accelerate();
ev.brake();
