/**
 * Create cards with recipes returned
 * @param {*} recipes array
 */
function buildSearchResult(recipes) {
  const recipesSection = document.getElementById('recipes');

  //clean the area before presenting the result.
  recipesSection.innerHTML = "";

  //if there are recipes build card element for eachone
  if (recipes && recipes.length > 0) {
    recipes.forEach(recipe => {
      recipesSection.appendChild(createRecipeCard(recipe));
    });
  } else {
    recipesSection.innerHTML = `
    <div class="d-flex justify-content-center">
      <p>No recipes were found!</p>
    </div>`;
  }
}

/**
 * Create a card elemente for each recipe.
 * The card elemente will be wrapped in a div with col-* classes.
 * @param {*} recipe 
 * @returns 
 */
function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'card';

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
  a.href = `/recipes.html?id=${recipe.id}`;

  cardBody.appendChild(h5);
  cardBody.appendChild(a);

  card.appendChild(cardBody);
  const wrapperDiv = document.createElement('div');
  //add gird system classes
  wrapperDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-md-2';
  wrapperDiv.appendChild(card);

  return wrapperDiv;
}

/**
 * Fetch a recipe by id
 * @param {*} id 
 */
function fetchRecipe(id) {
  getRecipeById(id).then(response => buildRecipe(response));
}

/**
 * build dom elements to represent the recipe.
 * The element built will be appended to a section with id #recipe
 */
function buildRecipe(recipe) {
  const title = document.createElement("h2");
  title.innerText = recipe.title;
  // update the page title with the recipe title
  document.title = `${document.title} | ${recipe.title} `;

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

  const ingredientsDiv = document.createElement("div");
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

/**
 * Create html elment for each ingredient in the list.
 */
function createIngredients(ingredients) {
  const list = document.createElement("ol");

  //for each ingredient a new list item will be create with name - amout unit
  ingredients
  // remove ingredient with id null. The api send this data but the ingredient has no name.
  .filter (ingredient => ingredient.id != -1)
  .forEach(ingredient => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = `/ingredient.html?id=${ingredient.id}&amount=${ingredient.amount}`;

    link.innerText = `${ingredient.nameClean} - ${ingredient.amount} ${ingredient.unit}`;
    li.appendChild(link);
    list.appendChild(li);
  });
  return list;
}

/**
 * Fetch ingredient by id
 */
function fetchIngredientById(id, amount) {
  getIngredientById(id, amount).then(ingredient => buildIngredient(ingredient));
}

/**
 * Build ingredient page with general description and nutrition detail.
 * @param {*} ingredient 
 */
function buildIngredient(ingredient) {
  const row = document.createElement("div");
  row.className = "row";
  document.getElementById("ingredient").appendChild(row);

  const title = document.createElement("h2");
  title.innerText = `${ingredient.amount} ${ingredient.name}`;
  document.title = `${document.title} | ${ingredient.name} `;

  const img = document.createElement("img");
  img.className = "img-fluid";
  img.alt = ingredient.name;
  img.src = getIngredientImageUrl(ingredient.image);

  const leftColumn = document.createElement("div");
  leftColumn.className = "col-12 col-sm-6";

  const rightColumn = document.createElement("div");
  rightColumn.className = "col-12 col-sm-6";
  const nutrientsRow = document.createElement("div");
  nutrientsRow.className = "row";
  rightColumn.appendChild(nutrientsRow);
  const nutrientTitle = document.createElement("h2");
  nutrientTitle.innerText = "Nutrients";
  nutrientsRow.appendChild(nutrientTitle);

  // for each nutrient a new div is created with a random background color
  ingredient.nutrition.nutrients
    .map(nutrient => {
      const element = document.createElement("div");
      element.className = 'col m-2 shadow';
      element.style = `background-color: ${getRandomColor()}`;
      element.innerHTML = `${nutrient.name} ${nutrient.amount}${nutrient.unit}`;
      return element;
    })
    .forEach(element => nutrientsRow.appendChild(element));

  // add elements to the page
  leftColumn.appendChild(title);
  leftColumn.appendChild(img);
  row.appendChild(leftColumn);
  row.appendChild(rightColumn);
}

/**
 * Pick one out of 4 colors in random order.
 * On each execution the funtion will generate a random index from 0 to 3
 * and use it as index to access the array.
 */
function getRandomColor() {
  const colors = [
    "#7FFFD4", //aquamarine
    "#F0FFFF", //azure
    "#7FFF00", //chartreuse
    "#FF8C00" //dark orange
  ];
  const index = Math.floor(Math.random() * 4);
  return colors[index];
}
