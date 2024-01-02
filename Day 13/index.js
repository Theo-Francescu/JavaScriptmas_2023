document.getElementById("btn").addEventListener('click', () => {
    // Get the number of guests
    const numGuests = parseInt(document.getElementById('num-input').value);
  
    // Check if the meal should be vegetarian
    const isVegetarian = document.getElementById('vegetarian-input').checked;
  
    // Determine the ideal Christmas dinner based on the criteria
    let idealDinner = '';
  
        if (isVegetarian) {
          idealDinner = 'Vegetarian Winter Squash Risotto';
          displayRecipe('Vegetarian Winter Squash Risotto Recipe');
        } else {
          if (numGuests <= 4) {
            idealDinner = 'Ham';
            displayRecipe('Ham Recipe');
          } else if (numGuests >= 5 && numGuests <= 10) {
            idealDinner = 'Turkey';
            displayRecipe('Turkey Recipe');
          } else {
            idealDinner = 'Prime Rib';
            displayRecipe('Prime Rib Recipe');
          }
        }
  
    // Display the result
    document.getElementById('food').textContent = idealDinner;
  })
  
  function displayRecipe(recipeText) {
    const recipeElement = document.getElementById('recipe-text');
    recipeElement.textContent = recipeText;
  
    const recipeDiv = document.getElementById('recipe');
    recipeDiv.style.display = 'block';
  }