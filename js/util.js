/*
Util functions to help during page rendering 
*/

/*
Add a function to be executed when page loads.
It will execute a callback function with params found in the url.

Solution based on:
https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
function onLoad( callback ){
  document.addEventListener("DOMContentLoaded", function() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    
    callback(params);
  });
}
