"use strict";
const imgContain = document.querySelector(".images");
//////////////////////////////////////////
// Hàm wait này trả về 1 promise và gọi hàm resolve sau số giây đưa vào

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

//////////////////////////////////////////
//

function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const imgEl = document.createElement("img");
    imgEl.src = imgPath;

    // bắt sự kiện load ảnh
    imgEl.addEventListener("load", function () {
      // load xong thì thêm imgEl vào
      imgContain.appendChild(imgEl);
      // gọi hàm resolve khi thành công
      resolve(imgEl);
    });

    imgEl.addEventListener("error", function () {
      // gọi hàm reject khi gặp lỗi
      reject(new Error("Something wrong!💥💥💥"));
    });
  });
}

//
//

let currentImg;

createImage("../img/img-1.jpg")
  // imgEl trả về từ resolve
  .then((imgEl) => {
    currentImg = imgEl;
    console.log("img 1");
    return wait(2);
  })
  .then(() => {
    // ẩn ảnh 1 đi
    currentImg.style.display = "none";
    // tạo và hiển thị ảnh số 2
    return createImage("../img/img-2.jpg");
  })
  .then((imgEl) => {
    currentImg = imgEl;
    console.log("img 2");
    return wait(2);
  })
  .then(() => {
    // sau 2 giây cũng ẩn đi ảnh số 2
    currentImg.style.display = "none";
  })
  // bắt lỗi
  .catch((err) => console.log(err));
