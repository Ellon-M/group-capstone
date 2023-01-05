import { setComment, getComments } from './comments.js';
import commentsCounter from './commentsCounter.js';

export default class Popup {
  constructor() {
    this.main = document.querySelector('main');
    this.new_app = 'cjyAZrT5FmLTc23d82ob';
    this.initEvents();
    this.name = document.querySelector('#name');
    this.comment = document.querySelector('#comment');
    this.commentBtn = document.querySelector('#comment-btn');
  }

  initEvents() {
    // to be on-click comments on home page
    document.addEventListener('DOMContentLoaded', () => {
      this.display();
    });

    // on submit comments
    this.commentBtn.addEventListener('click', () => {
      this.setComment();
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
    const commentTitle = document.createElement('h4');
    const commentForm = document.createElement('form');
    const name = document.createElement('input');
    const comment = document.createElement('textarea');
    const commentBtn = document.createElement('button');
    const fetchedCommentsTitle = document.createElement('h4');
    const commentsList = document.createElement('div');
    const fetchedComments = document.createElement('ul');
    const fetchedComment = document.createElement('li');

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
    commentTitle.class = 'comment-heading';
    commentTitle.innerText = 'Add a comment';
    commentForm.id = 'comment-form';
    commentForm.onsubmit = 'return false;';
    name.id = 'name';
    name.type = 'text';
    name.name = 'name';
    name.placeholder = 'Your name:';
    comment.id = 'comment';
    comment.placeholder = 'Your insights:';
    commentBtn.id = 'comment-btn';
    commentBtn.innerText = 'Comment';
    fetchedCommentsTitle.className = 'fetched-comments-heading';
    commentsList.className = 'comments-list';
    fetchedComments.className = 'fetched-comments-list';
    fetchedComment.className = 'fetched-comment';

    // DOM structure
    mealSection.appendChild(mealImage);
    mealSection.appendChild(mealName);
    mealSection.appendChild(instructionsTitle);
    mealSection.appendChild(mealInstructions);
    commentForm.appendChild(name);
    commentForm.appendChild(comment);
    commentForm.appendChild(commentBtn);
    commentsSection.appendChild(commentTitle);
    commentsSection.appendChild(commentForm);
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

  getComments(id) {
    const comments = getComments(this.new_app, id);
    return comments;
  }

  setComment(id, nameValue, commentValue) {
    setComment(this.new_app, id, nameValue, commentValue);
  }

  getCommentCount = () => commentsCounter();
}