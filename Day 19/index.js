/* !!! If you want to make JS Confetti to work, you must install it in the terminal with npm packages */
/* import JSConfetti from "js-confetti"; */
const word = "santa";
const wordArr = word.split("");
const wordDisplay = document.getElementById("word-display");
const errorMsg = document.getElementById("error-message");

document.addEventListener("submit", handleGuess);

function renderSpaces() {
  const wordHtml = wordArr.map(() => {
    return `<span class="letter">-</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}
renderSpaces();

function renderGuess(arr) {
  const wordHtml = arr.map((letter) => {
    return `<span class="letter">${letter}</span>`;
  });
  wordDisplay.innerHTML = wordHtml.join("");
}

function handleGuess(e) {
  e.preventDefault();
  let currentState = [];
  let input = document.getElementById("user-input");
  let guess = input.value.toLowerCase();
  let guessArr = guess.split("");

  errorMsg.textContent = "";

  wordArr.forEach((letter) => {
    if (guessArr.includes(letter)) {
      currentState.push(letter);
    } else {
      currentState.push("-");
    }
  });

  if (guessArr.length !== 1 || !/[a-z]/.test(guess)) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Incorrect Answer!";
  }

  if (guessArr.length === 5 && guess === word) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "Correct Answer!";
  }

  renderGuess(currentState);
  checkWin(guess);
  input.value = "";
}

function checkWin(guess) {
  if (word === guess) {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ["🧑‍🎄", "🎅"],
      emojiSize: 50,
      confettiNumber: 60,
      confettiRadius: 6,
    });
    jsConfetti.addConfetti();
  }
}
