const input = document.getElementById("search");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchByIngredients(event.target.value).then(
      response => buildCards(response)
    );
  }
});

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
    a.href= `/recipes/${recipe.id}`;
    
    cardBody.appendChild(h5);
    cardBody.appendChild(a);
    
    card.appendChild(cardBody);
    const div = document.createElement('div');
    div.className = 'col-lg-3 col-md-4 col col-sm-4 mt-md-2';
    div.appendChild(card);

    document.getElementById('recipes').appendChild(div);
  });
}
