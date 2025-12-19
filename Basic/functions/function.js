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
arrFunction([1,2,3,4])