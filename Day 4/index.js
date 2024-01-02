import OpenAI from "openai";
import { process } from "./env.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const messages = [
  {
    role: "system",
    content:
      "You are a very helpful assistant.",
  },
  {
    role: "user",
    content: "Generate a Christmas Joke by randomly. The jokes should include maximum 33 words."
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: messages,
});

const windowContainer = document.getElementById("window-container");
const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");
const jokeDisplay = document.querySelector(".joke-display");

windowContainer.addEventListener("click", function () {
    leftDoor.style.animation = "left-open 0.3s forwards";
    rightDoor.style.animation = "right-open 0.3s forwards";
    jokeDisplay.style.animation = "display-joke 0.3s forwards";
    jokeDisplay.textContent = response.choices[0].message.content;
});

jokeDisplay.addEventListener("click", function () {
  setTimeout(() => {
    location.reload();
}, 8000);
});