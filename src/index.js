import counter from './Modules/counter.js';
import './style.css';
import Popup from './Modules/popup.js';

const mealsSec = document.querySelector('.meals');
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R8PkkxCkNQPQdCTMeNzH/likes/';

// display Meals
const displayMeal = (data) => {
  mealsSec.innerHTML
  += data.meals.map((meal) => `
  <div class="meal">
    <img src="${meal.strMealThumb}" alt="">
    <h2>${meal.strMeal}</h2>
    <div class="likes">
      <button class="btn-like" id="${meal.idMeal}">Like</button>
      <p class="likes-count" id="${meal.idMeal}"></>
    </div>
    <button class="btn-cmt" id="${meal.idMeal}">Comments</button>
    
  </div>`);
};

// Fetch the mealdb Api
const get = async () => {
  const respons = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
  const data = await respons.json();
  displayMeal(data);
};

get();

// get the comments Id
document.addEventListener('click', (e) => {
  if (e.target.className === 'btn-cmt') {
    const mealId = e.target.id;
    const popup = new Popup(mealId);
    popup.initEvents();
  }
});

// Poste request likes
const postReqLikes = async (id) => {
  const postRequest = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  };
  await fetch(url, postRequest).then((res) => res.json());
};

// display likes

const displayLikes = (data) => {
  const likeCount = document.querySelectorAll('.likes-count');
  likeCount.forEach((element) => {
    data.forEach((resp) => {
      if (element.id === resp.item_id) {
        element.textContent = `${resp.likes} likes`;
      }
    });
  });
};

document.addEventListener('click', async (e) => {
  e.preventDefault();
  if (e.target.className === 'btn-like') {
    const { id } = e.target;
    postReqLikes(id);
  }
  await fetch(url).then((res) => res.json()).then((data) => displayLikes(data));
});

window.addEventListener('load', () => {
  fetch(url).then((res) => res.json()).then((data) => displayLikes(data));
});

document.addEventListener('click', () => {
  fetch(url).then((res) => res.json()).then((data) => displayLikes(data));
});

// Show the number of items in the page.
  window.addEventListener('load', () => {
    mealsSec.lastChild.innerHTML += `<div> Pages 1 : ${counter()} Items.</div>`; 
  });
