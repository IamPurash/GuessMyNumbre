let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };
  const guess = Number(document.querySelector(".guessValue").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent =
      "Enter number from 1 to 20";
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "You win!";

    displayMessage("You Win!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too high" : "Too low";
      displayMessage(guess > secretNumber ? "Too high" : "Too low");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "You loose!";

      displayMessage("You loose");
      document.querySelector(".score").textContent = "0";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }

  // these code of lines has been commented out because it violate the DRY principles

  //else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "You loose!";
  //       document.querySelector(".score").textContent = "0";
  //       document.querySelector("body").style.backgroundColor = "red";
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "Too Low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector("message").textContent = "You loose";
  //       document.querySelector(".score").textContent = "0";
  //       document.querySelector("body").style.backgroundColor = "red";
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "10";
  document.querySelector(".message").textContent = "Start Guessing......";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guessValue").value = "";
  document.querySelector(".score").textContent = score;
});
const modal = document.querySelector(".modal");
const Right = document.querySelector(".right");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

Right.addEventListener("click", function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
overlay.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
