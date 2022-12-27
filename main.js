const input = document.getElementById("search");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchByIngredients(event.target.value);
  }
});

function searchByIngredients(ingredients){
  console.log(ingredients);
}
