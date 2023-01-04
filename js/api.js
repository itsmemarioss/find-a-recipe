const recipeInformationUrl = 'https://api.spoonacular.com/recipes/{id}/information?';
const searchByIngredientsUrl = 'https://api.spoonacular.com/recipes/findByIngredients?';

async function searchByIngredients(ingredients){
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

async function getRecipeById(id){
  const url = recipeInformationUrl.replace('{id}',id);
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
