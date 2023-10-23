/** @format */
"use strict";
// let numNeighbours = prompt(
//   "How many neighbor countries does your country have?"
// );
// dung dau ==
// if (numNeighbours == 1) {
//   console.log(`Only 1 border`);
// } else if (numNeighbours > 1) {
//   console.log(`More than 1 border`);
// } else {
//   console.log(`No borders`);
// }

//   dung dau ===
let numNeighbours = Number(
  prompt("How many neighbor countries does your country have?")
);
if (numNeighbours === 1) {
  console.log(`Only 1 border`);
} else if (numNeighbours > 1) {
  console.log(`More than 1 border`);
} else {
  console.log(`No borders`);
}
// 6. Giá trị nhận vào từ lệnh prompt là dạng string khi so sánh === với 1 là dạng number thì giá trị trả về là false.
// 7. Khi chuyển giá trị của numNeighbours về dạng số thì phép so sánh === trả về giá trị true.
// 8. Sử dụng toán tử === và chuyển đổi kiểu trong trường hợp này để hạn chế các lỗi có thể xảy ra trong khi run code khi so sánh hai giá trị thuộc hai kiểu dữ liệu khác nhau.
