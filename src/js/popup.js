export default class Popup {
  constructor() {
    this.main = document.querySelector('main');
    this.initEvents();
  }

  initEvents() {
    document.addEventListener('DOMContentLoaded', () => {
      this.display();
    });
  }

  display = async () => {
    // api request
    const meal = await this.getMealData();

    // elements
    const popupWindow = document.createElement('section');
    const mealSection = document.createElement('div');
    const commentsSection = document.createElement('div');
    const mealImage = document.createElement('div');
    const mealName = document.createElement('h3');
    const instructionsTitle = document.createElement('h4');
    const mealInstructions = document.createElement('p');

    // attributes
    popupWindow.className = 'popup';
    mealSection.className = 'meal-info';
    commentsSection.className = 'comments';
    mealImage.className = 'meal-img';
    mealImage.style.backgroundImage = `url(${meal.strMealThumb})`;
    mealName.className = 'meal-name';
    mealName.innerText = meal.strMeal;
    instructionsTitle.className = 'instructions-heading';
    instructionsTitle.innerText = 'Instructions';
    mealInstructions.className = 'meal-instructions';
    mealInstructions.innerText = meal.strInstructions;

    // DOM structure
    mealSection.appendChild(mealImage);
    mealSection.appendChild(mealName);
    mealSection.appendChild(instructionsTitle);
    mealSection.appendChild(mealInstructions);
    popupWindow.appendChild(mealSection);
    popupWindow.appendChild(commentsSection);
    this.main.append(popupWindow);
  }

  getMealData = async () => {
    // get by id from home page
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772');
    const mealData = await res.json();
    const meal = mealData.meals[0];
    return meal;
  }
}