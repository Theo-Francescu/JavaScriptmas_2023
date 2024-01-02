import OpenAI from "openai";
import { process } from "./env.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const dialogModal = document.getElementById('dialog-modal');
const imageContainer = document.getElementById('image-container');
const userInput = document.getElementById('user-input');

// show dialog on load
dialogModal.show() 

// Add an event listener for the form submission
dialogModal.addEventListener('submit', async function (event) {
  event.preventDefault();
  dialogModal.close();

  // Get the user input from the textarea
  const description = userInput.value;

  // Call the function to generate an image based on the description
  generateImage(description);
});

// Function to generate an image based on the description using an AI model
async function generateImage(prompt) {
  const response = await openai.images.generate({
    model: 'dall-e-2', 
    prompt: prompt, 
    n: 1, 
    size: '256x256', 
    response_format: 'b64_json' 
})
console.log(response)
imageContainer.innerHTML = `<img src="data:image/png;base64,${response.data[0].b64_json}">`
}

imageContainer.addEventListener('click', function () {
  dialogModal.show();
});