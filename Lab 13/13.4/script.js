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

class EVCl extends CarCl {
  // private
  #charge;
  constructor(make, speed, charge) {
    super(make, speed); // gọi constructor của class cha bằng super()
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }

  get getCharge() {
    return this.#charge;
  }
}

const rivian = new EVCl("Rivian", 120, 23);

rivian.accelerate();
rivian.chargeBattery(90);
rivian.brake();
rivian.accelerate();
