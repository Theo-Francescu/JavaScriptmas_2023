const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date(),
    currentYearDate = today.getFullYear(),
    christmasDay = new Date(currentYearDate, 11, 25);

  if (today > christmasDay) {
    christmasDay.setFullYear(currentYearDate + 1);
  }

  const countdown = christmasDay.getTime();
  const x = setInterval(() => {
    const now = new Date().getTime(),
      distance = countdown - now;

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    countdownDisplay.innerHTML = `
    <p>${days} days</p>
    <p>${hours} hours</p>
    <p>${minutes} minutes</p>
    <p>${seconds} seconds</p>`;

    // do something later when date is reached
    if (distance < 0) {
      document.getElementById("headline").innerText = "It's CHRISTMAS DAY!!!";
      clearInterval(x);
      renderCountdown(); // Restart the countdown for the next Christmas
    }
  }, 1000); 
}

renderCountdown();