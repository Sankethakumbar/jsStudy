const accoundId = 12345;
let accountEmail = "sanketha@gmail.com";
var pass = "sanku@123";
accountCity = "karnatak";
let accountState;

// accoundId = 2; not allowed Assignment to constant variable

accountEmail = "hd@gmail.com";
pass = "212121"
accountCity="andra"


//Prefer not to use var because of issue in block scope and functional scope
/*Scope*/
//var - function
//let - block
//const- block


 
console.table([accoundId,accountEmail,pass,accountCity,accountState])