const foodURL = 'http://www.recipepuppy.com/api/?i=&q=&p=3';
const foodAPI = 'http://www.recipepuppy.com/api/';
const proxy = 'https://noroffcors.herokuapp.com/';
const selector = document.querySelector('#ingredientSelector');
const searchBtn = document.querySelector('#searchBtn');
const ingredients = document.querySelector('#ingredients');
const dish = document.querySelector('#dish');
const foodDiv = document.querySelector('.foodDiv');

selector.onchange = function () {
  console.log(selector.value);
};

const fullAPI = proxy + foodAPI;
searchBtn.onclick = function (search) {
  search.preventDefault();
  const searchTerm = `${proxy}http://www.recipepuppy.com/api/?i=${ingredients.value}&q=${dish.value}&p=${selector.value}`;
  console.log(searchTerm);
  foodDiv.innerHTML = '';
  async function getFoodAPI(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      const resultArray = result.results;
      resultArray.forEach((element) => {
        console.log(element.title);
        foodDiv.innerHTML += `
        <div class="foodDiv__dish">
            <h2>${element.title}</h2>
            <p>${element.ingredients}<p>
            <p>Link to dish: <a href="${element.href}">${element.href}</a> </p>
            <img src="${element.thumbnail}" alt="${element.title}"/>
        </div>
        `;
      });
    } catch (error) {
      document.querySelector('.alert').innerHTML = showAlertTouser(
        'An error occured',
        'danger'
      );
    } finally {
      setTimeout(function () {
        document.querySelector('.alert').innerHTML = '';
      }, 3000);
    }
  }
  getFoodAPI(searchTerm);
};
