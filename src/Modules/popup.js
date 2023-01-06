import { setComment, getComments } from './comments.js';
import commentsCounter from './commentsCounter.js';

export default class Popup {
  constructor(id) {
    this.id = id;
    this.meals = document.querySelector('.meals');
    this.new_app = 'cjyAZrT5FmLTc23d82ob';
  }

  initEvents = async () => {
    await this.display();
    const commentBtn = document.querySelector('#comment-btn');
    const name = document.querySelector('#name');
    const comment = document.querySelector('#comment');
    const fetchedComments = document.querySelector('.fetched-comments-list');
    const commentsTitle = document.querySelector('.fetched-comments-heading');
    const message = document.querySelector('.no-comments-message');
    commentBtn.addEventListener('click', () => {
      this.setComment(this.id, name.value, comment.value);
      if (message) {
        fetchedComments.removeChild(message);
        message.remove();
      }
      fetchedComments.innerHTML += `<li class="fetched-comment"><span id="comment-name">${name.value}:</span> <span>${comment.value}</span></li>`;
      const commentsArray = [...fetchedComments.querySelectorAll('li')];
      commentsTitle.innerText = `Comments (${commentsCounter(commentsArray)})`;
      name.value = '';
      comment.value = '';
    });
  }

  display = async () => {
    // api request
    const meal = await this.getMealData(this.id);
    const comments = await this.getComments(this.id);

    // elements
    const popupWindow = document.createElement('section');
    const closeContainer = document.createElement('div');
    const closePopup = document.createElement('img');
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
    const commentBtn = document.createElement('input');
    const fetchedCommentsTitle = document.createElement('h4');
    const commentsList = document.createElement('div');
    const fetchedComments = document.createElement('ul');

    // attributes
    popupWindow.className = 'popup';
    closeContainer.className = 'close-container';
    closePopup.className = 'close';
    closePopup.src = 'https://img.icons8.com/ios/30/null/delete-sign--v1.png';
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
    name.id = 'name';
    name.type = 'text';
    name.name = 'name';
    name.placeholder = 'Your name:';
    comment.id = 'comment';
    comment.placeholder = 'Your insights:';
    commentBtn.type = 'submit';
    commentBtn.id = 'comment-btn';
    commentBtn.innerText = 'Comment';
    fetchedCommentsTitle.className = 'fetched-comments-heading';
    commentsList.className = 'comments-list';
    fetchedComments.className = 'fetched-comments-list';
    if (comments.length > 0) {
      comments.forEach((comment) => {
        fetchedComments.innerHTML += `<li class="fetched-comment"><span id="comment-name">${comment.username}:</span> <span>${comment.comment}</span></li>`;
      });
      const commentsArray = [...fetchedComments.querySelectorAll('li')];
      fetchedCommentsTitle.innerText = `Comments (${commentsCounter(commentsArray)})`;
    } else {
      fetchedComments.innerHTML += '<span class="no-comments-message">No comments yet</span>';
    }

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
    commentsSection.appendChild(fetchedCommentsTitle);
    commentsList.appendChild(fetchedComments);
    commentsSection.appendChild(commentsList);
    closeContainer.appendChild(closePopup);
    popupWindow.appendChild(closeContainer);
    popupWindow.appendChild(mealSection);
    popupWindow.appendChild(commentsSection);
    this.meals.append(popupWindow);
    document.body.style.overflowY = 'hidden';
    document.body.style.background = 'rgba(0,0,0,0.1)';

    // events
    commentForm.addEventListener('submit', (e) => {
      e.preventDefault();
    });

    closePopup.addEventListener('click', () => {
      popupWindow.remove();
      document.body.style.overflowY = 'scroll';
      document.body.style.background = '#fff';
    });
  }

  getMealData = async (id) => {
    // get by id from home page
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const mealData = await res.json();
    const meal = mealData.meals[0];
    return meal;
  }

  getComments = async (id) => {
    const comments = await getComments(this.new_app, Number(id));
    return comments;
  }

  setComment = async (id, nameValue, commentValue) => {
    await setComment(this.new_app, id, nameValue, commentValue);
  }

  getCommentCount = () => commentsCounter();
}