//function defination
function sayHi() {
    console.log("Hi")
}
//sayHi -refernce
sayHi()//calling function


//js allows only 1 expression after the return multiple values cannot be returned
//after return the code becomes unreachable and will not be executed
function sayHello() {
    return "Hello"
}
const hi = sayHello();
console.log(hi)



/*-------------Arguments not passed------------*/
//if parameters are not passed then it consider it as undefined
function nameUser(username) {//parameters
    return `${username} just logged in`;
}
console.log(nameUser())//argument not passed


/*-----------Default value-------------*/
//if parameters are not passed then it consider it as undefined
function callnameUser(username="sam") {
    return `${username} just logged in`;
}
console.log(callnameUser());
console.log(callnameUser("Sanketha"))

/*------------Rest operator-------------*/
//only num is passed as parameter than it consider only 1st value
//multiple values are passed then rest operator is used(objects) 
function numbers(val1, val2, ...num) {
    
    return num;
}
console.log(numbers(200, 3000, 40000, 500000))



/*------functions with the objects-------*/
//object
let user = {
    userName: "sanketha",
    id:"212121",
}
function handleUser(anyObject) {
    console.log(`UserName is ${anyObject.userName} and id is ${anyObject.id}`)
    
}
handleUser(user)
handleUser({
    userName: "Sneha",
    id:"343434"
})



/*------ functions with array--------*/
//array
const myNewArr = [200, 300, 400];
function arrFunction(arr) {
    console.log(arr[1])
}
arrFunction(myNewArr);
arrFunction([1, 2, 3, 4])


/**------------arrow-fn------------- */
//basic curly braces return keyword written----explicit return
let add = (n1, n2) => {
    return n1 + n2;
}

//implicit return- no return word required
let add2 = (n1, n2) => n1 + n2;

//wrapped in paraenthesis no need of return
let add3 = (n1, n2) => (n1 + n2);

//for object we need to wrap in paraenthese
const add4 = () => ({ username: "sanku" });
console.log(add4())

/**Difference between regular fn and arrow function */

/**     
1. reg has its own arguments
2. reg fn have to explictly return
3. reg fn define their own execution context(this)
*/

/**     
1. arrow fn dont have its own arguments
2. arrow fn can implicitly return
3. arrow fn  do not define their own execution context(this)
*/
function reg() {
    console.log("regular fn has arguments ")
    console.log(arguments)
};
reg("hi", 5, true)
reg()//output-[arguments]{}


const arrowfn = () => {
    console.log("Arrow fn has no arguments ")
    console.log(arguments)
}
arrowfn()

let myObj = {
    x: 2,
    regularfn() {
        console.log(this.x)//gives 2
    },
    arrowfn: () => console.log(this.x),//gives undefined
}
myObj.regularfn();
myObj.arrowfn();