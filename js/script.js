const foodURL = 'http://www.recipepuppy.com/api/?i=&q=&p=3';
const foodAPI = 'http://www.recipepuppy.com/api/';
const proxy = 'https://noroffcors.herokuapp.com/';
const selector = document.querySelector('#ingredientSelector');

selector.onchange = function () {
  console.log(selector.value);
};

const fullAPI = proxy + foodAPI;

async function getFoodAPI(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
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
getFoodAPI(fullAPI);
