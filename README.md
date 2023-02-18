# find-a-recipe

Find a recipe based on ingredients.

This project was built only with HTML, CSS and vanilla JavaScript. It is part of the final project of web programming and multimedia course.

The project uses [Spoonacular API](https://spoonacular.com/food-api) to find recipes based on ingredients.

## Demo


<iframe width="560" height="315" src="https://www.youtube.com/embed/3EUDertcewE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## How to run

1. Create a file `js/config.js` with the spoonacular api key.

```javascript
const config = {
  apiKey: 'your-api-key'
}
```

2. Serve the pages with a static server. You can use `npx` if you have node installed, but any static server will do the job.

```
npx http-server
```

## Project structure

There are 3 pages:

 - [index.html](index.html) - this is the first page. The user can search by ingredients here. The results will be presented below the search area.
 - [recipes.html](recipes.html) - this page is responsible for redering the recipe selected by the user.
 - [ingredients.html](ingredient.html) - this page presents the nutrition information about the igredient.

### JS

All js files are located under `js` directory.
 - `main.js` file contains the code related to DOM manipulation.
 - `api.js` file contains functions to fech data from Spoonacular API.
 - `util.js` file contains helper functions. 
 - `config.js` file holds the api key. This file is not under git control.

### CSS

The project uses Bootstrap as CSS library.
There is only one css file, the [style.css](css/style.css). This file contains css animation for the logo.

## License

The project is licensed under the apache license version 2.0.
