//diff

//basic maipulation
console.log(document.getElementById("header"));
console.log(document.getElementById("header").id);
console.log(document.getElementById("header").class);
console.log(document.getElementById("header").className);
console.log(document.getElementById("header").getAttribute("id"));
console.log(document.getElementById("header").getAttribute("class"));

/* ===============================
innerText vs textContent vs innerHTML
=============================== */

const element = document.getElementById("header");

/*
innerText:
- Returns visible text only
- Affected by CSS
*/
console.log(element.innerText);

/*
textContent:
- Returns all text
- Includes hidden text
*/
console.log(element.textContent);

/*
innerHTML:
- Returns HTML + text
- Can insert HTML
*/
console.log(element.innerHTML);