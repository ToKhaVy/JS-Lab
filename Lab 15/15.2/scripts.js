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

//////////////////////////////////////////
//
async function loadNPause() {
  try {
    const imgEl1 = await createImage("../img/img-1.jpg");

    await wait(2);
    imgEl1.style.display = "none";

    const imgEl2 = await createImage("../img/img-2.jpg");

    await wait(2);
    imgEl2.style.display = "none";
  } catch {
    (err) => console.log(err);
  }
}
// loadNPause();

// chọn slow 3G để thấy được rõ hơn
//////////////////////////////////////////
// hàm này chạy đồng thời nhiều promise thông qua phương thức Promise.all
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch {}
};
loadAll(["../img/img-1.jpg", "../img/img-2.jpg", "../img/img-3.jpg"]);
