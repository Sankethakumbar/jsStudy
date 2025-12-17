# jsStudy

JavaScript learning and practice repository.
<img width="864" height="776" alt="image" src="https://github.com/user-attachments/assets/c471d40e-e5bc-4fe7-a9bc-3fb2ed6bffdf" />

/* ===============================
   Window & Document Exploration
   =============================== */

/*
window:
- The global object in the browser.
- Represents the browser window.
- All global variables, functions, and the DOM are part of window.
*/

console.log(window);

/*
document:
- Represents the HTML document loaded in the browser.
- Used to access and manipulate HTML elements (DOM).
*/

console.log(document);

/*
console.dir(document):
- Displays the document as a JavaScript object.
- Useful to explore properties and methods of document.
*/

console.dir(document);

/*
document.baseURI / document.baseURL:
- Returns the base URL of the current document.
- Used to know from where the page is loaded.
*/

console.log(document.baseURI);
console.log(document.baseURL);

/*
document.links:
- Returns an HTMLCollection of all <a> elements with href.
- HTMLCollection is NOT an array.
- Array methods like map(), filter(), forEach() do NOT work directly.
- Convert to array using Array.from() before applying array methods.
*/

console.log(document.links);

/* Example conversion:
   const linksArray = Array.from(document.links);
   linksArray.map(link => link.href);
*/

