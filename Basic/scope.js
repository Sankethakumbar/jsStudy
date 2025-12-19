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


 
console.table([accoundId, accountEmail, pass, accountCity, accountState])

// scope of i only in for loop
for (let i = 0; i < 10; i++){
    console.log(i);
}
//console.log(i)-error not defined i


//scopes are the {} curly braces
//nested scope
function one() {
    const userName = "sanketha";
    function two() {
        const nickName = "chitti";
        console.log("Function two",userName);  
    }
    two() 
    console.log("Function one", userName)    
}

one()


/**----------Hoisting---------- */
//normal function
console.log("Before",addOne(5))
function addOne(num) {
    return num + 1;
}
console.log("after:", addOne(5))


//fn to a variable
// console.log("Before",addOne(6))--this will create an error because it is assigned to a variable
const addTwo=function(num) {
    return num + 2;
}
console.log("after:", addTwo(6))
