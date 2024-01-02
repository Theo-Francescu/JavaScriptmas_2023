document.addEventListener("DOMContentLoaded", function () {
  const lights = document.querySelectorAll(".lights");
  const section = document.querySelector("section");

  let isRedOn = true;

  setInterval(function () {
    section.classList.toggle("lights-on");

    lights.forEach((light) => {
      if (light.classList.contains("red") && isRedOn) {
        light.classList.toggle("lights-on");
      } else if (light.classList.contains("blue") && !isRedOn) {
        light.classList.toggle("lights-on");
      }
    });

    isRedOn = !isRedOn;
  }, 800);
});
