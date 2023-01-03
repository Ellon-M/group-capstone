import './style.css';
const meals = document.querySelector('.meals');

// const result =  fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
//   .then((res) => res.json())
//   .then((data) => console.log(data));


// .then((data) => console.log(data.meals[0].strMeal));

// console.log(result)
// const addNewUser = async (data) => {
//   meals.innerHTML += `<div class ="meal"> ${data} </div>`;
// };

async function get() {
  const respons = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
  const data = await respons.json();
 
  console.log(data.meals);
  data.meals.map( meal => console.log(meal.strMeal));

  meals.innerHTML +=
      data.meals.map( meal =>`
      <div class="meal">
        <img src="${meal.strMealThumb}" alt="">
        <h2>${meal.strMeal}</h2>
        <button class="btn-cmt">Comments</button>
      </div>`)
};

get();
