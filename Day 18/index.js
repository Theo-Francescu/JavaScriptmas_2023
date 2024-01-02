import OpenAI from "openai";
import { process } from "./env.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const dialogModal = document.getElementById("dialog-modal");
dialogModal.show();

document.addEventListener("submit", function (e) {
  e.preventDefault();
  const imageDescription = document.getElementById("user-input").value;
  dialogModal.close();
  generateImage(imageDescription);
});

async function generateImage(imageToGenerate) {
  const response = await openai.images.generate({
    model: "dall-e-2",
    prompt: imageToGenerate,
    size: "256x256",
  });
  generateAltText(response.data[0].url);
}

async function generateAltText(imageUrl) {
  const messages = [
    {
      role: "system",
      content:
        "You are a helpful assistant in generating Christmas greeting messages.",
    },
    {
      role: "user",
      content:
        "Generate please a short Christmas greeting message. The message should contain maximum 5 words.",
    },
  ];

  const altTextResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
    temperature: 1.2,
  });

  const altText = altTextResponse.choices[0].message.content;

  renderImage(imageUrl, altText);
}

function renderImage(imageUrl, altText) {
  console.log(altText);
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = "";
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altText;
  imageContainer.appendChild(image);
}