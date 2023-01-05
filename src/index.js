import { constant } from 'lodash';
import './style.css';
const mealsSec = document.querySelector('.meals');
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/R8PkkxCkNQPQdCTMeNzH/likes/';

// display Meals
const displayMeal = (data) => {
  mealsSec.innerHTML +=
  data.meals.map( meal =>`
  <div class="meal">
    <img src="${meal.strMealThumb}" alt="">
    <h2>${meal.strMeal}</h2>
    <div class="likes">
      <button class="btn-like" id="${meal.idMeal}">Like</button>
      <p class="likes-count" id="${meal.idMeal}"></>
    </div>
    <button class="btn-cmt" id="${meal.idMeal}">Comments</button>
    
  </div>`)
}

// Fetch the mealdb Api 
const  get = async () => {
  const respons = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
  const data = await respons.json();
  displayMeal(data);
};

get();

document.addEventListener('click', (e) => {
  if(e.target.className === 'btn-cmt'){
    const mealId = e.target.id;
  }
})

// likes
document.addEventListener('click', async (e) => {
  if(e.target.className === 'btn-like'){
    // e.preventDefault();
    const item = {
      item_id: e.target.id,
    };

    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    };
  
    await fetch(url, postRequest).then((res) => res.json());
    window.location.reload();
  }
  
});

fetch(url).then((res) => res.json()).then((data) => displayLikes(data));

const displayLikes = (data) => {
  //  data.forEach((resp) => {console.log(resp.item_id)} );
  const likeCount = document.querySelectorAll('.likes-count');
  likeCount.forEach(element => {
    data.forEach((resp) => {
      if(element.id === resp.item_id  ){
        element.textContent = resp.likes + ' likes'
      }
    });
  })
}
