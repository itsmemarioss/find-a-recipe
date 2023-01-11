/**
 * Create cards with recipes returned
 * @param {*} recipes array
 */
function buildCards(recipes){
  recipes.forEach(recipe => {    
    const card = document.createElement('div');
    card.className = 'card';
    card.style = 'width: 18rem;'
    
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = recipe.image;
    card.appendChild(img);
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = recipe.title;

    const a = document.createElement('a');
    a.className = 'btn btn-primary';
    a.innerText = 'View recipe';
    a.href= `/recipes.html?id=${recipe.id}`;
    
    cardBody.appendChild(h5);
    cardBody.appendChild(a);
    
    card.appendChild(cardBody);
    const div = document.createElement('div');
    div.className = 'col-lg-3 col-md-4 col col-sm-4 mt-md-2';
    div.appendChild(card);

    document.getElementById('recipes').appendChild(div);
  });
}

/*
Fetch a recipe by id
*/
function fetchRecipe(id){
  getRecipeById(id).then(response => buildRecipe(response));
}

/*
build dom elements to represent the recipe.
The element built will be appended to a section with id #recipe
*/
function buildRecipe(recipe){
  
  const title = document.createElement("h2");
  title.innerText = recipe.title;

  const summaryHeader = document.createElement("h3");
  summaryHeader.innerText = "Summary";
  const summary = document.createElement("p");
  summary.innerHTML = recipe.summary;

  const img = document.createElement("img");
  img.className = "img-fluid";
  img.alt = recipe.title;
  img.src = recipe.image;
  
  const instructions = document.createElement("section");
  instructions.innerHTML = recipe.instructions;
  const instructionsHeader = document.createElement("h3");
  instructionsHeader.innerText = "Instructions";
  instructions.prepend(instructionsHeader);

  const ingredientsDiv =  document.createElement("div");
  const ingredientsHeader = document.createElement("h3");
  ingredientsHeader.innerText = 'Ingredients';
  ingredientsDiv.appendChild(ingredientsHeader);
  ingredientsDiv.appendChild(createIngredients(recipe.extendedIngredients));

  document.getElementById("recipe").appendChild(title);
  document.getElementById("recipe").appendChild(img);
  document.getElementById("recipe").appendChild(summaryHeader);
  document.getElementById("recipe").appendChild(summary);
  document.getElementById("recipe").appendChild(ingredientsDiv);
  document.getElementById("recipe").appendChild(instructions);
}

/*
Create html elment for each ingredient in the list.
*/
function createIngredients(ingredients){
  const list = document.createElement("ol");
  
  //for each ingredient a new list item will be create with name - amout unit
  ingredients.forEach( ingredient => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    // TODO add amount to the url
    link.href= `/ingredient.html?id=${ingredient.id}`;
    
    link.innerText = `${ingredient.nameClean} - ${ingredient.amount} ${ingredient.unit}`;
    li.appendChild(link);
    list.appendChild(li);
  });
  return list;
}

/*
Fetch ingredient by id
*/
function fetchIngredientById(id){
  alert(id);
  document.getElementById("ingredient").innerText = `${id}`;
  console.log(getIngredientById(id));
}
