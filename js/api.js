//API URLs, some urls have a placeholder to be replaced by the real data, such as {id}.
const recipeInformationUrl = 'https://api.spoonacular.com/recipes/{id}/information?';
const searchByIngredientsUrl = 'https://api.spoonacular.com/recipes/findByIngredients?';
const ingredientImageUrl = 'https://spoonacular.com/cdn/ingredients_500x500/{img}';
const ingredientInformationUrl = 'https://api.spoonacular.com/food/ingredients/{id}/information?';

/*
Search recipese by ingredients. 
The list of ingredients passed to the function is later used as a query param.
*/
async function searchByIngredients(ingredients){
  //create query params to be add to the url
  const params = new URLSearchParams({
    ingredients: ingredients,
    apiKey: config.apiKey,
  });
  const response = await fetch(searchByIngredientsUrl+params,{});
  if (!response.ok) {
    console.error('Something went wrong!');
  }
  const responseData = await response.json();
  return responseData;
}

/*
Find a recipe by ID. 
This function is called to build a specific recipe page.
*/
async function getRecipeById(id){
  const url = recipeInformationUrl.replace('{id}',id);
  //create query params to be add to the url
  const params = new URLSearchParams({
    apiKey: config.apiKey,
  });
  const response = await fetch(url+params,{});
  if (!response.ok) {
    console.error('Something went wrong!');
  }
  const responseData = await response.json();
  return responseData;
}

/*
Get ingredient  by ID. 
This function is called to build a specific ingredient page.
If the amout is informed it will be used in the request.
*/
async function getIngredientById(id, amount = 1){
  const url = ingredientInformationUrl.replace('{id}',id);
  //create query params to be add to the url
  const params = new URLSearchParams({
    apiKey: config.apiKey,
    amount: amount
  });
  const response = await fetch(url+params,{});
  if (!response.ok) {
    console.error('Something went wrong!');
  }
  const responseData = await response.json();
  return responseData;
}

function getIngredientImageUrl(img) {
  return ingredientImageUrl.replace('{img}',img);
}
