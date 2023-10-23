/** @format */
"use strict";

const answerBtn = document.querySelector(".poll");

const poll = {
  question: "What is your favourite programming language? ",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  numberOfVotes: new Array(4).fill(0),

  // Phương thức resister new answer
  registerNewAnswer: function () {
    let ans = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );
    // Kiểm tra kết quả nhập vào có phải số hợp lệ không
    while (!isFinite(ans) || ans < 0 || ans > 3) {
      alert("Câu trả lời không hợp lệ");
      ans = Number(
        prompt(
          `${this.question}\n${this.options.join("\n")}\n(Write option number)`
        )
      );
    }
    // Cập nhật giá trị mảng number of votes theo giá trị nhập vào
    this.numberOfVotes[ans]++;
  },

  // Phương thức display results
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.numberOfVotes);
    } else {
      console.log(`Poll results are ${this.numberOfVotes.join(", ")}`);
    }
  },
};

// sự kiện click vào nút answer poll
answerBtn.addEventListener("click", function () {
  poll.registerNewAnswer();
  poll.displayResults();
  poll.displayResults("string");
});

// Khai báo dữ liệu test
const ans1 = {
  numberOfVotes: [5, 2, 3],
};
const ans2 = {
  numberOfVotes: [1, 5, 3, 9, 6, 1],
};
// Gọi phương thức display results của đối tượng poll với this là ans1 và ans2
poll.displayResults.call(ans1);
poll.displayResults.call(ans1, "string");
poll.displayResults.call(ans2);
poll.displayResults.call(ans2, "string");
